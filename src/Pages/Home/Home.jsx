import { Button } from "antd";
import { Carousel } from "antd";
import { Layout } from "../../Layout/Layout";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deal_list, news_list, listImage } from "./deals";

export const Home = () => {
  const slider = React.useRef();

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

  function SampleNextArrowNews(props) {
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

  function SamplePrevArrowNews(props) {
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
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settingsNews = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrowNews />,
    prevArrow: <SamplePrevArrowNews />,
  };

  const navigate = useNavigate();
  const [movies, setMovies] = useState(undefined);
  const [movieType, setMovieType] = useState(true);

  const [newsType, setNewsType] = useState(deal_list);

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
  nowDay.setHours(0, 0, 0, 0);

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
          className="h-[850px] w-screen"
        >
          <div className="bg-black relative">
            <img
              className="w-screen object-cover object-center opacity-50"
              src="http://pixner.net/boleto/demo/assets/images/account/account-bg.jpg"
              alt=""
            />
            <div className="text-center absolute right-0 left-0 m-auto top-[250px]">
              <div className="text-5xl text-white font-bold">
                XEM GÌ
                <span className="text-amber-300 ml-[15px]">HÔM NAY</span>
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
              alt=""
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

        <div className="relative mx-[24px] h-[620px] bg-[#F2F7FF]">
          <Slider {...settings}>
            {(movieType ? nowShowing : comingSoon)?.map((item, index) => {
              return (
                <div key={index} className="relative min-h-[550px]">
                  <div className="flex flex-wrap justify-center">
                    <img
                      className="w-[220px] h-[276px] block mx-auto cursor-pointer rounded-lg
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
                      <div className="text-[18px] text-black">
                        Thể loại: {item.genre.join(", ")}
                      </div>
                      <div className="text-[18px] text-black">
                        Thời lượng: {item.duration} phút
                      </div>
                      <div className="text-[18px] text-black">
                        Khởi chiếu: {dateToString(item.releaseDate)}
                      </div>
                      <div className="absolute bottom-5 translate-x-[-50%] left-[50%] flex justify-center">
                        <Button
                          onClick={() => {
                            navigate(`/movie/${item._id}`);
                          }}
                          type="primary"
                          className="bg-sky-700 font-bold text-center text-[20px] pb-[40px] rounded-lg"
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
            ${newsType === deal_list && "text-amber-300 bg-sky-600"}
      `}
            onClick={() => setNewsType(deal_list)}
          >
            KHUYẾN MÃI
          </div>
          <div
            className={`text-[30px] py-[10px] px-[30px] font-bold hover:text-amber-300
            cursor-pointer rounded-full border-sky-600 border-2
            ${newsType === news_list && "text-amber-300 bg-sky-600"}
            `}
            onClick={() => setNewsType(news_list)}
          >
            TIN TỨC
          </div>
        </div>
        <div className="relative mx-[48px] bg-[#F2F7FF] pb-[75px]">
          <Slider {...settingsNews}>
            {newsType.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <div className="flex flex-wrap justify-center">
                    <Link to={`/news/${item.id}`}>
                      <div className=" cursor-pointer">
                        <img
                          className="mx-auto transition ease-in-out delay-150 hover:scale-110 duration-300"
                          src={item.img}
                          alt=""
                        />
                        <div className="px-[30px] text-black text-[18px] text-center font-[500] uppercase py-[12px] hover:text-[#0c468a]">
                          {item.name}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </Layout>
  );
};
