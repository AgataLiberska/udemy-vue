const app = Vue.createApp({
  data() {
    return {
      myName: "Agata",
      myAge: 33,
      myImage:
        "https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg",
      myInput: "Hello World",
    }
  },
  methods: {
    generateFavNumber() {
      return Math.random()
    },
  },
})

app.mount("#assignment")
