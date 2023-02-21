import Vue from "vue";
import { Button, Input, Form, FormItem, Message } from "element-ui";

Vue.prototype.$message = Message;
// 注册
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
