Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
      this.enteredValue = ""
    },
  },
}).mount("#app")

// const inputEl = document.getElementById("goal");
// const buttonEl = document.querySelector('button');
// const listEl = document.querySelector('ul');

// buttonEl.addEventListener('click', () => {
//     let newGoal = inputEl.value;
//     if (newGoal) {
//         let newLi = document.createElement('li');
//         newLi.innerHTML = newGoal;
//         listEl.appendChild(newLi);
//         inputEl.value = '';
//     }
// })
