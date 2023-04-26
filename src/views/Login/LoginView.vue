<template>
  <div class="login-page">
    <div class="login-box">
      <h1>列车故障测试管理系统</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item :label="`密\xa0\xa0\xa0\xa0码`" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captchacode">
          <div class="captcha-box">
            <el-input v-model.number="ruleForm.captchacode"></el-input>
            <img height="40" :src="captchaSrc" alt="" @click="getCaptchacode" />
          </div>
        </el-form-item>
        <el-form-item id="login-btn-box">
          <el-button
            class="login-btn"
            type="primary"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validateUsername } from "../../utils/validate";
import { GetCaptChaCodeApi, LoginApi } from "../../request/api";
// import { GetCaptchaCodeApi, LoginApi } from "@/request/api";
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        username: "qdtest1",
        password: "123456",
        captchacode: "888888",
      },
      rules: {
        username: [
          {
            required: true, // 必填项
            message: "用户名不能为空！", // 提示语
            // trigger: "change", //发生改变的时候校验
            trigger: "blur", //失焦的时候校验
          },
          // 自定义校验的写法，函数写在另外的文件里
          { validator: validateUsername, trigger: "blur" },
        ],
        password: [
          {
            required: true, // 必填项
            message: "密码不能为空！", // 提示语
            trigger: "blur",
          },
        ],
        captchacode: [
          {
            required: true, // 必填项
            message: "验证码不能为空！", // 提示语
            trigger: "blur",
          },
        ],
      },
      // 图片验证码路径
      captchaSrc: "",
    };
  },
  created() {
    //验证码请求
    this.getCaptchacode();
    //在重新登录的时候清除Vuex，menuData数据
    this.changeMenuData([]);
  },
  methods: {
    //在重新登录的时候清除Vuex，menuData数据
    ...mapMutations({
      changeMenuData: "userMenuData/changeMenuData",
    }),
    ...mapActions({
      asyncChangeUserInfo: "userInfo/asyncChangeUserInfo",
    }),

    async getCaptchacode() {
      let res = await GetCaptChaCodeApi();
      if (!res) return;
      // 展示验证码图片
      this.captchaSrc = "data:image/gif;base64," + res.img;
      // 保存uuid，给到登录时候作为参数传过去后端
      localStorage.setItem("edb-captcha-uuid", res.uuid);
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let res = await LoginApi({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            code: this.ruleForm.captchacode,
            uuid: localStorage.getItem("edb-captcha-uuid"),
          });
          //业务的成功和失败
          if (!res) return;
          //提示登录成功
          this.$message.success("登录成功！");
          //清除uuid
          localStorage.removeItem("edb-captcha-uuid");
          //保存token
          localStorage.setItem("edb-authorization-token", res.token);
          //跳转首页
          this.$router.push("/");
          this.asyncChangeUserInfo();
        } else {
          this.$message({
            type: "warning",
            message: "请输入正确信息",
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/bgtrain.jpg) center top no-repeat;
  position: relative;
  background-size: cover;

  .login-box {
    width: 400px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    padding-right: 40px;
    border-radius: 20px;
    opacity: 0.98;
    h1 {
      text-align: center;
      margin-bottom: 20px;
      padding-left: 40px;
      font-size: 20px;
    }

    .captcha-box {
      display: flex;
      img {
        margin-left: 20px;
      }
    }

    .login-btn {
      width: 100%;
    }
    /* 样式覆盖的写法！ ::v-deep */
    ::v-deep #login-btn-box .el-form-item__content {
      margin-left: 40px !important;
    }
  }
}
</style>
