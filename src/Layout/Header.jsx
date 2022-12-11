import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const keyMenu = location.pathname.split("/")[1];
  const user = JSON.parse(localStorage.getItem("user"));

  const opts = [
    {
      title: "Thông tin tài khoản",
      cb: () => {
        navigate("/profile");
      },
    },
    {
      title: "Đăng xuất",
      cb: () => {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");

        navigate("/");
      },
    },
  ];
  const menu = (
    <Menu>
      {opts.map((item, key) => {
        return (
          <Menu.Item
            className="text-[24px] px-6 py-3 hover:text-cyan-600"
            key={key}
            onClick={item.cb}
          >
            {item.title}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Layout.Header className="bg-[#0c468a] min-h-[100px] items-center">
      <div className="flex justify-between items-center w-full min-h-[100px]">
        <div className="flex justify-between items-center w-[600px] h-full">
          <Link
            to="/"
            className="flex justify-between font-bold text-[36px] text-center text-[#FFD700]
            hover:text-cyan-300"
          >
            UIT CINEMA
          </Link>

          <Link
            to="/movie"
            className={`flex justify-between font-bold text-[24px] text-center ${
              keyMenu === "movie" ? "text-cyan-300" : " text-white"
            } hover:text-cyan-300`}
          >
            PHIM
          </Link>

          <Link
            to="/cinema"
            className={`flex justify-between font-bold text-[24px] text-center ${
              keyMenu === "cinema" ? "text-cyan-300" : " text-white"
            } hover:text-cyan-300`}
          >
            RẠP
          </Link>

          <Link
            to="/news"
            className={`flex justify-between font-bold text-[24px] text-center ${
              keyMenu === "news" ? "text-cyan-300" : " text-white"
            } hover:text-cyan-300`}
          >
            TIN TỨC
          </Link>
        </div>

        <div className="text-[white] text-[20px]">
          {user ? (
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <span className="ml-2 font-bold text-[24px] text-white hover:text-cyan-300 cursor-pointer">
                {user.name}
              </span>
            </Dropdown>
          ) : (
            <span
              className="ml-2 font-bold text-[24px] text-white hover:text-cyan-300 cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Đăng nhập
            </span>
          )}
        </div>
      </div>
    </Layout.Header>
  );
};
