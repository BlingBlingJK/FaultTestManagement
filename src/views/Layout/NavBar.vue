<template>
  <div class="navbar" :class="{ isCollapse: isCollapse }">
    <h1 class="logo">
      <img src="../../assets/images/logo.png" alt="" width="32px" />
      <span v-show="!isCollapse">通用后台管理系统</span>
    </h1>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
    >
      <div v-for="(item, idx) in menuData" :key="idx">
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title">
            <i class="el-icon-location"></i>
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
          <i class="el-icon-menu"></i>
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
      menuData: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "客户管理",
          path: "/customer",
          children: [
            { title: "客户档案", path: "/customer" },
            { title: "拜访记录", path: "/visit" },
          ],
        },
        {
          title: "修养预约",
          path: "/business",
          children: [
            { title: "预约信息", path: "/appointment" },
            { title: "服务项", path: "/service" },
            { title: "结算单", path: "/statement" },
          ],
        },
        {
          title: "流程管理",
          path: "/flow",
          children: [{ title: "审核流程定义", path: "/definition" }],
        },
      ],
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.navCollapse.isCollapse,
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
  position: relative; //阴影重叠消除
  transition: all 1s; //收缩动画，延时一秒

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
    }
    padding: 10px 16px;
    span {
      min-width: 130px;
      color: #fff;
      font-weight: bold;
      display: inline-block;
      //脱标处理
      position: absolute;
      top: 16px;
    }
  }
}
.isCollapse .el-submenu__title span,
::v-deep .el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
</style>
