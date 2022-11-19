import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./Register.css"

export const Register = () => {
  let navigate = useNavigate();

  const onFinish = (values) => {
    navigate("/");
  };

  return (
    <div className="register-container relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
      <div className="register-form-container absolute w-[500px] m-auto top-[80px] left-0 right-0 pt-[100px] pb-[100px] pl-[50px] pr-[50px]">
        <h1 className="text-center text-[40px] mb-[30px] mt-[-40px]">REGISTER</h1>

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

          <Form.Item
            name="confirm"
            label="CONFIRM PASSWORD"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
            ]}
            >
                <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 18 }}>
            <Button
              id="login"
              type="primary"
              htmlType="submit"
              
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};