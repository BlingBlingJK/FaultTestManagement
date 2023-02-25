export default {
  namespaced: true,
  state: {
    menuData: [],
  },
  mutations: {
    changeMenuData(state, payload) {
      state.menuData = payload;
    },
  },
};
