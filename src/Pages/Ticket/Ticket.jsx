import { Breadcrumb, Space } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";

export const Ticket = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Ticket</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[2000px] bg-white m-[24px]">
        <div className="mx-[200px] border-2 rounded-lg my-[20px] shadow-xl text-center">
          <div
            className="ml-[250px] mr-[250px] my-[50px]
             text-[24px] py-[10px] font-bold
            mr-[30px] rounded-full border-sky-600 border-2"
          >
            MÃ ĐẶT VÉ #123456789 - HOÀN TẤT
          </div>
          <img
            className="h-[100px] mx-auto"
            src="https://vietluat.vn/wp-content/uploads/2019/10/cap-ma-vach-ma-so-800x283.png"
          ></img>
          <div
            className="ml-[250px] mr-[250px] my-[50px]
             text-[24px] py-[10px] font-bold
            mr-[30px] rounded-full border-sky-600 border-2"
          >
            THÔNG TIN ĐƠN HÀNG
          </div>
          <div className="flex mx-[150px] my-[50px]">
            <div>
              <img
                className="w-[400px] rounded-lg"
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/v/i/violent_night-700x1000px_1_.jpg"
              ></img>
            </div>
            <div className="mx-[50px] text-start w-full mb-[75px]">
              <div className="font-bold text-[24px]">
                TÊN PHIM:
                <span> ĐÊM HUNG TÀN</span>
              </div>
              <div className="font-bold text-[24px]">
                THỜI GIAN:
                <span className="font-normal">20:40 - 22:40 ~ 120 phút</span>
              </div>
              <div className="font-bold text-[24px]">
                NGÀY:
                <span className="font-normal">
                  Thứ hai, ngày 22 tháng 12 năm 2022
                </span>
              </div>
              <div className="font-bold text-[24px]">
                RẠP:
                <span className="font-normal">CGV Gigamall Thủ Đức</span>
              </div>

              <div className="font-bold text-[24px] w-full flex justify-between mt-[50px]">
                <div className="ml-0">
                  GHẾ:
                  <span className="font-normal">SWEETBOX D5</span>
                </div>

                <span className="font-bold mr-0">100.000đ</span>
              </div>

              <div className="font-bold text-[24px]">BẮP NƯỚC:</div>
              <div className="ml-[50px] pl-50px text-[24px]">
                <div className="text-[24px] w-full flex justify-between">
                  <span className="ml-0">CGV Combo x1</span>
                  <span className="font-bold mr-0">100.000đ</span>
                </div>
                <div className="text-[24px] w-full flex justify-between">
                  <span className="ml-0">My Combo x1</span>
                  <span className="font-bold mr-0">100.000đ</span>
                </div>
              </div>

              <div className="font-bold text-[24px] w-full flex justify-between">
                <span className="ml-0">TỔNG THANH TOÁN:</span>
                <span className="mr-0">300.000đ</span>
              </div>

              <div className="font-bold text-[24px] w-full flex justify-between">
                <span className="ml-0">PHƯƠNG THỨC THANH TOÁN:</span>
                <span className="mr-0 font-normal">Ví điện tử</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
