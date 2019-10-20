import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  message,
  Card,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 16
  }
};

const SignUpWrapper = styled.div`
  margin: 0 auto 0 auto;
  width: 500px;
  div.signup-border {
    border: groove;
    border-radius: 5px;
    text-align: right;
    padding-bottom: 10px;
    padding-top: 5px;

    .signup-button {
      margin-right: 42px;
      margin-left: 20px;
    }
  }
`;

class SignUp extends Component {
  state = { isSignup: false };
  handleSignUp = () => {
    this.setState({ isSignUp: true });
  };
  render() {
    return (
      <SignUpWrapper>
        <h1 align="center">Sign Up</h1>
        {/* <Card style={{ borderRadius: "6px", borderWidth: "medium" }}> */}
        <div className="signup-border">
          <Form {...formItemLayout}>
            <Form.Item label="User Name">
              <Input id="userName" />
            </Form.Item>
            <Form.Item label="Password">
              <Input id="password" />
            </Form.Item>
            <Form.Item label="Email">
              <Input id="email" />
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input id="phoneNumber" />
            </Form.Item>
          </Form>
          <Button>
            <Link to="/user/login">Back</Link>
          </Button>
          <Button
            className="signup-button"
            type="primary"
            onClick={() => message.success("Sign up successfully !")}
          >
            Sign Up
          </Button>
        </div>
        {/* </Card> */}
      </SignUpWrapper>
    );
  }
}

export default SignUp;
