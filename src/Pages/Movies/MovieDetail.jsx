import { Breadcrumb, Button } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";

export const MovieDetail = () => {
  return (
    <Layout>
      <Breadcrumb
        style={{
          marginTop: "10px",
          marginBottom: "5px",
          backgroundColor: "gray",
        }}
      >
        <Breadcrumb.Item className="text-white font-medium ml-[147px]">
          Trang chủ Phim Đang chiếu Khí con lon ton thành phố
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="max-w-[1228px] mx-auto">
        <div className="pt-[20px] h-[90px] text-[40px] text-white font-semibold">
          Nội dung
        </div>

        <div className="h-[2px] bg-white mb-[15px]"></div>

        <div className="max-h-[900px] flex flex-start">
          <img
            className="max-h-[360px] mr-[30px]"
            src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/k/c/kclttg_-_main_poster_web_.jpg"
            alt=""
          />
          <div className="h-[360px] flex-1">
            <div className="text-[24px] py-[10px] font-semibold border-b-2 border-gray-500 text-white">
              KHỈ CON LON TON THẾ GIỚI
            </div>
            <div className="mt-[10px]">
              <div className="text-[15px] leading-[25px] text-white">
                Đạo diễn: Samuel Tourneux
              </div>
              <div className="text-[15px] leading-[25px] text-white">
                Diễn viên: quần chúng nhân dân
              </div>
              <div className="text-[15px] leading-[25px] text-white">
                Thể loại: hoạt hình
              </div>
              <div className="text-[15px] leading-[25px] text-white">
                Khởi chiếu: 11/11/2022
              </div>
              <div className="text-[15px] leading-[25px] text-white">
                Thời lượng: 82 phút
              </div>
              <div className="text-[15px] leading-[25px] text-white">
                Ngôn ngữ: Lồng tiếng Việt
              </div>
              <div className="text-[15px] leading-[25px] text-white">
                Phân loại: Phim dành cho mọi đối tượng
              </div>
            </div>
            <div className="h-[50px] w-[50px] bg-green-500 mt-[10px] text-center text-[30px] font-bold text-white">
              P
            </div>
            <div className="flex flex-start mt-[23px]">
              <Button type="primary" className="mr-[10px]">Xem Trailer</Button>
              <Button type="primary">Mua vé</Button>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-[20px] py-[10px] font-bold">
          CHI TIẾT
        </div>
        <div className="max-h-[100px] text-[15px] text-white mb-[20px] leading-[25px]">
          Khỉ Con luôn khát khao được chu du năm châu bốn bể và khám phá thế
          giới rộng lớn nhiệm màu. Nhưng vì không muốn con trai đối mặt với bất
          kỳ nguy hiểm nào, mẹ Khỉ Con không cho phép cậu thực hiện ước mơ đó.
          Một ngày nọ, nhà thám hiểm Ếch Bảnh ghé qua thị trấn nơi Khỉ Con đang
          sinh sống và cá cược với những cư dân nơi đây rằng mình có thể đi vòng
          quanh thế giới chỉ trong vòng 80 ngày. Một cách tình cờ, Khỉ Con trở
          thành người bạn đồng hành của Ếch Bảnh, cả hai đã cùng bắt đầu một
          cuộc phiêu lưu đầy bất ngờ nhưng cũng không kém phần thú vị.
        </div>
      </div>
    </Layout>
  );
};
