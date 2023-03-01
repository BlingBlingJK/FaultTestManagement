import instance from "./request";
export const GetCaptChaCodeApi = () => instance.get("/prod-api/captchaImage");
export const LoginApi = (params) => instance.post("/prod-api/login", params);

export const GetUserRouterApi = () => instance.get("/prod-api/getRouters");

export const GetUserInfoApi = () => instance.get("/prod-api/getInfo");
