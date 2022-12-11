import { Breadcrumb } from "antd";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import imagend1 from "./img/news_img_d1.jpg";
import imagend2 from "./img/news_img_d2.jpg";
import imagend3 from "./img/news_img_d3.jpg";
import imagend4 from "./img/news_img_d4.png";
import imagend5 from "./img/news_img_d5.jpg";
import imagend6 from "./img/news_img_d6.jpg";
import imagend7 from "./img/news_img_d7.jpg";
import imagend8 from "./img/news_img_d8.jpg";
import imagend9 from "./img/news_img_d9.png";
import imagend10 from "./img/news_img_d10.png";
import imagend11 from "./img/news_img_d11.jpg";
import imagend12 from "./img/news_img_d12.jpg";
import imagenn1 from "./img/news_img_n1.jpg"


const deal_list = [
  { 
    id: "d_1",
    img: imagend1,
    name: "LỄ HỘI MERCHANDISE",
    date: "07/12/2022 - 09/12/2022"
  },
  { 
    id: "d_2",
    img: imagend2,
    name: "TUẦN LỄ PHIM KHOA HỌC CÔNG NGHỆ QUỐC TẾ VINFUTURE 2022",
    date: "06/12/2022 - 11/12/2022"
  },
  { 
    id: "d_3",
    img: imagend3,
    name: "MÙA BOM TẤN CUỐI NĂM ZALOPAY TẶNG VÉ 9K!",
    date: "05/12/2022 - 31/12/2022"
  },
  { 
    id: "d_4",
    img: imagend4,
    name: "PHIM TƯƠNG TÁC PHI VỤ NỬA ĐÊM",
    date: "TỪ 25/11/2022"
  },
  { 
    id: "d_5",
    img: imagend5,
    name: "BÙNG CHÁY WORLD CUP ĐI GROUP THÊM VUI",
    date: "24/11/2022 - 14/12/2022"
  },
  { 
    id: "d_6",
    img: imagend6,
    name: "RA RẠP GẶP LUFFY RINH QUÀ XINH HẾT Ý",
    date: "Từ 02/12/2022"
  },
  { 
    id: "d_7",
    img: imagend7,
    name: "GIẢM TƯNG BỪNG, GIẢM ĐẬM SÂU",
    date: "05/12/2022 - 31/12/2022"
  },
  { 
    id: "d_8",
    img: imagend8,
    name: "QUÀ TẶNG SINH NHẬT THÀNH VIÊN CGV THÁNG 12",
    date: "01/12/2022 - 31/12/2022"
  },
  { 
    id: "d_9",
    img: imagend9,
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ CITI",
    date: "02/12/2022 - 02/06/2023"
  },
  { 
    id: "d_10",
    img: imagend10,
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ NGÂN HÀNG BẢN VIỆT TẠI CGV",
    date: "30/11/2022 - 31/12/2023"
  },
  { 
    id: "d_11",
    img: imagend11,
    name: "ƯU ĐÃI THỨ 4 VUI VẺ CHIA SẺ YÊU THƯƠNG",
    date: "Từ 30/11/2022"
  },
  { 
    id: "d_12",
    img: imagend12,
    name: "NĂNG LƯỢNG TRÀN ĐẦY - NHẬN NGAY TÚI HOT",
    date: "25/11/2022 - 11/12/2022"
  },
];

const news_list = [
  {
    id: "n_1",
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "TỪ 01/12/2022"
  },
  {
    id: "n_2",
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/08/BHD-Star-ScanQR-315x420-248x330.jpg",
    name: "QUÉT MÃ QR NHANH VÀO RẠP",
    date: "TỪ 12/08/2019"
  },
  {
    id: "n_3",
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/03/A4appmoi-233x330.jpg",
    name: "ỨNG DỤNG MUA VÉ MỚI",
    date: "01/11/2022 - 31/12/2022"
  },
  {
    id: "n_4",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/08/BHD-STAR-CHECK-IN-CUNG-GAU-314X420-248x330.jpg",
    name: "ĐIỂM HẸN MỚI CỦA GIỚI TRẺ",
    date: "Từ 01/12/2022"
  },
  {
    id: "n_5",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/07/BHD-Star-HuongDanOnline-315x420-248x330.jpg",
    name: "THẺ THÀNH VIÊN ĐIỆN TỬ",
    date: "11/11/2022 - 29/11/2022"
  },
  {
    id: "n_6",
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/04/BHD-Star-HUE-KhaiTruong-Teasing-315x420-248x330.jpg",
    name: "BHD STAR HUẾ",
    date: "Từ 01/12/2022"
  },
  {
    id: "n_7",
    img: "https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_315x420-2-248x330.png",
    name: "ĐƯỜNG DÂY NÓNG BHD STAR",
    date: "Từ 01/12/2022"
  },
  {
    id: "n_8",
    img: "https://www.bhdstar.vn/wp-content/uploads/2016/11/BHDSTAR-HA-NOI-KHAI-TRUONG-248x330.png",
    name: "BHD STAR PHẠM NGỌC THẠCH",
    date: "Từ 03/11/2016"
  },
];

export const News = () => {
  
  const [tabItem, setTabIitem] = useState(0);
  console.log(tabItem)
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item></Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-[1228px] mx-auto flex justify-center items-center cursor-pointer">
        <div className={`text-[30px] text-center px-[20px] py-[10px]  mx-[16px] my-[32px] font-bold hover:text-amber-300
        cursor-pointer rounded-full border-sky-600 border-2 ${tabItem === 0 && "text-amber-300 bg-[#0284c7]"}`} onClick={() => setTabIitem(0)}>KHUYẾN MÃI</div>
        <div className={`text-[30px] text-center px-[20px] py-[10px] mx-[16px] my-[32px] font-bold hover:text-amber-300
        cursor-pointer rounded-full border-sky-600 border-2 ${tabItem === 1 && "text-amber-300 bg-[#0284c7]"}`} onClick={() => setTabIitem(1)}>TIN TỨC</div>
      </div>
      {tabItem === 0 && <div className="max-h-[1872px] px-[200px] grid grid-cols-4 gap-x-[30px] gap-y-[30px]">
        {deal_list.map((item) => {
          return (
           <Link to={`/news/${item.id}`}>
            <div className="w-full h-auto cursor-pointer">
              <img className="w-full h-[230px]" src={item.img} alt="" />
              <div className="">
                <div className="text-black text-[18px] text-center uppercase py-[12px] hover:text-[#0c468a]">
                  {item.name}
                </div>
                <div className="text-black text-[16px] text-center pb-[8px]">
                  <FontAwesomeIcon className="text-[#0c468a] mx-[8px]" icon={faCalendarDays}></FontAwesomeIcon>
                  {item.date}
                </div>
              </div>
            </div>
            </Link>
          )
        })}
      </div>}
      {tabItem === 1 && <div className="max-h-[1872px] px-[200px] grid grid-cols-4 gap-y-[25px] hover:text-[#d4dd29]">
        {news_list.map((item) => {
          return (
            <Link to={`/news/${item.id}`}>
              <div className="w-full h-auto cursor-pointer">
                <img className="w-[85%] h-[425px] mx-[auto]" src={item.img} alt="" />
                <div className="">
                  <div className="text-black text-[18px] text-center font-semibold uppercase py-[12px] hover:text-[#0c468a]">
                    {item.name}
                  </div>
                  <div className="text-black text-[16px] text-center pb-[8px]">
                    <FontAwesomeIcon className="text-[#0c468a] mx-[8px]" icon={faCalendarDays}></FontAwesomeIcon>
                    {item.date}
                  </div>
                </div>
              </div>
          </Link>
          )
        })}
      </div>}
    </Layout>
  );
};





