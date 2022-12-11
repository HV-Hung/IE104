import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { usePost } from "../../api/post";
import { Layout } from "../../Layout/Layout";
import { Breadcrumb } from "antd";
import { DatePicker, Space } from 'antd';
import { Radio } from 'antd';
import FormItem from "antd/es/form/FormItem";

export const Register = () => {
  let navigate = useNavigate();
  const { fetchPost, result } = usePost();

  const onFinish = (values) => {
    console.log(values);
    fetchPost("auth/register", values);
    navigate("/");
  };

  const handleClick = () => {
    navigate("/login");
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [value, setValue] = React.useState("male");
  const onClick = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Layout>
    <Breadcrumb style={{ marginLeft: "16px" }}>
      <Breadcrumb.Item>Profile</Breadcrumb.Item>
    </Breadcrumb>
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
           name="dateOfBirth"
           className="flex flex-nowrap flex-row"
           rules={[{ required: true, message: "Hãy nhập ngày sinh của bạn!" }]}>
            <Space className="mr-[25px]" direction="horizontal">
              <DatePicker className="w-[85px]" placeholder="Ngày " onChange={onChange} picker="date"/>
            
              <DatePicker className="w-[90px]" placeholder="Tháng" onChange={onChange} picker="month" />
              
              <DatePicker className="w-[80px]" placeholder="Năm" onChange={onChange} picker="year" />
            </Space>
            <Radio.Group className="w-[200px]" onChange={onClick} value={value}>
              <Radio className="text-white " value={"male"}>Nam</Radio>
              <Radio className="text-white" value={"female"}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          
          <Form.Item
            label="MẬT KHẨU"
            name="password"
            rules={[{ required: true, message: "Hãy nhập mật khẩu của bạn!" }]}
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

          <Form.Item className="gap-0 flex flex-col mt-[90px]" wrapperCol={{ offset: 0, span: 24 }}>
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
