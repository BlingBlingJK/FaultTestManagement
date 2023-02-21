import Vue from "vue";
import "reset-css";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
