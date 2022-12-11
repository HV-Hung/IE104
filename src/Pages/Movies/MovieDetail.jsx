import { Breadcrumb, Button, Space } from "antd";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useGet } from "../../api";
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

export const MovieDetail = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [movie, setMovie] = useState(undefined);
  const id = param.id;
  React.useEffect(() => {
    fetch("http://localhost:3500/movie/" + id)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  const [trailer, setTrailer] = useState(false);

  const ref = React.useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [date, setDate] = React.useState(Dates[0].date);

  const [provinceId, setProvinceId] = React.useState(
    "638f61dceae6921efd78e7b4"
  );

  const { fetchGet, result: Optionsresult } = useGet();
  const { fetchGet: fetchGetShowtime, result: showtimeResult } = useGet();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchGet("province");
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    fetchGetShowtime(`showtime/${id}/${provinceId}/${date}`);
    // eslint-disable-next-line
  }, [provinceId, date, id]);

  const nowDay = new Date();
  nowDay.setHours(0, 0, 0, 0);

  const showtimeCounter = showtimeResult?.reduce(
    (counter, showtime) => counter + showtime.showtimes.length,
    0
  );

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

      <div className="mx-[200px]">
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
            NỘI DUNG
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

        <div className="grid grid-cols-[27%_73%] gap-x-[60px] my-[40px]">
          <img
            className="mr-[30px] w-[100%] rounded-lg"
            src={movie?.image}
            alt=""
          />

          <div>
            <div className="text-[30px] text-black mb-[20px] font-semibold">
              {movie?.name}
            </div>
            <div className="mb-[40px]">
              <div className="text-[18px] text-black leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Đạo diễn: </span>
                {movie?.director}
              </div>
              <div className="text-[18px] text-black leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Diễn viên: </span>
                {movie?.actors}
              </div>
              <div className="text-[18px] text-black leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Thể loại: </span>
                {movie?.genre.join(", ")}
              </div>
              <div className="text-[18px] text-black leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Khởi chiếu: </span>
                {new Date(movie?.releaseDate).toLocaleDateString("en-UK")}
              </div>
              <div className="text-[18px] text-black leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Thời lượng: </span>
                {movie?.duration} phút
              </div>
              <div className="text-[18px] text-black leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Ngôn ngữ: </span>
                {movie?.language}
              </div>
              <div className="text-[18px] text-black leading-[25px]">
                <span className="font-medium mx-0">Phân loại: </span>
                <span className="font-bold mx-0 text-[20px]">
                  {movie?.rated}
                </span>
              </div>
            </div>
            <div className="flex flex-start">
              <Button
                type="primary"
                className="bg-sky-700 font-bold text-center text-[20px] pb-[40px] rounded-lg mr-[30px]"
                onClick={() => setTrailer(!trailer)}
              >
                Xem Trailer
              </Button>
              {new Date(movie?.releaseDate) <= nowDay ? (
                <Button
                  type="primary"
                  className="bg-sky-700 font-bold text-center text-[20px] pb-[40px] rounded-lg"
                  onClick={handleClick}
                >
                  Mua vé
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="text-[25px] text-black font-medium text-center mb-[15px]">
          CHI TIẾT PHIM
        </div>
        <div className="text-[18px] text-black mb-[40px] leading-[25px]">
          {movie?.description}
        </div>
      </div>

      {new Date(movie?.releaseDate) <= nowDay && (
        <div className="my-[24px] min-h-[360px] mb-[50px] mx-[200px]" ref={ref}>
          <div className="text-[25px] font-medium text-center mb-[20px] text-black">
            VUI LÒNG CHỌN THÔNG TIN VÉ
          </div>

          <div className="py-8 font-bold border-t-2 border-black mx-[50px]">
            {Optionsresult &&
              Optionsresult.map((item) => (
                <button
                  onClick={() => setProvinceId(item._id)}
                  type="button"
                  key={item._id}
                  className={`ml-12 border hover:bg-sky-300 text-black px-[12px] py-[12px] border-sky-800 border-2 rounded-lg text-[24px] ${
                    item._id === provinceId ? "bg-sky-300" : "bg-[f2f7ff]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
          </div>

          <div className="border-t-2 border-black py-8 font-bold text-[20px] mx-[50px]">
            {Dates.map((item) => (
              <button
                onClick={() => setDate(item.date)}
                type="button"
                key={item.id}
                className={`ml-12 border hover:bg-sky-300 text-black px-[12px] py-[12px] border-sky-800 border-2 rounded-lg ${
                  item.date === date ? "bg-sky-300" : "bg-[f2f7ff]"
                }`}
              >
                {item.time}
              </button>
            ))}
          </div>

          <div>
            {showtimeResult &&
              showtimeResult.map((item) => (
                <div>
                  {item.showtimes.length > 0 ? (
                    <div className="border-t-2 border-black py-5 mx-[50px]">
                      <div className="text-[30px] mb-[20px] font-bold">
                        {item?.cinema?.name}
                      </div>
                      <Space wrap>
                        {item.showtimes.map((temp, index) => {
                          return (
                            <div
                              key={index}
                              className="ml-5 mb-2 border-sky-800 border-2 hover:bg-sky-300 rounded-lg font-bold text-[20px] text-black h-[50px] w-[100px] text-center pt-2 cursor-pointer relative"
                              onClick={() => {
                                navigate(`/bookticket/${temp._id}`);
                              }}
                            >
                              {temp.time}
                            </div>
                          );
                        })}
                      </Space>
                    </div>
                  ) : null}
                </div>
              ))}
            <div>
              {showtimeCounter === 0 ? (
                <div className="text-[30px] mt-[20px] font-bold text-center">
                  KHÔNG CÓ SUẤT CHIẾU PHÙ HỢP
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {trailer ? (
        <div
          className="bg-black/70 min-h-screen w-[100%] fixed top-0"
          onClick={() => setTrailer(false)}
        >
          <div className="mx-auto w-[1280px] relative top-[44px]">
            <iframe
              width="1280"
              height="720"
              src={movie?.trailer_url}
              title="Avatar 2 - Trailer mới nhất - Vietsub"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : null}
    </Layout>
  );
};
