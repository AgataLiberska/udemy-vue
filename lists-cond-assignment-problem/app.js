const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      isListVisible: true,
    }
  },
  computed: {
    buttonText() {
      return this.isListVisible ? "Hide List" : "Show List"
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask)
    },
    toggleList() {
      this.isListVisible = !this.isListVisible
    },
  },
})

app.mount("#assignment")
