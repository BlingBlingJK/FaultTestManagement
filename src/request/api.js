import instance from "./request";
export const GetCaptChaCodeApi = () => instance.get("/prod-api/captchaImage");
export const LoginApi = (params) => instance.post("/prod-api/login", params);
