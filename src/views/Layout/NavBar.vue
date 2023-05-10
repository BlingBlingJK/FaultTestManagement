<template>
  <div class="navbar" :class="{ isCollapse: isCollapse }">
    <h1 class="logo">
      <img src="../../assets/images/logo1.png" alt="" width="32px" />
      <span v-show="!isCollapse">列车故障测试管理系统</span>
    </h1>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
      :default-active="$route.path"
    >
      <div v-for="(item, idx) in menuData" :key="idx">
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <svg-icon
              :icon-file-name="item.icon"
              style="margin: 0 10px 0 4px"
            ></svg-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            :index="it.path"
            v-for="(it, id) in item.children"
            :key="id"
            >{{ it.title }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
          <svg-icon
            :icon-file-name="item.icon"
            style="margin: 0 10px 0 4px"
          ></svg-icon>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // menuData: [
      // {
      //   title: "首页",
      //   path: "/home",
      //   icon: "dashboard",
      // },
      // {
      //   title: "客户管理",
      //   path: "/customer",
      //   icon: "peoples",
      //   children: [
      //     { title: "客户档案", path: "/customer/customer" },
      //     { title: "拜访记录", path: "/customer/visit" },
      //   ],
      // },
      // {
      //   title: "修养预约",
      //   path: "/business",
      //   icon: "tool",
      //   children: [
      //     { title: "预约信息", path: "/business/appointment" },
      //     { title: "服务项", path: "/business/service" },
      //     { title: "结算单", path: "/business/statement" },
      //   ],
      // },
      // {
      //   title: "流程管理",
      //   path: "/flow",
      //   icon: "server",
      //   children: [{ title: "审核流程定义", path: "/flow/definition" }],
      // },
      // ],
    };
  },
  //从vuex里面拿数据进行渲染
  computed: {
    ...mapState({
      isCollapse: (state) => state.navCollapse.isCollapse,
      //请求菜单数据失败时，写死
      menuData: (state) => state.userMenuData.menuData,
    }),
  },
};
</script>

<style lang="less" scoped>
.navbar {
  height: 100%;
  width: 220px;
  background-color: #304156;
  box-shadow: 5px 0 5px #bbb;
  position: fixed; //阴影重叠消除
  transition: all 0.5s; //收缩动画，延时一秒

  .el-menu {
    border: none;
  }
  &.isCollapse {
    width: 64px;
  }
  .logo {
    position: relative;
    img {
      vertical-align: middle;
      border-radius: 10px;
    }
    padding: 10px 10px;
    span {
      min-width: 130px;
      color: #fff;
      font-weight: bold;
      display: inline-block;
      //脱标处理
      position: absolute;
      top: 16px;
      padding-left: 5px;
    }
  }
}
//在折叠的情况下 display: none；若没折叠则没这个类
.isCollapse .el-submenu__title span,
::v-deep .el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
.el-submenu .el-menu-item {
  background-color: rgb(38, 52, 69) !important;
}
.el-submenu .el-menu-item:hover {
  background-color: #444 !important;
}
::v-deep .el-submenu__title:hover {
  background-color: #444 !important;
}
</style>
