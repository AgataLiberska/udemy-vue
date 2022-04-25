const app = Vue.createApp({
  data() {
    return {
      result: 0,
    }
  },
  computed: {
    output() {
      if (this.result === 37) {
        return this.result
      } else if (this.result < 37) {
        return "Not there yet"
      } else {
        return "Too much!"
      }
    },
  },
  watch: {
    result() {
      const that = this
      setTimeout(() => {
        that.result = 0
      }, 5000)
    },
  },
  methods: {
    add(num) {
      this.result += num
    },
  },
})

app.mount("#assignment")
