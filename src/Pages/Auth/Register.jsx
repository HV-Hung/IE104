import React from "react";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { usePost } from "../../api/post";
import { Layout } from "../../Layout/Layout";
import { DatePicker } from "antd";
import { Radio } from "antd";

const openNotificationWithIcon = (type, message = "", des = "") => {
  notification[type]({
    message: message,
    description: des,
  });
};

export const Register = () => {
  let navigate = useNavigate();
  const { fetchPost, result, isError } = usePost();

  const onFinish = (values) => {
    console.log(values);
    fetchPost("auth/register", {
      ...values,
      dayOfBirth: values.dayOfBirth._d.toISOString(),
    });
  };

  const handleClick = () => {
    navigate("/login");
  };
  React.useEffect(() => {
    if (result.message) {
      if (isError) openNotificationWithIcon("error", result.message);
      else {
        openNotificationWithIcon("success", "Đăng ký thành công");
        navigate("/login");
      }
    }
  }, [result, navigate, isError]);

  const dateFormat = "DD/MM/YYYY";
  return (
    <Layout>
      <div className="register-container relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
        <div className="register-form-container absolute w-[600px] m-auto top-[10px] left-0 right-0 pt-[80px] pb-[100px] pl-[50px] pr-[50px]">
          <h1 className="title font-bold text-center text-[40px] mb-[40px] mt-[-50px]">
            ĐĂNG KÝ
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
              label="TÊN ĐẦY ĐỦ"
              name="name"
              rules={[{ required: true, message: "Hãy nhập tên của bạn!" }]}
            >
              <Input
                title="Tên chỉ nên chứa kí tự hoa hoặc kí tự thường"
                type="text"
                placeholder="Nhập tên"
              />
            </Form.Item>

            <Form.Item
              label="SỐ ĐIỆN THOẠI"
              name="phoneNumber"
              rules={[
                { required: true, message: "Hãy nhập số diện thoại của bạn!" },
              ]}
            >
              <Input
                title="Chỉ chứa chữ số và dài tối thiểu 10"
                pattern="[0-9]{10,}"
                type="phonenumber"
                placeholder="Nhập số điện thoại "
              />
            </Form.Item>

            <Form.Item
              label="EMAIL"
              name="email"
              rules={[{ required: true, message: "Hãy nhập email của bạn!" }]}
            >
              <Input type="email" placeholder="Nhập email" />
            </Form.Item>
            <Form.Item
              label="NGÀY SINH"
              name="dayOfBirth"
              className="flex flex-nowrap flex-row"
              rules={[
                {
                  required: true,
                  message: "Nhập ngày sinh trước ngày hiện tại",
                },
              ]}
            >
              <DatePicker format={dateFormat} />
            </Form.Item>
            <Form.Item label="GIỚI TÍNH" name="gender">
              <Radio.Group className="w-[200px]">
                <Radio className="text-white " value={"Nam"}>
                  Nam
                </Radio>
                <Radio className="text-white" value={"Nữ"}>
                  Nữ
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="MẬT KHẨU"
              name="password"
              rules={[
                { required: true, message: "Hãy nhập mật khẩu của bạn!" },
              ]}
            >
              <Input.Password
                pattern="^[A-za-z0-9]{6, 25}"
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="XÁC NHẬN MẬT KHẨU"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Hãy nhập lại mật khẩu của bạn!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Nhập lại mật khẩu" />
            </Form.Item>

            <Form.Item
              className="gap-0 flex flex-col mt-[90px]"
              wrapperCol={{ offset: 0, span: 24 }}
            >
              <Button id="register" type="primary" htmlType="submit">
                ĐĂNG KÝ
              </Button>

              <div className="footer flex content-center justify-center text-base">
                <p onClick={handleClick} className="text">
                  Đã có tài khoản?
                  <a className="no-underline text-emerald-600" href="">
                    Đăng nhập ngay
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
