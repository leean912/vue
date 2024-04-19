<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div style="text-align: center; font-family: sans-serif">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
  <v-button :onClick="alertPopUp">Alert</v-button>
  <v-button :onClick="confirmPopUp">Confirm</v-button>
  <v-button :onClick="increment">Increase number: {{ num }}</v-button>
</template>

<script>
import Button from "./components/PrimaryButton";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      num: 0,
    };
  },
  name: "App",
  components: {
    "v-button": Button,
  },
  props: {
    title: {
      type: String,
      default: "test default",
    },
    subtitle: {
      type: String,
      default: "test subtitle",
    },
  },
  methods: {
    consoleClick() {
      console.log("Button clicked");
    },
    alertPopUp() {
      alert("I am an alert box!");
    },
    confirmPopUp() {
      var txt;

      if (confirm("I am a confirm box!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
      alert(txt);
    },
    increment() {
      this.num++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
