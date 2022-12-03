import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const keyMenu = location.pathname.split("/")[1];

  const items = [
    {
      label: (
        <Link to={"/movie"} className="flex items-center space-x-1 text-white">
          <strong>PHIM</strong>
          <DownOutlined />
        </Link>
      ),
      key: "movie",

      children: [
        {
          label: "Phim đang chiếu",
        },
        {
          label: "Phim sắp chiếu",
        },
      ],
    },
    {
      label: (
        <Link to={"/cinema"} className="flex items-center ">
          <strong className="text-white">RẠP</strong>
        </Link>
      ),
      key: "cinema",

      // disabled: true,
    },
    {
      label: (
        <Link to={"/news"} className="flex items-center w-[100px]">
          <strong className="text-white">TIN TỨC</strong>
        </Link>
      ),
      key: "news",
    },
  ];

  return (
    <Layout.Header style={{ backgroundColor: "#112D4E", color: "white" }}>
      <div className="flex justify-between items-center w-full max-h-[64px]">
        <div className="flex justify-between items-center ">
          <Link
            to="/"
            className="flex justify-between font-bold text-[24px] text-center  text-[#ff2a2a]  "
          >
            CGV
          </Link>
          <Menu
            style={{
              backgroundColor: "#112D4E",
              color: "white",
              marginLeft: "50px",
              border: "none",
            }}
            onClick={() => {}}
            selectedKeys={[keyMenu]}
            mode="horizontal"
            items={items}
          />
        </div>

        <div className="text-[white] max-h-[64px]">
          <span
            className="ml-2 font-bold"
            onClick={() => {
              navigate("/login");
            }}
          >
            Đăng nhập
          </span>
        </div>
      </div>
    </Layout.Header>
  );
};