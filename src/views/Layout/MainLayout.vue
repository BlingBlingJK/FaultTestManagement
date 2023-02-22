<template>
  <div class="layout">
    <NavBar></NavBar>
    <div class="layout-right">
      <HeaderView></HeaderView>
      <ContentView></ContentView>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import HeaderView from "./HeaderView.vue";
import ContentView from "./ContentView.vue";
export default {
  name: "MainLayout",
  components: { NavBar, HeaderView, ContentView },
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
</style>
