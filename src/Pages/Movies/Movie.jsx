import { Breadcrumb, Button } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";

const temp_item = [
  {
    id: "6382cdcf8419a4142a6f6417",
    name: "Khỉ con lon ton thế giới",
    img: "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/k/c/kclttg_-_main_poster_web_.jpg",
    topic: "Hài hước",
    time: "90 phút",
    start_date: "01/09/2022",
  },
  {
    id: "1",
    name: "Khỉ con lon ton thế giới",
    img: "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/k/c/kclttg_-_main_poster_web_.jpg",
    topic: "Hài hước",
    time: "90 phút",
    start_date: "01/09/2022",
  },
  {
    id: "2",
    name: "Khỉ con lon ton thế giới",
    img: "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/k/c/kclttg_-_main_poster_web_.jpg",
    topic: "Hài hước",
    time: "90 phút",
    start_date: "01/09/2022",
  },
  {
    id: "3",
    name: "Khỉ con lon ton thế giới",
    img: "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/k/c/kclttg_-_main_poster_web_.jpg",
    topic: "Hài hước",
    time: "90 phút",
    start_date: "01/09/2022",
  },
];

export const Movie = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = React.useState(undefined);

  React.useEffect(() => {
    fetch("http://localhost:3500/movie")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, []);
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
          Trang chủ Phim Đang chiếu
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="pt-[20px] h-[90px] w-[1228px] mx-auto flex justify-between">
        <div className="text-[40px] text-white font-semibold">
          Phim đang chiếu
        </div>
        <div className="text-[40px] text-white">Phim sắp chiếu</div>
      </div>

      <div className="h-[2px] w-[1228px] mx-auto bg-white mb-[15px]"></div>
      <div className="max-h-[1872px] w-[1228px] bg-[#0a1e5e] mb-[20px] mx-auto grid grid-cols-5 gap-x-[67px] gap-y-[20px]">
        {temp_item.map((item, index) => {
          return (
            <div key={index} className="h-[465px]">
              <div
                onClick={() => {
                  navigate(`/movie/${item.id}`);
                }}
              >
                <img
                  className="w-[192px] block mx-auto bg-black p-[6px]"
                  src={item.img}
                  alt=""
                />
                <div className="h-[160px] bg-[#0a1e5e]">
                  <div className="text-[20px] text-white leading-[26px] font-bold uppercase">
                    {item.name}
                  </div>
                  <div className="text-[15px] text-white">
                    Thể loại: {item.topic}
                  </div>
                  <div className="text-[15px] text-white">
                    Thời lượng: {item.time}
                  </div>
                  <div className="text-[15px] text-white">
                    Khởi chiếu: {item.start_date}
                  </div>
                </div>
              </div>
              <div className="h-[33px] bg-[#0a1e5e] flex justify-around">
                <Button type="primary">Mua vé</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
