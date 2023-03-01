<template>
  <div class="tags">
    <el-tag
      class="tag"
      size="medium"
      :closable="index > 0"
      v-for="(item, index) in tags"
      :key="item.path"
      :effect="
        item.title == $route.meta.titles[$route.meta.titles.length - 1]
          ? 'dark'
          : 'plain'
      "
      @click="$router.push(item.path)"
      @close="close(index)"
    >
      <i
        class="cir"
        v-show="item.title == $route.meta.titles[$route.meta.titles.length - 1]"
      ></i
      >{{ item.title }}</el-tag
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          title: "首页",
          path: "/home",
        },
      ],
    };
  },
  methods: {
    close(i) {
      if (this.tags[i].path === this.$route.path) {
        if (i !== this.tags.length - 1) {
          this.$router.push(this.tags[this.tags.length - 1].path);
        } else {
          this.$router.push(this.tags[this.tags.length - 2].path);
        }
      }
      this.tags.splice(i, 1);
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        // console.log(val.meta.titles);
        if (
          !this.tags.find((item) => {
            return item.path === val.path;
          })
        ) {
          this.tags.push({
            title: val.meta.titles[val.meta.titles.length - 1],
            path: val.path,
          });
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.tags {
  padding-left: 15px;
  padding-top: 4px;
  .tag {
    cursor: pointer;
    margin-right: 4px;
    .cir {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: white;
      display: inline-block;
      margin-right: 4px;
    }
  }
}
</style>
