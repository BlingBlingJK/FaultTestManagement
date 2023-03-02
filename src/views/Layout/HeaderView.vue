<template>
  <div class="header">
    <div class="header-top">
      <div class="fl">
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
      <div class="fl">
        <CrumbView></CrumbView>
      </div>
      <div class="fr">
        <el-dropdown @command="hdCommand">
          <div class="avatar-box">
            <img
              width="40px"
              :src="
                IMG_BASEURL +
                (userInfo.user.avatar ||
                  '/profile/avatar/2022/10/10/blob_20221010200353A001.jpeg')
              "
              alt=""
            />
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item divided command="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>

        <!-- {{ userInfo.user.nickName }} -->
      </div>
    </div>
    <div class="header-bottom">
      <TagView></TagView>
    </div>
  </div>
</template>

<script>
import { IMG_BASEURL } from "@/utils/baseurl";
import { mapMutations, mapState } from "vuex";
import CrumbView from "@/components/CrumbView.vue";
import TagView from "@/components/TagView.vue";
export default {
  data() {
    return {
      isShow: true,
      IMG_BASEURL,
    };
  },
  components: {
    CrumbView,
    TagView,
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo.userInfo,
    }),
  },
  methods: {
    ...mapMutations({
      changeIsCollapse: "navCollapse/changeIsCollapse",
    }),
    changeShow() {
      this.isShow = !this.isShow;
      this.changeIsCollapse();
    },
    hdCommand(command) {
      if (command == "logout") {
        localStorage.removeItem("edb-authorization-token");
        localStorage.removeItem("edb-userInfo");
        this.$router.push("/login");
      }
      if (command == "profile") {
        this.$router.push("/profile");
      }
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
  .header-top {
    height: 50px;
    box-shadow: 0px 2px 2px #ddd;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .avatar-box {
    padding: 5px 20px 0 0;
    img {
      border-radius: 50px;
    }
    img,
    i {
      cursor: pointer;
    }
  }
}
</style>
