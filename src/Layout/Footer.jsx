import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export const Footer = () => {
  return (
    <Layout.Footer
      className="text-[16px]"
      style={{ backgroundColor: "#0c468a", color: "white" }}
    >
      <div className="flex justify-between mx-[250px]">
        <div>
          <h3 className="text-white font-bold text-[20px] mb-[5px]">ĐIỀU KHOẢN SỬ DỤNG</h3>
          <p>Điều Khoản Chung</p>
          <p>Điều Khoản Giao Dịch</p>
          <p>Chính Sách Thanh Toán</p>
          <p>Chính Sách Bảo Mật</p>
          <p>Câu Hỏi Thường Gặp</p>
        </div>

        <div>
          <h3 className="text-white font-bold text-[20px] mb-[5px]" >KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div className="flex justify-betweet">
            <FacebookOutlined className="text-[40px] m-2" />
            <YoutubeOutlined className="text-[40px] m-2" />
            <InstagramOutlined className="text-[40px] m-2" />
            <TwitterOutlined className="text-[40px] m-2" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-[20px] mb-[5px]">CHĂM SÓC KHÁCH HÀNG</h3>
          <p>Hotline: 1900 2022</p>
          <p>Giờ làm việc: 8:00 - 22:00</p>
          <p>Email hỗ trợ: hoidap@uitcinema.vn</p>
        </div>
      </div>

      <div class="text-[16px] text-center">
        <p
          className="font-bold text-[36px] text-center text-[#FFD700]
            hover:text-[#aaf0d1]"
        >
          UIT CINEMA
        </p>
        <h3 className="text-white">CÔNG TY TNHH UIT CINEMA VIETNAM</h3>
        <p>
          Giấy CNĐKDN: 202222002, đăng ký lần đầu ngày 12/12/2012, đăng ký thay
          đổi lần thứ 2 ngày 12/12/2022, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
        </p>
        <p>
          Địa Chỉ:&nbsp;Tầng 12, Rivera Park Saigon - Số 12/12 Thành Thái, P.12,
          Q.12, TPHCM.
        </p>
        <p>Hotline: 1900 1212.</p>
        <p>COPYRIGHT 2022 UIT CINEMA. All RIGHTS RESERVED.</p>
      </div>
    </Layout.Footer>
  );
};
