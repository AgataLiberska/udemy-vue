<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="enteredEmail" />
    </div>
    <button type="submit">Add New Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    }
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      )
      this.enteredName = ""
      this.enteredPhone = ""
      this.enteredEmail = ""
    },
  },
}
</script>

<style>
form {
  width: min(90%, 40rem);
  margin-inline: auto;
  margin-bottom: 3rem;
  text-align: center;
}

div {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #58004d;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: none;
  border-radius: 8px;
}
#app button[type="submit"] {
  padding: 10px;
}
</style>
