const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 1,
      name: "",
      confirmedName: "",
    }
  },
  computed: {
    fullname() {
      console.log("Running again")
      if (this.name === "") {
        return ""
      }
      return this.name + " " + "LastName"
    },
  },
  methods: {
    add() {
      console.log("add to counter Running again")
      this.counter += this.increment
    },
    reduce() {
      console.log("eeduce counter Running again")
      this.counter -= this.increment
    },
    setIncrement(e) {
      console.log(" set increment Running again")
      this.increment = Number(e.target.value)
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName
    },
    confirmInput(e) {
      this.confirmedName = e.target.value
    },
    submitForm() {
      alert("Submitted")
    },
    resetInput() {
      this.name = ""
    },
    outputFullname() {},
  },
})

app.mount("#events")
