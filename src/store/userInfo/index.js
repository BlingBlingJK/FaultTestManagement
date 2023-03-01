import { GetUserInfoApi } from "../../request/api";
export default {
  namespaced: true,
  state: {
    userInfo: JSON.parse(localStorage.getItem("edb-userInfo")) || {
      permissions: null,
      roles: null,
      user: null,
    },
  },
  //同步
  mutations: {
    changeUserInfo(state, payload) {
      state.userInfo = payload;
      localStorage.setItem("edb-userInfo", JSON.stringify(state.userInfo));
    },
  },
  //异步
  actions: {
    async asyncChangeUserInfo({ commit }) {
      let GetUserInfoApiRes = await GetUserInfoApi();
      console.log("GetUserInfoApiRes", GetUserInfoApiRes);
      if (!GetUserInfoApiRes) return;
      commit("changeUserInfo", {
        permissions: GetUserInfoApiRes.permissions,
        roles: GetUserInfoApiRes.roles,
        user: GetUserInfoApiRes.user,
      });
    },
  },
};
