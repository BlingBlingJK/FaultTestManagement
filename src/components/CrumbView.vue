<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in titles" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //title值和当前所在的路由相关，路由一变，它就变
      titles: [],
    };
  },
  watch: {
    $route: {
      immediate: true, //立即监听属性，刷新页面时
      handler() {
        this.titles = this.$route.meta.titles;
      },
    },
  },
};
</script>

<style>
.el-breadcrumb {
  line-height: 50px;
  font-size: 15px;
}
</style>
