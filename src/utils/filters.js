import Vue from "vue";
//全局过滤器，专门过滤日期
Vue.filter("FormatDate", (value) => {
  return value && new Date(value).toLocaleDateString().replaceAll("/", "-");
});
