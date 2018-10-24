<template>
  <div class="tasklist">
    <h2>In Progress</h2>
    <div v-for="item in list" v-bind:key="item" id="task">
      <p>{{item}}</p>
      <input type="button" value="Scratch" @click="scrapItem">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { store } from '../store'

// use decorator syntax
@Component
export default class TodoList extends Vue {

  list = store.list;

  scrapItem(itemToRemove: string) {
     
     store.actions.removeItem(itemToRemove);
    }

}
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
