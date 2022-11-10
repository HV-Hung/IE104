import React from "react";
import { Layout } from "antd";

export const Footer = () => {
  return (
    <Layout.Footer
      className="text-center"
      style={{ backgroundColor: "#112D4E", color: "white" }}
    >
      <div class="text-[10px]">
        <h3 className="text-white">CÔNG TY TNHH CJ CGV VIETNAM</h3>
        <p>
          Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay
          đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
        </p>
        <p>
          Địa Chỉ:&nbsp;Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14,
          Q.10, TPHCM.
        </p>
        <p>Hotline: 1900 6017</p>
        <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
      </div>
    </Layout.Footer>
  );
};
