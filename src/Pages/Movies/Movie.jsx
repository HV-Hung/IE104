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

  const nowDate = dateToString(new Date().toJSON());

  const nowShowing = movies?.filter((item) => {
    return dateToString(item.releaseDate) <= nowDate;
  }, []);

  const comingSoon = movies?.filter((item) => {
    return dateToString(item.releaseDate) > nowDate;
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
      <div className="py-[15px] h-[70px] w-[1228px] mx-auto flex justify-center">
        <div
          className="text-[30px] text-white mr-[40px] cursor-pointer"
          style={movieType ? { color: "#0091ff" } : { color: "white" }}
          onClick={() => setMovieType(true)}
        >
          PHIM ĐANG CHIẾU
        </div>
        <div
          className="text-[30px] text-white cursor-pointer"
          style={movieType ? { color: "white" } : { color: "#0091ff" }}
          onClick={() => setMovieType(false)}
        >
          PHIM SẮP CHIẾU
        </div>
      </div>

      <div className="max-h-[1872px] w-[1228px] bg-[#0a1e5e] mt-[10px] mb-[20px] mx-auto grid grid-cols-5 gap-x-[67px] gap-y-[20px]">
        {(movieType ? nowShowing : comingSoon)?.map((item, index) => {
          return (
            <div key={index} className="h-[475px]">
              <div>
                <img
                  className="w-[192px] h-[276px] block mx-auto cursor-pointer"
                  src={item.image}
                  alt=""
                  onClick={() => {
                    navigate(`/movie/${item._id}`);
                  }}
                />
                <div className="h-[170px] bg-[#0a1e5e]">
                  <div
                    className="text-[20px] text-white leading-[26px] font-bold uppercase my-[10px] cursor-pointer"
                    onClick={() => {
                      navigate(`/movie/${item._id}`);
                    }}
                  >
                    {item.name}
                  </div>
                  <div className="text-[15px] text-white">
                    Thể loại: {item.genre}
                  </div>
                  <div className="text-[15px] text-white">
                    Thời lượng: {item.duration} phút
                  </div>
                  <div className="text-[15px] text-white">
                    Khởi chiếu: {dateToString(item.releaseDate)}
                  </div>
                </div>
              </div>
              <div className="h-[33px] bg-[#0a1e5e] flex justify-center">
                <Button
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
