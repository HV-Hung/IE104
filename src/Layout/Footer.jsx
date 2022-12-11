import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Layout.Footer
      className="text-[16px]"
      style={{ backgroundColor: "#0c468a", color: "white" }}
    >

      <div className="flex justify-between mx-[250px]">
        <div>
          <h3 className="text-white font-bold text-[20px] mb-[5px]">
            ĐIỀU KHOẢN SỬ DỤNG
          </h3>
          <p>Điều Khoản Chung</p>
          <p>Điều Khoản Giao Dịch</p>
          <p>Chính Sách Thanh Toán</p>
          <p>Chính Sách Bảo Mật</p>
          <p>Câu Hỏi Thường Gặp</p>
        </div>

        <div>
          <h3 className="text-white font-bold text-[20px] mb-[5px]">
            KẾT NỐI VỚI CHÚNG TÔI
          </h3>
          <div className="flex justify-betweet">
            <FacebookOutlined className="text-[40px] m-2" />
            <YoutubeOutlined className="text-[40px] m-2" />
            <InstagramOutlined className="text-[40px] m-2" />
            <TwitterOutlined className="text-[40px] m-2" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-[20px] mb-[5px]">
            CHĂM SÓC KHÁCH HÀNG
          </h3>
          <p>Hotline: 1900 2022</p>
          <p>Giờ làm việc: 8:00 - 22:00</p>
          <p>Email hỗ trợ: hoidap@uitcinema.vn</p>
        </div>
      </div>

      <div class="text-[16px] text-center">
        <h3 className="text-white">CÔNG TY TNHH UIT CINEMA VIETNAM</h3>
        <p>COPYRIGHT 2022 UIT CINEMA. All RIGHTS RESERVED.</p>
      </div>
    </Layout.Footer>
  );
};
