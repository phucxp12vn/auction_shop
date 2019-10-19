import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Divider } from "antd";
import logo from "../images/logo.jpg";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import HomePage from "./HomePage.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const UserLayout = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" style={{ height: "100%" }}>
          <img
            src={logo}
            alt="logo"
            style={{ marginBottom: "0px", height: "90%" }}
          />
        </div>
        {/* <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>
      {/* height: "100vh" */}
      <Content style={{ padding: "0 50px", height: "100%" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: 280,
            height: "100%"
          }}
        >
          <BrowserRouter>
            <Switch>
              <Route exact path="/user" component={Login} />
              <Route path="/user/login" component={Login} />
              <Route path="/user/signup" component={SignUp} />
              <Route path="/user/homepage" component={HomePage} />
            </Switch>
          </BrowserRouter>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>Auction Shop</Footer> */}
    </Layout>
  );
};

export default UserLayout;
