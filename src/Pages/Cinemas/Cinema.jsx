import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Space } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";

import "./Cinema.css";
import { useGet } from "../../api/get";

// Movie Showtime
const Dates = [];
for (let i = 0; i <= 6; i++) {
  const toDate = new Date();
  const temp = new Date();
  temp.setDate(toDate.getDate() + i);
  const temp2 =
    (temp.getDay() !== 0 ? "Thứ " + (1 + temp.getDay()) : "Chủ nhật") +
    ", " +
    temp.getDate() +
    "/" +
    (temp.getMonth() + 1);
  temp.setHours(7);
  temp.setMinutes(0);
  temp.setSeconds(1);
  Dates.push({
    time: temp2,
    id: i + 1,
    date: temp.toISOString(),
  });
}

export const Cinema = () => {
  const navigate = useNavigate();
  const [provinceId, setProvinceId] = React.useState(
    "638f61dceae6921efd78e7b4"
  );
  const [cinemaId, setCinemaId] = React.useState();
  const { fetchGet: fetchProvinces, result: provincesResult } = useGet();
  const { fetchGet: fetchProvince, result: provinceResult } = useGet();
  const { fetchGet: fetchShowtime, result: showtimeResult } = useGet();
  const [date, setDate] = React.useState(Dates[0].date);
  const [movies, setMovies] = React.useState(0);

  // Load provinces từ Back-end
  // Load tất cả các tỉnh
  React.useEffect(() => {
    fetchProvinces("province");
  }, []);

  // Load 1 tỉnh
  React.useEffect(() => {
    if (provinceId) fetchProvince("province/" + provinceId);
  }, [provinceId]);

  React.useEffect(() => {
    fetchShowtime(`showtime/null/${provinceId}/${date}`);
  }, [provinceId, date]);

  const [nameCinemaClick, setNameCinemaClick] = React.useState(null);

  // const getShowtimeofCinema = (id_cinema) => {
  //   setCinemaId(id_cinema);
  //   const showtime = showtimeResult.filter((item) => {
  //     return item.cinema._id === id_cinema;
  //   })
  //   console.log(showtime);
  //   let film = showtime[0].showtimes.map((item) => {
  //     return item.movieId;
  //   })
  //   let filmId = film.map((film) => {
  //     return film._id;
  //   })
  //   filmId = new Set(filmId);
  //   filmId = [...filmId];
  //   console.log(filmId);

  //   const result = filmId.map((film) => {
  //     const item = showtime[0].showtimes.filter((showtime) => {
  //       return film === showtime.movieId._id;
  //     });

  //     const times = item.map((time) => { return time.time })
  //     return {
  //       movieId: item[0].movieId,
  //       time: times,
  //     }
  //   })
  //   console.log(result);
  //   setMovies(result);
  // }

  React.useEffect(() => {
    if (showtimeResult) {
      console.log(showtimeResult);
      const showtime = showtimeResult?.filter((item) => {
        return item.cinema._id === cinemaId;
      });
      console.log(showtime);
      let film = showtime[0]?.showtimes?.map((item) => {
        return item.movieId;
      });
      let filmId = film?.map((film) => {
        return film._id;
      });
      filmId = new Set(filmId);
      filmId = [...filmId];
      console.log(filmId);

      const result = filmId.map((film) => {
        const item = showtime[0]?.showtimes?.filter((showtime) => {
          return film === showtime.movieId._id;
        });
        console.log("item", item);
        const times = item.map((time) => {
          return {
            showtimeId: time._id,
            time: time.time,
          };
        });
        return {
          movieId: item[0].movieId,
          time: times,
        };
      });
      console.log(result);
      setMovies(result);
    }
  }, [showtimeResult, cinemaId]);
  //console.log(showtimeResult);

  const movieShowCount = movies.length;

  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Cinema</Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-10">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              height: "7px",
              width: "30vw",
              margin: "10px",
              backgroundColor: "rgb(125 211 252)",
            }}
          ></div>
          <span
            type="Text"
            style={{
              display: "inline-block",
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              padding: "0 auto",
              color: "#0c468a",
            }}
          >
            DANH SÁCH RẠP
          </span>
          <div
            style={{
              display: "inline-block",
              height: "7px",
              width: "30vw",
              margin: "10px",
              backgroundColor: "rgb(125 211 252)",
            }}
          ></div>
        </div>

        {/* Hiển thị tất cả các tỉnh */}
        <div className="font-bold flex flex-wrap gap-y-8 justify-center align-center p-[24px] min-h-[70px] text-[24px]">
          {provincesResult &&
            provincesResult.map((province) => (
              <button
                onClick={() => {
                  setProvinceId(province._id);
                  setCinemaId();
                  setNameCinemaClick(null);
                  setDate(Dates[0].date);
                }}
                // type="button"
                key={province._id}
                className={`ml-12 border hover:bg-sky-300 text-black px-[12px] py-[12px] border-sky-800 border-2 rounded-lg
                ${province._id === provinceId ? "bg-sky-300" : "bg-[f2f7ff]"}`}
              >
                {province.name}
              </button>
            ))}
        </div>

        {/* Hiển thị rạp tương ứng với tỉnh */}
        <div className="p-[24px] grid grid-cols-4 gap-10 px-[150px] text-black ">
          {provinceResult &&
            provinceResult.cinemas.map((item) => {
              return (
                <div className=" h-[255px]">
                  <div
                    className={`border-2 border-sky-800 text-center py-[12px] font-bold text-[22px] cursor-pointer hover:bg-sky-300
                    ${item._id === cinemaId ? "bg-sky-300" : "bg-[#f2f7ff]"}
                  `}
                    onClick={() => {
                      setCinemaId(item._id);
                      setNameCinemaClick(item.name);
                      setDate(Dates[0].date);
                    }}
                  >
                    {item.name}
                  </div>
                  <div className=" px-[10px] py-[5px] h-[120px] text-[18px] border-l-2 border-r-2 border-sky-800">
                    {item.address}
                  </div>
                  <div
                    className="text-center py-[12px] border-2 border-sky-800 cursor-pointer hover:bg-sky-300"
                    onClick={() => window.open(`${item.address_url}`, "_blank")}
                  >
                    <FontAwesomeIcon size="lg" icon={faLocationDot} />
                  </div>
                </div>
              );
            })}
        </div>

        {nameCinemaClick != null ? (
          <div>
            <div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-block",
                    height: "7px",
                    width: "30vw",
                    margin: "10px",
                    backgroundColor: "rgb(125 211 252)",
                  }}
                ></div>
                <span
                  type="Text"
                  style={{
                    display: "inline-block",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "0 auto",
                    color: "#0c468a",
                  }}
                >
                  {nameCinemaClick}
                </span>
                <div
                  style={{
                    display: "inline-block",
                    height: "7px",
                    width: "30vw",
                    margin: "10px",
                    backgroundColor: "rgb(125 211 252)",
                  }}
                ></div>
              </div>

              <div className="p-[24px] mx-[200px]">
                <div className="pb-10">
                  {Dates.map((item) => {
                    return (
                      <button
                        onClick={() => {
                          setDate(item.date);
                        }}
                        type="button"
                        key={item.id}
                        className={`my-2 ml-12 font-bold text-[20px] border hover:bg-sky-300 text-black px-[12px] py-[12px] border-sky-800 border-2 rounded-lg ${
                          item.date === date ? "bg-sky-300" : "bg-[#f2f7ff]"
                        }`}
                      >
                        {item.time}
                      </button>
                    );
                  })}
                </div>

                <div>
                  {movies &&
                    movies.map((movie) => {
                      return (
                        <div className="border-t-2 border-slate-600 py-5 mx-[50px]">
                          <div className="flex">
                            <img
                              className="w-[100px] cursor-pointer rounded-lg mx-[20px]"
                              src={movie.movieId.image}
                              alt=""
                              onClick={() => {
                                navigate(`/movie/${movie.movieId._id}`);
                              }}
                            />
                            <div>
                              <div className="text-[24px] mb-[15px] font-bold ml-[20px]">
                                {movie.movieId.name}
                              </div>
                              <Space wrap>
                                {movie.time.map((temp, index) => (
                                  <div
                                    key={index}
                                    className="ml-5 mb-2 border-sky-800 border-2 hover:bg-sky-300 rounded-lg font-bold text-[20px] text-black h-[50px] w-[100px] text-center pt-2 cursor-pointer relative"
                                    onClick={() => {
                                      navigate(
                                        `/bookticket/${temp.showtimeId}`
                                      );
                                    }}
                                  >
                                    {temp.time}
                                  </div>
                                ))}
                              </Space>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div>{movieShowCount == 0 ? 
                <div className="font-bold text-[30px] text-center">KHÔNG CÓ SUẤT CHIẾU PHÙ HỢP</div> : null}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};
