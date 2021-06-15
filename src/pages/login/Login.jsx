import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import logo from "./images/logo.png";
import { reqLogin } from "../../api/index";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async onFinish(user) {
    const res = await reqLogin(user.username, user.password);
    if (res.status === 0) {
      message.success("登陆成功");
      const user = res.data;
      memoryUtils.user = user;
      storageUtils.saveUser(user);
      this.props.history.replace("/");
    } else {
      message.error(res.msg);
    }
  }
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React项目: 后台管理项目</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "用户名不能为空" },
                {
                  min: 4,
                  message: "用户名长度不能小于4位",
                  whitespace: true,
                },
                {
                  max: 12,
                  message: "用户名长度不能大于12位",
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "用户名必须由英文,数字,下划线组成",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "用户名不能为空 " },
                {
                  min: 4,
                  message: "密码长度不能小于4位",
                  whitespace: true,
                },
                {
                  max: 12,
                  message: "密码长度不能大于12位",
                },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "密码必须由英文,数字,下划线组成",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login;
