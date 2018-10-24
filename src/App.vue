<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ToDoInput />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue"

@Component({
  components: {
    ToDoInput,
    TodoList
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
