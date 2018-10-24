import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  data: {
  },
}).$mount("#app");
