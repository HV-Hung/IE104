import React from "react";
import { Button, Form, Input, notification } from "antd";
import "./Register.css";
import { usePatch } from "../../api";
import { DatePicker } from "antd";
import moment from "moment";

const openNotificationWithIcon = (type, message = "", des = "") => {
  notification[type]({
    message: message,
    description: des,
  });
};

const UserInfo = ({ fetchGet, user }) => {
  const { fetchPatch } = usePatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const dateFormat = "DD/MM/YYYY";
  const onFinish = (values) => {
    console.log(values);
    fetchPatch("user/" + currentUser?._id, {
      ...values,
      gender: currentUser.gender,
    });
    fetchGet("user/" + currentUser?._id);
    openNotificationWithIcon("success", "Cập nhật thông tin thành công ");
  };

  console.log({ user });
  return (
    <div id="dashboard" className="dashboard control">
      <div className="page-title">
        <h1>Thông tin tài khoản</h1>
      </div>

      {user && (
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            name: user?.name,
            phoneNumber: user?.phoneNumber,
            email: user?.email,
            dayOfBirth: moment(user?.dayOfBirth),
          }}
        >
          <Form.Item
            label="TÊN KHÁCH HÀNG"
            name="name"
            rules={[{ required: true, message: "Hãy nhập tên của bạn!" }]}
          >
            <Input
              title="Tên chỉ nên chứa kí tự hoa hoặc kí tự thường"
              type="text"
              placeholder="Nhập tên"
              className="text-[20px]"
            />
          </Form.Item>

          <Form.Item label="SỐ ĐIỆN THOẠI" name="phoneNumber">
            <Input
              title="Chỉ chứa chữ số và dài tối thiểu 10"
              type="phonenumber"
              placeholder="Nhập số điện thoại "
              disabled
              className="text-[20px]"
            />
          </Form.Item>
          <Form.Item
            label="SINH NHẬT"
            name="dayOfBirth"
            // className="flex flex-nowrap flex-row"
            rules={[
              {
                required: true,
                message: "Nhập ngày sinh trước ngày hiện tại",
              },
            ]}
          >
            <DatePicker className="w-[100%] text-[20px]" format={dateFormat} />
          </Form.Item>
          <Form.Item label="EMAIL" name="email">
            <Input
              className="text-[20px]"
              disabled
              type="email"
              placeholder="Nhập email"
            />
          </Form.Item>

          <Form.Item
            className="gap-0 flex flex-row justify-end  mt-[50px] h-[100px]"
            wrapperCol={{ offset: 0, span: 24 }}
          >
            <Button
              className="bg-sky-700 hover:bg-sky-500 h-[50px] font-bold text-center text-[20px] rounded-lg"
              id="update"
              type="primary"
              htmlType="submit"
            >
              CẬP NHẬT
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default UserInfo;
