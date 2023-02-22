import Vue from "vue";
import Vuex from "vuex";
import navCollapse from "./navCollapse";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navCollapse,
  },
});
