import axios from "axios";
import { Message } from "element-ui";

const instance = axios.create({
  baseURL: "http://xue.cnkdl.cn:23683",
  timeout: 10000,
});
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("edb-authorization-token");
    if (
      token &&
      !config.url.endsWith("/login") &&
      !config.url.endsWith("/captchaImage")
    ) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    let res_data = res.data;
    if (res_data.code !== 200) {
      console.log(res_data);
      Message.error(res_data.msg || "网络请求错误！");
      return false;
    }
    return res_data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
