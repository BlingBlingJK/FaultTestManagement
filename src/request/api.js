import instance from "./request";
//获取验证码请求
export const GetCaptChaCodeApi = () => instance.get("/prod-api/captchaImage");
//登录请求
export const LoginApi = (params) => instance.post("/prod-api/login", params);
//获取可访问的路由api
export const GetUserRouterApi = () => instance.get("/prod-api/getRouters");
//获取用户信息
export const GetUserInfoApi = () => instance.get("/prod-api/getInfo");
//客户管理-客户列表展示,get需要传参数，格式中带{}
export const GetCustomListApi = (params) =>
  instance.get("/prod-api/customer", { params });
//导出表格接口
export const CustomExportApi = (params, configs) =>
  instance.post("/prod-api/customer/export", params, configs);
// 审核流程定义的接口
export const BpmnInfoApi = (params, configs) =>
  instance.post("/prod-api/business/bpmnInfo", params, configs);
