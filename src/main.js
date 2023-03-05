import Vue from "vue";
//清除默认样式
import "reset-css";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import store from "./store";
import "@/assets/icons/index";
import "@/utils/filters";
import dataV from "@jiaminghi/data-view";
import echarts from "echarts";

Vue.use(dataV);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
