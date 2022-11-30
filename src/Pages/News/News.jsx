import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "./News.css"

const news_list = [
  { 
    id: 1,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 2,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 3,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 4,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 5,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 6,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 7,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 8,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 9,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 10,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 11,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 12,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
  { 
    id: 13,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080-270x152.jpg",
    name: "LỄ HỘI ĐA SẮC MÀU",
    date: "18/11/2022 - 02/01/2023"
  },
];

const preferential_list = [
  {
    id: 1,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id: 2,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id: 3,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id: 4,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id:5,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id: 6,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id: 7,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
  {
    id: 8,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/Banner-billboard-3m2x4m3-246x330.jpg",
    name: "BHD STAR GARDEN",
    date: "Từ 01/12/2022"
  },
];

export const News = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>New</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">News</div>
      <div className="w-[1228px] mx-auto flex justify-center items-center cursor-pointer">
        <div className="tab-item text-white text-[32px] text-center font-semibold mx-[16px] my-[32px] hover:text-[#d4dd29] hover:cursor-pointer">TIN TỨC</div>
        <div className="border-l-[3px] border-solid border-[#fff] h-[32px]"></div>
        <div className="tab-item text-white text-[32px] text-center font-semibold mx-[16px] my-[32px] hover:text-[#d4dd29] hover:cursor-pointer">ƯU ĐÃI</div>
      </div>
      <div className="max-h-[1872px] w-[1228px] mx-auto grid grid-cols-4 gap-x-[20px] gap-y-[20px]">
        {news_list.map((item) => {
          return (
          <div className="w-full h-auto cursor-pointer">
            <img className="h-[164px]" src={item.img} alt="" />
            <div className="">
              <div className="text-white text-[14px] text-center uppercase py-[8px]">
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
      </div>
      <div className="max-h-[1872px] w-[1228px] mx-auto grid grid-cols-4 gap-y-[25px] hidden">
        {preferential_list.map((item) => {
          return (
          <div className="w-full h-auto cursor-pointer">
            <img className="mx-[auto]" src={item.img} alt="" />
            <div className="">
              <div className="text-white text-[14px] text-center uppercase py-[8px]">
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
      </div>
    </Layout>
  );
};

