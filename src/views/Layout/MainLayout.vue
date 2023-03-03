<template>
  <div class="layout">
    <NavBar></NavBar>
    <div class="layout-right" :class="isCollapse ? 'isCol' : 'isnotCol'">
      <HeaderView></HeaderView>
      <ContentView></ContentView>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./NavBar.vue";
import HeaderView from "./HeaderView.vue";
import ContentView from "./ContentView.vue";
export default {
  name: "MainLayout",
  components: { NavBar, HeaderView, ContentView },
  computed: {
    ...mapState({
      isCollapse: (state) => state.navCollapse.isCollapse,
    }),
  },
};
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;

  .layout-right {
    flex: 1;
  }
}
.isCol {
  padding-left: 64px;
  transition: all 0.5s; //收缩动画，延时一秒
}
.isnotCol {
  padding-left: 220px;
}
</style>
