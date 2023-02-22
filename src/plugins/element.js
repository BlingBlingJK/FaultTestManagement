import Vue from "vue";
import {
  Button,
  Input,
  Form,
  FormItem,
  Message,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
} from "element-ui";

Vue.prototype.$message = Message;
// 注册
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
