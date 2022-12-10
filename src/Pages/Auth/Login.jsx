import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Layout } from "../../Layout/Layout";
import { Breadcrumb } from "antd";
import { usePost } from "../../api/post";
export const Login = () => {
  let navigate = useNavigate();

  const { fetchPost, result } = usePost();

  const onFinish = (values) => {
    console.log(values);
    fetchPost("auth/userlogin", values);
  };

  const handleClick = () => {
    navigate("/register");
  };
  console.log(result);

  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <div className="login-container relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
        <div className="login-form-container absolute w-[540px] m-auto top-[80px] left-0 right-0 pt-[100px] pb-[0px] pl-[50px] pr-[50px]">
          <h1 className="text-white font-bold text-center text-[40px] mb-[30px] mt-[-50px]">
            ĐĂNG NHẬP
          </h1>

          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label={<span className="text-white text-[16px]">EMAIL</span>}
              name="email"
              rules={[{ required: true, message: "Hãy nhập email của bạn!" }]}
            >
              <Input type="email" placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              label={<span className="text-white text-[16px]">MẬT KHẨU</span>}
              name="password"
              rules={[
                { required: true, message: "Hãy nhập mật khẩu của bạn!" },
              ]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <div className="footer flex justify-between">
                <div className="checkbox">
                  <input type="checkbox" name="remember-password" id="bal1" />
                  <label htmlFor="bal1">Nhớ Mật Khẩu</label>
                </div>
                <a className="link" href="#">
                  Quên Mật Khẩu
                </a>
              </div>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 18 }}>
              <Button id="login" type="primary" htmlType="submit">
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <div className=" flex content-center justify-center text-base">
                <p onClick={handleClick} className="text">
                  Chưa có tài khoản?{" "}
                  <a className="no-underline text-emerald-600" href="">
                    Đăng ký ngay
                  </a>
                </p>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};
