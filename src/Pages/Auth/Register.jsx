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
      <div className="register-form-container absolute w-[500px] m-auto top-[20px] left-0 right-0 pt-[80px] pb-[100px] pl-[50px] pr-[50px]">
        <h1 className="title text-center text-[40px] mb-[40px] mt-[-50px]">ĐĂNG KÝ</h1>

        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="TÊN ĐẦY ĐỦ"
            name="username"
            rules={[{required: true, message: "Hãy nhập tên của bạn!" }]}
            
          >
            <Input title="Tên chỉ nên chứa kí tự hoa hoặc kí tự thường" pattern="^[A-Za-z]{3,16}$" type="text" placeholder="Nhập tên" />
            
          </Form.Item>

          <Form.Item
            label="SỐ ĐIỆN THOẠI"
            name="phonenumber"
            rules={[{required: true, message: "Hãy nhập số diện thoại của bạn!" }]}
          >
            <Input title="Chỉ chứa chữ số và dài tối thiểu 10" pattern="[0-9]{10,}" type="phonenumber" placeholder="Nhập số điện thoại " />
          </Form.Item>

          <Form.Item
            label="EMAIL"
            name="email"
            rules={[{required: true, message: "Hãy nhập email của bạn!" }]}
          >
            <Input  type="email" placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="MẬT KHẨU"
            name="password"
            rules={[{required: true, message: "Hãy nhập mật khẩu của bạn!" }]}
          >
            <Input.Password pattern="^[A-za-z0-9]{6, 25}" placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="XÁC NHẬN MẬT KHẨU"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
              required: true, message: "Hãy nhập lại mật khẩu của bạn!"
                
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không khớp!'));
                },
            }),
            ]}
            >
                <Input.Password  placeholder="Nhập lại mật khẩu" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 18 }}>
            <Button
            
              id="login"
              type="primary"
              htmlType="submit"
              
            >
              ĐĂNG KÝ
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};