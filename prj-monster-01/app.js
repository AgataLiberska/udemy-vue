const getRandomValue = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    }
  },
  computed: {
    monsterBarStyles() {
      return {
        width: this.monsterHealth > 0 ? this.monsterHealth + "%" : "0%",
        backgroundColor:
          this.monsterHealth < 10
            ? "#f83c3c"
            : this.monsterHealth < 25
            ? "#f8ae3c"
            : "#00a876",
      }
    },
    playerBarStyles() {
      return {
        width: this.playerHealth > 0 ? this.playerHealth + "%" : "0%",
        backgroundColor:
          this.playerHealth < 15
            ? "#f83c3c"
            : this.playerHealth < 25
            ? "#f8ae3c"
            : "#00a876",
      }
    },
    specialAttackDisabled() {
      return this.currentRound % 3 !== 0
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //a draw
        this.winner = "draw"
      } else if (value <= 0) {
        //playerlost
        this.winner = "monster"
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a draw
        this.winner = "draw"
      } else if (value <= 0) {
        // monster lost
        this.winner = "player"
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++
      const attackValue = getRandomValue(5, 12)
      this.monsterHealth -= attackValue
      this.addLogMessage("player", "attack", attackValue)
      this.attackPlayer()
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15)
      this.addLogMessage("monster", "attack", attackValue)
      this.playerHealth -= attackValue
    },
    specialAttackMonster() {
      this.currentRound++
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth -= attackValue
      this.addLogMessage("player", "attack", attackValue)
      this.attackPlayer()
    },
    healPlayer() {
      this.currentRound++
      const healValue = getRandomValue(8, 20)
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += healValue
      }
      this.addLogMessage("player", "heal", healValue)
      this.attackPlayer()
    },
    surrender() {
      this.winner = "monster"
    },
    restart() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.winner = null
      this.currentRound = 0
      this.logMessages = []
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      })
    },
  },
})

app.mount("#game")
