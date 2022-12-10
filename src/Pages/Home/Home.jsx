import { Breadcrumb, Button } from "antd";
import { Carousel } from "antd";
import { Layout } from "../../Layout/Layout";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const slider = React.useRef();

  const [listImage, setListImage] = React.useState([
    "https://i.imgur.com/9OjcQC6.jpg",
    "https://phongcachdoisong.vn/wp-content/uploads/2022/09/DDD_FB-Cover_Character-1.jpg",
    "https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/p/u/pussinboots-blogroll-1647280577032.jpg",
    "https://wallpapercave.com/wp/wp9424755.jpg",
  ]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgb(2 132 199)",
          "border-radius": "9999px",
          "font-size": "50px",
          transform: "scale(4)",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgb(2 132 199)",
          "border-radius": "9999px",
          "font-size": "50px",
          transform: "scale(4)",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const navigate = useNavigate();
  const [movies, setMovies] = useState(undefined);
  const [movieType, setMovieType] = useState(true);

  const [newsType, setNewsType] = useState(true);

  React.useEffect(() => {
    fetch("http://localhost:3500/movie")
      // lấy dữ liệu về dạng json
      .then((data) => {
        return data.json();
      })
      // set state movies bằng dữ liệu trả về
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const nowDay = new Date();
  nowDay.setHours(0,0,0,0)

  const nowShowing = movies?.filter((item) => {
    return new Date(item.releaseDate) <= nowDay;
  }, []);

  const comingSoon = movies?.filter((item) => {
    return new Date(item.releaseDate) > nowDay;
  }, []);

  const dateToString = (date) => {
    let myDate = new Date(date).toLocaleDateString("en-UK");
    return myDate;
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <Carousel
          ref={(ref) => {
            slider.current = ref;
          }}
          autoplay
          className="h-[700px] w-screen"
        >
          <div className="bg-black relative">
            <img
              className="w-screen object-cover object-center opacity-50"
              src="http://pixner.net/boleto/demo/assets/images/account/account-bg.jpg"
              alt="image"
            />
            <div className="text-center absolute right-0 left-0 m-auto top-[250px]">
              <div className="text-5xl text-white font-bold">
                XEM GÌ
                <span className="text-amber-300">HÔM NAY</span>
              </div>
              <div className="text-4xl text-white italic m-[24px]">
                TẠI UIT CINEMA & THEATERS
              </div>
              <div className="text-3xl text-white">
                Đặt vé nhanh chóng - Lựa chọn chỗ ngồi yêu thích của bạn
              </div>
            </div>
          </div>
          {listImage.map((item) => (
            <img
              className="w-screen h-full object-cover object-center"
              src={item}
            ></img>
          ))}
        </Carousel>
        <LeftOutlined
          className="absolute top-[300px] text-white text-[40px] left-[40px] rounded-full
          p-[20px] bg-white/25 transition ease-in-out delay-150 hover:scale-110 duration-300" 
          onClick={() => slider.current.prev()}
        />
        <RightOutlined
          className="absolute top-[300px] text-white text-[40px] right-[40px] rounded-full
          p-[20px] bg-white/25 transition ease-in-out delay-150 hover:scale-110 duration-300"
          onClick={() => slider.current.next()}
        />
      </div>

      <div className=" mx-[200px]  border-2 rounded-lg my-[50px] shadow-xl">
        <div
          className="py-[15px] h-[100px] mx-[300px] my-[20px]
        flex justify-center items-center rounded-full border-sky-600"
        >
          <div
            className={`text-[30px] py-[10px] px-[30px] font-bold hover:text-amber-300
            mr-[30px] cursor-pointer rounded-full border-sky-600 border-2
            ${movieType === true && "text-amber-300 bg-sky-600"}
      `}
            onClick={() => setMovieType(true)}
          >
            PHIM ĐANG CHIẾU
          </div>
          <div
            className={`text-[30px] py-[10px] px-[30px] font-bold hover:text-amber-300
            cursor-pointer rounded-full border-sky-600 border-2
            ${movieType === false && "text-amber-300 bg-sky-600"}
            `}
            onClick={() => setMovieType(false)}
          >
            PHIM SẮP CHIẾU
          </div>
        </div>

        <div className="relative mx-[24px] h-[700px] bg-[#F2F7FF]">
          <Slider {...settings}>
            {(movieType ? nowShowing : comingSoon)?.map((item, index) => {
              return (
                <div key={index} className="relative h-[600px]">
                  <div className="flex flex-wrap justify-center">
                    <img
                      className="w-[220px] h-[276px] block mx-auto cursor-pointer
                      transition ease-in-out delay-150 hover:scale-110 duration-300"
                      src={item.image}
                      alt=""
                      onClick={() => {
                        navigate(`/movie/${item._id}`);
                      }}
                    />
                    <div className="h-[180px] w-[220px]">
                      <div
                        className="text-[20px] text-black leading-[26px] font-bold uppercase my-[10px] cursor-pointer  hover:text-[#0c468a]"
                        onClick={() => {
                          navigate(`/movie/${item._id}`);
                        }}
                      >
                        {item.name}
                      </div>
                      <div className="text-[15px] text-black">
                        Thể loại: {item.genre.join(", ")}
                      </div>
                      <div className="text-[15px] text-black">
                        Thời lượng: {item.duration} phút
                      </div>
                      <div className="text-[15px] text-black">
                        Khởi chiếu: {dateToString(item.releaseDate)}
                      </div>
                      <div className="absolute bottom-0 translate-x-[-50%] left-[50%] h-[33px] flex justify-center">
                        <Button
                          type="primary"
                          className="bg-[#0a1e5e] text-center"
                        >
                          Mua vé
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        
      </div>

      <div className=" mx-[200px]  border-2 rounded-lg my-[75px] shadow-xl">
        <div
          className="py-[15px] h-[100px] mx-[300px] my-[20px]
        flex justify-center items-center rounded-full border-sky-600"
        >
          <div
            className={`text-[30px] py-[10px] px-[30px] font-bold hover:text-amber-300
            mr-[30px] cursor-pointer rounded-full border-sky-600 border-2
            ${newsType === true && "text-amber-300 bg-sky-600"}
      `}
            onClick={() => setNewsType(true)}
          >
            TIN TỨC
          </div>
          <div
            className={`text-[30px] py-[10px] px-[30px] font-bold hover:text-amber-300
            cursor-pointer rounded-full border-sky-600 border-2
            ${newsType === false && "text-amber-300 bg-sky-600"}
            `}
            onClick={() => setNewsType(false)}
          >
            KHUYẾN MÃI
          </div>
        </div>
        </div>
    </Layout>
  );
};
