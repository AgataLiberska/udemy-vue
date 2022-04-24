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
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName
    },
  },
})

app.mount("#events")
