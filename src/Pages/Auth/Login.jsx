import React from "react";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { usePost } from "../../api/post";

export const openNotificationWithIcon = (type, message = "", des = "") => {
  notification[type]({
    message: message,
    description: des,
  });
};
export const Login = () => {
  let navigate = useNavigate();

  const { fetchPost, result, isError } = usePost();

  const onFinish = (values) => {
    fetchPost("auth/userlogin", values);
  };

  const handleClick = () => {
    navigate("/register");
  };
  const wayback = () => {
    navigate("/");
  }
  React.useEffect(() => {
    if (result.accessToken) {
      openNotificationWithIcon("success", "Đăng nhập thành công");
      localStorage.setItem("user", JSON.stringify(result.foundUser));
      localStorage.setItem("token", result.accessToken);

      const showtime = sessionStorage.getItem("showtime");
      if (showtime) navigate("/bookticket/" + showtime);
      else navigate("/");

      sessionStorage.clear();
    }
  }, [result, navigate]);

  React.useEffect(() => {
    if (isError)
      openNotificationWithIcon("error", "Tài khoản khoặc mật khẩu không đúng");
  }, [isError]);
  return (
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
            rules={[{ required: true, message: "Hãy nhập mật khẩu của bạn!" }]}
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
            <div className="flex content-center justify-center text-base mb-[15px]">
              <p  className="text-[18px] mr-[24px]">
                Chưa có tài khoản?
              </p>
              <a onClick={handleClick} className="no-underline text-[18px] text-[#31d7a9] hover:text-[#31d7a9]" href="">
                  Đăng ký ngay
              </a>
            </div>
            <p className="text-center text-[18px] cursor-pointer mt-[20px]" onClick={wayback}>Quay lại <span className="ml-[5px] text-[18px] text-[#31d7a9]">Trang chủ</span></p>
          </Form.Item>
        </Form>
        
      </div>
    </div>
    
  );
};
