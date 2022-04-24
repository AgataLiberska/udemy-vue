const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 1,
    }
  },
  methods: {
    add() {
      this.counter += this.increment
    },
    reduce() {
      this.counter -= this.increment
    },
    setIncrement() {
      const incrementEl = document.querySelector('input[type="number"]')
      this.increment = Number(incrementEl.value)
    },
  },
})

app.mount("#events")
