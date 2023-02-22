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
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <!-- <el-menu-item-group> -->
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <!-- <el-menu-item-group> -->
        <!-- <template slot="title">分组一</template> -->
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
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
</style>
