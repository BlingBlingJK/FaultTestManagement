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
  BreadcrumbItem,
  Breadcrumb,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Tag,
  Table,
  TableColumn,
  Pagination,
  Upload,
} from "element-ui";

Vue.prototype.$message = Message; //massage（提示）不是标签，但需要被this找到，所以放在原型上
// 注册
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(BreadcrumbItem);
Vue.use(Breadcrumb);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Tag);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(Upload);
