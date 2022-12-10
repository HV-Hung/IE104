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
    (temp.getDay() !== 0 ? "T" + (1 + temp.getDay()) : "CN") +
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
  const [provinceId, setProvinceId] = React.useState("638f61dceae6921efd78e7b4");
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
      console.log(showtimeResult)
      const showtime = showtimeResult?.filter((item) => {
        return item.cinema._id === cinemaId;
      });
      console.log(showtime);
      let film = showtime[0]?.showtimes?.map((item) => {
        return item.movieId;
      })
      let filmId = film?.map((film) => {
        return film._id;
      })
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
          }
        })
        return {
          movieId: item[0].movieId,
          time: times,
        }
      })
      console.log(result);
      setMovies(result);
    }
  }, [showtimeResult, cinemaId]);
  //console.log(showtimeResult);
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Cinema</Breadcrumb.Item>
      </Breadcrumb>
      <div className="bg-[#F2F7FF]">
        <h1 className="text-3xl text-black text-center">DANH SÁCH RẠP</h1>

        {/* Hiển thị tất cả các tỉnh */}
        <div className="font-bold flex flex-wrap gap-y-8 justify-center align-center p-[24px] min-h-[70px] ">
          {provincesResult &&
            provincesResult.map((province) => (
              <button
                onClick={() => setProvinceId(province._id)}
                // type="button"
                key={province._id}
                className="ml-12 border bg-sky-700 hover:bg-sky-300 text-white px-[12px] py-[12px]"
              >
                {province.name}
              </button>
            ))}
        </div>

        {/* Hiển thị rạp tương ứng với tỉnh */}
        <div className="p-[24px] min-h-[360px] grid grid-cols-4 gap-10 px-[150px] text-black ">
          {provinceResult &&
            provinceResult.cinemas.map((item) => {

              return (
                <div
                  className="border-2 border-gray-500 h-[200px]"
                  onClick={() => setCinemaId(item._id)}
                >

                  <div className="border-b-2 border-gray-500 mb-5 text-center py-[12px] font-bold">
                    {item.name}
                  </div>
                  <div className="mb-5 px-[10px] h-[60px] text-xs">
                    {item.address}
                  </div>
                  <div className="text-center py-[12px] border-t-2 border-gray-500">
                    <FontAwesomeIcon size="lg" icon={faLocationDot} />
                  </div>
                </div>)

            })}
        </div>

        {/* Hiển thị Movies và Showtimes của Cinema */}
        <>
          {/* <h1 className="bg-no-repeat bg-[url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg')] text-3xl text-black text-center">
            THEATER
          </h1> */}
          <div className="text-center">
            <div
              style={{
                display: "inline-block",
                height: "7px",
                width: "25rem",
                margin: "10px 10px 10px 10px",
                backgroundColor: "#31D7A9",
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
                color: "#31D7A9",
              }}
            >
              THEATER
            </span>
            <div
              style={{
                display: "inline-block",
                height: "7px",
                width: "25rem",
                margin: "10px 10px 10px 10px",
                backgroundColor: "#31D7A9",
              }}
            ></div>
          </div>
          <div className="p-[24px] min-h-[360px] bg-white my-[50px] mx-[200px]">
            <div className="border-t-4 border-black py-5">
              {Dates.map((item) => {
                return (
                  <button
                    onClick={() => {
                      setDate(item.date);
                    }}
                    type="button"
                    key={item.id}
                    className={`ml-5 border ${item.date === date ? "bg-red-500" : "bg-sky-700"}  hover:bg-sky-300 text-black h-[50px] w-[100px] rounded-xl`}
                  >
                    {item.time}
                  </button>
                )
              })}
            </div>
            <div>
              {movies !== 0 && movies.map((movie) => {
                return (
                  <div className="border-t-2 border-slate-600 py-5 mx-[50px]">
                    <div className="text-[30px] mb-[20px]">{movie.movieId.name}</div>
                    <Space>
                      {movie.time.map((temp, index) => (
                        <div
                          key={index}
                          className="ml-5 border bg-gray-700 hover:bg-sky-300 text-white h-[50px] w-[100px] text-center pt-3 relative"
                          onClick={() => {
                            navigate(`/bookticket/${temp.showtimeId}`);
                          }}
                        >
                          {temp.time}

                        </div>
                      ))}
                    </Space>
                  </div>
                );
              })}
            </div>

          </div>
        </>
      </div>
    </Layout >
  );
};
