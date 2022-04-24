const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 1,
      name: "",
    }
  },
  methods: {
    add() {
      this.counter += this.increment
    },
    reduce() {
      this.counter -= this.increment
    },
    setIncrement(e) {
      this.increment = Number(e.target.value)
    },
    setName(e) {
      this.name = e.target.value
    },
  },
})

app.mount("#events")
