import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {
  let navigate = useNavigate();

  const onFinish = (values) => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/register");
  }

  return (
    <div className="login-container relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
      <div className="login-form-container absolute w-[500px] m-auto top-[80px] left-0 right-0 pt-[100px] pb-[100px] pl-[50px] pr-[50px]">
        <h1 className="title text-center text-[40px] mb-[30px] mt-[-40px]">LOGIN</h1>

        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="EMAIL"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="PASSWORD"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 18 }}>
            <Button
              id="login"
              type="primary"
              htmlType="submit"
              
            >
              Sign In
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <div className="footer flex justify-between">
              <p className="text"><a href="#">Forgot password</a></p>
              <p onClick={handleClick} className="text"><a href="">Register</a></p>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
