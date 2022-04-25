const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 1,
      name: "",
      confirmedName: "",
      //fullname: "",
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
  watch: {
    // name(value) {
    //   this.fullname = value + " " + "Last"
    // },
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
