import { Breadcrumb, Button } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Movie = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(undefined);
  const [movieType, setMovieType] = useState(true);

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

  return (
    <Layout>
      <Breadcrumb
        style={{
          marginTop: "10px",
          marginBottom: "5px",
          backgroundColor: "gray",
        }}
      >
        <Breadcrumb.Item></Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="py-[15px] h-[100px] mx-[300px] my-[20px]
        flex justify-center items-center rounded-full border-sky-500"
      >
        <div
          className={`text-[30px] bg-[#F2F7FF] py-[10px] px-[30px] font-bold hover:text-amber-300
            text-black mr-[30px] cursor-pointer rounded-full border-sky-500
            ${movieType === true && "text-amber-300 bg-[#0c468a]"}
      `}
          onClick={() => setMovieType(true)}
        >
          PHIM ĐANG CHIẾU
        </div>
        <div
          className={`text-[30px] bg-[#F2F7FF] py-[10px] px-[30px] font-bold hover:text-amber-300
            text-black cursor-pointer rounded-full border-sky-500
            ${movieType === false && "text-amber-300 bg-[#0c468a]"}
            `}
          onClick={() => setMovieType(false)}
        >
          PHIM SẮP CHIẾU
        </div>
      </div>

      <div className="max-h-[1872px] max-w-[1228px] mb-[20px] mx-auto grid grid-cols-5 gap-x-[67px] gap-y-[20px]">
        {(movieType ? nowShowing : comingSoon)?.map((item, index) => {
          return (
            <div key={index} className="h-[475px]">
              <div>
                <img
                  className="w-[192px] h-[276px] mx-auto cursor-pointer"
                  src={item.image}
                  alt=""
                  onClick={() => {
                    navigate(`/movie/${item._id}`);
                  }}
                />
                <div className="h-[170px]">
                  <div
                    className="text-[20px] text-black leading-[26px] font-bold uppercase my-[10px] cursor-pointer hover:text-cyan-300"
                    onClick={() => {
                      navigate(`/movie/${item._id}`);
                    }}
                  >
                    {item.name}
                  </div>
                  <div className="text-[15px] text-black">
                    <span className="font-medium mx-0">Thể loại: </span>
                    {item.genre.join(", ")}
                  </div>
                  <div className="text-[15px] text-black">
                    <span className="font-medium mx-0">Thời lượng: </span>
                    {item.duration} phút
                  </div>
                  <div className="text-[15px] text-black">
                    <span className="font-medium mx-0">Khởi chiếu: </span>
                    {dateToString(item.releaseDate)}
                  </div>
                </div>
              </div>
              <div className="h-[33px] flex justify-center">
                <Button
                  className="bg-blue-500 font-bold"
                  type="primary"
                  onClick={() => {
                    navigate(`/movie/${item._id}`);
                  }}
                >
                  Mua vé
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

const dateToString = (date) => {
  let myDate = new Date(date).toLocaleDateString("en-UK");
  return myDate;
};
