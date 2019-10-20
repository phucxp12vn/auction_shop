import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import logo from "./images/logo.jpg";
import Login from "./user/Login.js";
import SignUp from "./user/SignUp.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import UserLayout from "./user/layout.js";
import AdminLayout from "./admin/layout.js";
import { Layout, Menu, Breadcrumb, Icon, Divider } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <UserLayout /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserLayout} />
          <Route path="/user" component={UserLayout} />
          <Route path="/admin" component={AdminLayout} />
          {/* <Route exact path="/login" component={UserLayout} />
          <Route exact path="/signup" component={UserLayout} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
