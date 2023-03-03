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
      @click="goTo(item.path)"
      @close="close(index)"
      @contextmenu.native.prevent="rightClick($event, index)"
    >
      <i
        class="cir"
        v-show="item.title == $route.meta.titles[$route.meta.titles.length - 1]"
      ></i
      >{{ item.title }}</el-tag
    >
    <TagsMenuView
      v-show="isShowTagsMenu"
      :clientX="clientX"
      :clientY="clientY"
      :clickIndex="clickIndex"
      :tagsLength="tags.length"
      @fn="clickMenu"
    />
  </div>
</template>

<script>
import TagsMenuView from "./TagsMenuView.vue";
export default {
  data() {
    return {
      tags: [
        {
          title: "首页",
          path: "/home",
        },
      ],
      isShowTagsMenu: false,
      clientX: 0,
      clientY: 0,
      clickIndex: 0,
    };
  },
  mounted() {
    document.addEventListener("click", this.closeMenu);
  },
  destroyed() {
    document.removeEventListener("click", this.closeMenu);
  },
  components: {
    TagsMenuView,
  },
  methods: {
    clickMenu(i) {
      //刷新页面
      if (i == 0) {
        console.log("shuaxin");
      }
      //关闭当前页
      if (i == 1) {
        this.tags = this.tags.filter(
          (item, index) => index !== this.clickIndex
        );
      }
      //关闭其他页
      if (i == 2) {
        this.tags = this.tags.filter(
          (item, index) => index == this.clickIndex || index == 0
        );
      }
      //关闭左侧
      if (i == 3) {
        this.tags = this.tags.filter(
          (item, index) => index >= this.clickIndex || index == 0
        );
      }
      //关闭右侧
      if (i == 4) {
        this.tags = this.tags.filter(
          (item, index) => index <= this.clickIndex || index == 0
        );
      }
      //全部关闭
      if (i == 5) {
        this.tags = [
          {
            title: "首页",
            path: "/home",
          },
        ];
        this.goTo("/home");
      }
    },

    rightClick(e, i) {
      // console.log("右键点击了", i);
      this.isShowTagsMenu = true;
      this.clientX = e.clientX;
      this.clientY = e.clientY;
      this.clickIndex = i;
      //关闭浏览器默认菜单
      // window.event.returnValue = false;
      // return false;
    },
    closeMenu() {
      this.isShowTagsMenu = false;
    },
    goTo(path) {
      this.$router.push(path);
    },
    close(i) {
      this.closeMenu();
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
