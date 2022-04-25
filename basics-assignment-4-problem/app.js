const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      isPVisible: true,
      inputBackgroundColor: "#000",
    }
  },
  computed: {
    pClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        hidden: this.isPVisible === false,
        visible: this.isPVisible === true,
      }
    },
  },
  methods: {
    toggleP() {
      this.isPVisible = !this.isPVisible
    },
  },
})

app.mount("#assignment")
