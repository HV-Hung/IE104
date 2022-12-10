import { Breadcrumb, Space } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import Barcode from "react-barcode";
import { useState } from "react";

export const Ticket = () => {
  const [ticket, setTicket] = useState({});
  return (
    <Layout>
      <div className="p-[12px] min-h-[800px]">
        <div className="mx-[200px] border-2 rounded-lg my-[20px] shadow-xl text-center">
          <div
            className="ml-[250px] mr-[250px] my-[20px]
             text-[22px] py-[10px] font-bold
            mr-[30px] rounded-full border-sky-600 border-2 bg-sky-600"
          >
            MÃ ĐẶT VÉ #9876234233 - HOÀN TẤT
          </div>
          <div className="px-[625px]">
            <Barcode className="" value="9876234233" />
          </div>

          <div
            className="ml-[250px] mr-[250px] my-[20px]
             text-[22px] py-[10px] font-bold
            mr-[30px] rounded-full border-sky-600 border-2 bg-sky-600"
          >
            THÔNG TIN ĐƠN HÀNG
          </div>
          <div className="flex mx-[250px] my-[30px]">
            <div>
              <img
                className="w-[370px] rounded-lg"
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/v/i/violent_night-700x1000px_1_.jpg"
              ></img>
            </div>
            <div className="ml-[50px] text-start w-full mb-[75px] text-[20px] font-bold">
              <p>TÊN PHIM: ĐÊM HUNG TÀN</p>
              <p>
                THỜI GIAN:
                <span className="font-normal"> 20:40 - 22:40 ~ 120 phút</span>
              </p>
              <div>
                NGÀY:
                <span className="font-normal">
                  {" "}
                  Thứ hai, ngày 22 tháng 12 năm 2022
                </span>
              </div>
              <div>
                RẠP:
                <span className="font-normal"> CGV Gigamall Thủ Đức</span>
              </div>
              <div>
                PHÒNG:
                <span className="font-normal"> 5</span>
              </div>

              <div className="w-full flex justify-between mt-[30px]">
                <div className="ml-0">
                  GHẾ:
                  <span className="font-normal"> SWEETBOX D5</span>
                </div>

                <span className="mr-[50px]">100.000đ</span>
              </div>

              <div>BẮP NƯỚC:</div>
              <div className="ml-[50px] pl-50px">
                <div className="w-full flex justify-between">
                  <span className="ml-0 font-normal">CGV Combo x1</span>
                  <span className="font-bold mr-[50px]">100.000đ</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="ml-0 font-normal">My Combo x1</span>
                  <span className="font-bold mr-[50px]">100.000đ</span>
                </div>
              </div>

              <div className="w-full flex justify-between">
                <span className="ml-0">TỔNG THANH TOÁN:</span>
                <span className="mr-[50px]">300.000đ</span>
              </div>

              <div className="w-full flex justify-between">
                <span className="ml-0">PHƯƠNG THỨC THANH TOÁN:</span>
                <span className="mr-[50px] font-normal">Ví điện tử</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
