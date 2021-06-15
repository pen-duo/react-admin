import ajax from "./ajax";

// 登陆
export const reqLogin = (username, password) => {
  return ajax("/login", { username, password }, "POST");
};

// 添加用户
export const reqAddUser = (user) => {
  return ajax("/manage/user/add", user, "POST");
};
