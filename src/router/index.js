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
    redirect: "/home",
    // 路由不能写死，不然没有权限也能访问
    children: [
      // 初始值
      {
        path: "/home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/customer/customer",
        component: () => import("../views/customer/CustomerView.vue"),
      },
      {
        path: "/customer/visit",
        component: () => import("../views/customer/VisitView.vue"),
      },
      {
        path: "/flow/definition",
        component: () => import("../views/flow/DefinitionView.vue"),
      },
      {
        path: "/business/appointment",
        component: () => import("../views/business/AppointmentView.vue"),
      },
      {
        path: "/business/service",
        component: () => import("../views/business/ServiceView.vue"),
      },
      {
        path: "/business/statement",
        component: () => import("../views/business/StatementView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "*",
    component: () => import("../views/notFound404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("edb-authorization-token");
  //两个经典的逻辑
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
    let newUserMenuData = [
      {
        title: "首页",
        path: "/",
        icon: "dashboard",
      },
    ];
    let ret = GetUserRouterApiRes.data.map((item) => {
      //判断是否有孩子，二级菜单
      if (item.children) {
        return {
          title: item.meta.title,
          icon: item.meta.icon,
          path: item.path,
          children: item.children.map((c) => {
            return {
              title: c.meta.title,
              path: item.path + "/" + c.path, //和父拼起来
            };
          }),
        };
      } else {
        return {
          title: item.meta.title,
          path: item.path,
          icon: item.meta.icon,
        };
      }
    });
    newUserMenuData = [...newUserMenuData, ...ret];
    store.commit("userMenuData/changeMenuData", newUserMenuData);
    console.log(newUserMenuData);
    // 以上生成菜单数据
    // 以下生成路由数据
    // let newChildrenRoutes = [
    //   {
    //     path: "/home",
    //     component: () => import("../views/HomeView.vue"),
    //   },
    // ];
    // GetUserRouterApiRes.data.forEach((item) => {
    //   let ret = item.children.map((sitem) => {
    //     return {
    //       path: item.path + "/" + sitem.path,
    //       component: () =>
    //         import("../views" + item.path + "/" + sitem.name + "View.vue"),
    //     };
    //   });
    //   newChildrenRoutes = [...newChildrenRoutes, ...ret];
    // });
    // //添到mainlayout路由中
    // newChildrenRoutes.forEach((item) => {
    //   router.addRoute("mainlayout", item);
    // });
    // next(to.path); //重新进路由守卫，查验一遍
    // return;
  }
  next();
});

//解决router3.2.x以上存在的报错信息
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(() => {});
};
export default router;
