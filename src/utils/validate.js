// 用来存放这个项目所有的验证方法

export function validateUsername(rule, value, callback) {
  // 需求： 用户名输入3到20位才可以校验通过
  if (value.length < 3 || value.length > 20) {
    callback(new Error("用户名必须在3到20位的字符内！"));
  } else {
    callback(); //这个不是我们自己写的，是表单自带的
  }
}
