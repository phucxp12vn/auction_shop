import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 500px;
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  div.signup-border {
    border: groove;
    border-radius: 5px;
    padding: 20px 0;
    // text-align: right;
    // padding-bottom: 10px;
    // padding-top: 5px;
  }
`;

class Login extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <LoginWrapper>
        <h1>Login</h1>
        <div className="signup-border">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  style={{ width: "400px" }}
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  style={{ width: "400px" }}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
          </Form>
          <Link to="/user/signup">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginRight: "70px" }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/user/homepage">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Link>
        </div>
      </LoginWrapper>
    );
  }
}

export default Form.create()(Login);
