<template>
  <div class="content">
    <!-- mode 解决不同时出现的问题 -->
    <transition name="fade-transition" mode="out-in">
      <!-- 跳转所取 -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
}

//自定义过渡动画
.fade-transition-enter,
.fade-transition-leave-to {
  opacity: 0;
}
.fade-transition-enter-to,
.fade-transition-leave {
  opacity: 1;
}
.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: all 0.2s;
}
</style>
