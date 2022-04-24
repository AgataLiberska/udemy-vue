const app = Vue.createApp({
  data() {
    return {
      text: " ",
      confirmedText: " ",
    }
  },
  methods: {
    showAlert() {
      alert("hello")
    },
    showText(e) {
      this.text = e.target.value
    },
    confirmText(e) {
      this.confirmedText = e.target.value
    },
  },
})

app.mount("#assignment")
