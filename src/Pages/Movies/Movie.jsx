import { Breadcrumb, Button } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";

const temp_item = {
  name: "Khỉ con lon ton thế giới",
  img: "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/k/c/kclttg_-_main_poster_web_.jpg",
  topic: "Hài hước",
  time: "90 phút",
  start_date: "01/09/2022",
};

const temp = [];
for (let i = 0; i < 12; ++i) {
  temp.push(temp_item);
}

export const Movie = () => {
  return (
    <Layout>
      <Breadcrumb
        style={{
          marginLeft: "16px",
        }}
      >
        <Breadcrumb.Item className="text-white">Movie</Breadcrumb.Item>
      </Breadcrumb>
      <div className="pt-[30px] h-[90px] w-[1228px] mx-[134.5px] bg-[#3F72AF] flex justify-between">
        <div className="text-[40px] text-white font-semibold">
          Phim đang chiếu
        </div>
        <div className="text-[40px] text-white">Phim sắp chiếu</div>
      </div>

      <div className="h-[5px] w-[1228px] bg-black ml-[134.5px] mb-[15px]"></div>
      <div className="max-h-[1872px] w-[1228px] bg-white mb-[20px] mx-[134.5px] grid grid-cols-5 gap-x-[67px] gap-y-[20px]">
        {temp.map((item) => {
          return (
            <div className="h-[465px] bg-black">
              <img
                className="h-[260px] w-[179.26px] block mx-auto my-[6px]"
                src={item.img}
                alt=""
              />
              <div className="h-[160px] bg-white">
                <div className="text-[20px] leading-[26px] font-bold uppercase">
                  {item.name}
                </div>
                <div className="text-[15px] font-semibold">
                  Thể loại: {item.topic}
                </div>
                <div className="text-[15px] font-semibold">
                  Thời lượng: {item.time}
                </div>
                <div className="text-[15px] font-semibold">
                  Khởi chiếu: {item.start_date}
                </div>
              </div>
              <div className="h-[33px] bg-white flex justify-around">
                <Button type="primary">Like</Button>
                <Button type="primary">Mua vé</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
