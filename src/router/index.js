import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../../src/views/Layout/MainLayout.vue";
import LoginView from "../../src/views/Login/LoginView.vue";
import { GetUserRouterApi } from "../request/api";
import store from "@/store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainlayout",
    component: MainLayout,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("edb-authorization-token");
  // 如果访问登陆页面，但是有token，跳转到首页
  if (to.path === "/login" && token) {
    next("/");
    return;
  }
  //如果访问的不是登录页面，也没有token，跳转到登陆页面
  if (to.path !== "/login" && !token) {
    next("/login");
    return;
  }
  // userMenuData：文件夹名称，menuData：数据;
  if (token && store.state.userMenuData.menuData.length === 0) {
    let GetUserRouterApiRes = await GetUserRouterApi();
    console.log(GetUserRouterApiRes);
  }
  next();
});

export default router;
