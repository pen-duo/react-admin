import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./left-nav.scss";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="" />
          <h1>后台</h1>
        </Link>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <HomeOutlined />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <HomeOutlined />
              <span>品类管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <HomeOutlined />
              <span>商品管理</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LeftNav;
