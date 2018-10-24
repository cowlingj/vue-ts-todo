<template>
<div>
    <h2>Plan Your Day</h2>
    <div>
      <input type="text" placeholder="I need to..." v-model="userInput">
      <input type="button" value="Add" @click="addTodo"><br>
      <input type="button" value="Clear list" @click="clearList">
    </div>
</div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { store } from "../store";

// normal syntax
export default Vue.extend({

  data: () => { return {
      userInput: "",
      list: store.list
    }
  },

  methods: {

    addTodo() {
       store.actions.pushToList(this.userInput);
       this.userInput = "";
    },

    clearList() {
      store.actions.clearList();
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
