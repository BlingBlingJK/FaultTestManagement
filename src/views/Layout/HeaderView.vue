<template>
  <div class="header">
    <el-button
      icon="el-icon-s-unfold"
      v-show="!isShow"
      @click="changeShow"
    ></el-button>
    <el-button
      icon="el-icon-s-fold"
      v-show="isShow"
      @click="changeShow"
    ></el-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    ...mapMutations({
      changeIsCollapse: "navCollapse/changeIsCollapse",
    }),
    changeShow() {
      this.isShow = !this.isShow;
      this.changeIsCollapse();
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 84px;
  box-shadow: 0px 5px 5px #ddd;

  button {
    margin: 0;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border: none;
    padding: 12px 10px;
  }
}
</style>
