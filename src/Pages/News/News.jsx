import { Breadcrumb } from "antd";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './News.css'
import { Link } from "react-router-dom";


const news_list = [
  { 
    id: 1,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 2,
    img: "https://www.bhdstar.vn/wp-content/uploads/2022/12/S%C3%BAtB%C3%B3ngChallenge-1920X1080-1-270x152.png",
    name: "ĐỒNG HÀNH CÙNG WORLD CUP",
    date: "03/12/2022 - 18/12/2022"
  },
  { 
    id: 3,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Visa-x-BHD-WEB-270x152.jpg",
    name: "XÀI VISA NHẬN NGAY BẮP LỚN",
    date: "23/09/2022 - 31/03/2023"
  },
  { 
    id: 4,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1-270x152.png",
    name: "ƯU ĐÃI ĐẶC BIỆT CHO U22",
    date: "TỪ 08/09/2017"
  },
  { 
    id: 5,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay-270x152.png",
    name: "HAPPY MONDAY - THỨ 2 VUI VẺ",
    date: "TỪ 17/05/2016"
  },
  { 
    id: 6,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web-270x152.jpg",
    name: "GIÁ VÉ ƯU ĐÃI CHO SUẤT KHUYA",
    date: "TỪ 01/04/2016"
  },
  { 
    id: 7,
    img: "https://www.cgv.vn/media/wysiwyg/2022/122022/240wx201h_1.jpg",
    name: "RA RẠP GẶP LUFFY RINH XỊN QUÀ HẾT Ý",
    date: "Từ 02/12/2022"
  },
  { 
    id: 8,
    img: "https://www.cgv.vn/media/wysiwyg/2022/122022/N_O_240x201.jpg",
    name: "ƯU ĐÃI KHAI TRƯƠNG CGV VINCOM MỸ THO - TIỀN GIANG",
    date: "02/12/2022 - 04/12/2022"
  },
  { 
    id: 9,
    img: "https://www.cgv.vn/media/wysiwyg/2022/122022/240x291.jpg",
    name: "QUÀ TẶNG SINH NHẬT THÀNH VIÊN CGV THÁNG 12",
    date: "01/12/2022 - 31/12/2022"
  },
  { 
    id: 10,
    img: "https://www.cgv.vn/media/wysiwyg/2022/112022/240x201_3.png",
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ CITI TẠI CGV “MUA 02 VÉ XEM PHIM TẶNG 01 MY COMBO”",
    date: "02/12/2022 - 02/06/2023"
  },
  { 
    id: 11,
    img: "https://www.cgv.vn/media/wysiwyg/2022/112022/adapt_kenh_doi_tac_240x201.png",
    name: "CHƯƠNG TRÌNH ƯU ĐÃI DÀNH CHO CHỦ THẺ NGÂN HÀNG BẢN VIỆT TẠI CGV",
    date: "30/11/2022 - 31/12/2023"
  },
  { 
    id: 12,
    img: "https://www.cgv.vn/media/wysiwyg/2022/112022/N_O_240x201.jpg",
    name: "ƯU ĐÃI THỨ 4 VUI VẺ CHIA SẺ YÊU THƯƠNG",
    date: "Từ 30/11/2022"
  },
  { 
    id: 13,
    img: "https://www.cgv.vn/media/wysiwyg/2022/112022/N_O_-_240x201_2.jpg",
    name: "NĂNG LƯỢNG TRÀN ĐẦY - NHẬN NGAY TÚI HOT",
    date: "25/11/2022 - 11/12/2022"
  },
];

const preferential_list = [
  {
    id: 1,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "TỪ 01/12/2022"
  },
  {
    id: 2,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/08/BHD-Star-ScanQR-315x420-248x330.jpg",
    name: "QUÉT MÃ QR NHANH VÀO RẠP",
    date: "TỪ 12/08/2019"
  },
  {
    id: 3,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/03/A4appmoi-233x330.jpg",
    name: "ĐIỂM HẸN MỚI CỦA GIỚI TRẺ",
    date: "01/11/2022 - 31/12/2022"
  },
  {
    id: 4,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/08/BHD-STAR-CHECK-IN-CUNG-GAU-314X420-248x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id:5,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/07/BHD-Star-HuongDanOnline-315x420-248x330.jpg",
    name: "THẺ THÀNH VIÊN ĐIỆN TỬ",
    date: "11/11/2022 - 29/11/2022"
  },
  {
    id: 6,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/04/BHD-Star-HUE-KhaiTruong-Teasing-315x420-248x330.jpg",
    name: "BHD STAR HUẾ",
    date: "Từ 01/12/2022"
  },
  {
    id: 7,
    img: "https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_315x420-2-248x330.png",
    name: "ĐƯỜNG DÂY NÓNG BHD STAR",
    date: "01/10/2022 - 15/12/2022"
  },
  {
    id: 8,
    img: "https://www.bhdstar.vn/wp-content/uploads/2016/11/BHDSTAR-HA-NOI-KHAI-TRUONG-248x330.png",
    name: "BHD STAR PHẠM NGỌC THẠCH",
    date: "Từ 13/07/2016"
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
        <div className="text-[32px] text-white text-center font-semibold mx-[16px] my-[32px] hover:text-[#d4dd29] hover:cursor-pointer" onClick={() => setTabIitem(0)}>KHUYẾN MÃI</div>
        <div className="border-l-[3px] border-solid border-[#fff] h-[32px]"></div>
        <div className={`text-[32px] text-white text-center font-semibold mx-[16px] my-[32px] hover:text-[#d4dd29] hover:cursor-pointer ${tabItem === 1 && "text-red"}` } onClick={() => setTabIitem(1)}>TIN TỨC</div>
      </div>
      {tabItem === 0 && <div className="active max-h-[1872px] w-[1228px] mx-auto grid grid-cols-4 gap-x-[20px] gap-y-[25px]" >
        {news_list.map((item) => {
          return (
          <div className="w-full h-auto cursor-pointer">
            <img className="h-[164px] w-full" src={item.img} alt="" />
            <div className="">
              <div className="text-white text-[16px] text-center uppercase py-[8px] hover:text-[#d4dd29]">
                {item.name}
              </div>
              <div className="text-white text text-center pb-[8px]">
                <FontAwesomeIcon className="mx-[8px]" icon={faCalendarDays}></FontAwesomeIcon>
                {item.date}
              </div>
            </div>
          </div>
          )
        })}
      </div>}
      {tabItem === 1 && <div className="max-h-[1872px] w-[1228px] mx-auto grid grid-cols-4 gap-y-[25px] hover:text-[#d4dd29]">
        {preferential_list.map((item) => {
          return (
          <div className="w-full h-auto cursor-pointer">
            <img className="mx-[auto]" src={item.img} alt="" />
            <div className="">
              <div className="text-white text-[16px] text-center uppercase py-[8px] hover:text-[#d4dd29]">
                {item.name}
              </div>
              <div className="text-white text text-center pb-[8px]">
                <FontAwesomeIcon className="mx-[8px]" icon={faCalendarDays}></FontAwesomeIcon>
                {item.date}
              </div>
            </div>
          </div>
          )
        })}
      </div>}
    </Layout>
  );
};



//handle javascript

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// setTimeout(handle, 2000);

// function handle(){
//   const tabs = $$('.tab_item');
//   const contents = $$('.tab_content');

//   console.log(tabs);
//   console.log(contents);

//   const tabItem = tabs.forEach((tab, index) => {
//     const content = contents[index];

//     tab.onclick = function() {
//       $('.tab_item.active').classList.remove('active');
//       $('.tab_content.active').classList.remove('active');

//       this.classList.add('active');
//       content.classList.add('active');
//     }
//   });
// }




