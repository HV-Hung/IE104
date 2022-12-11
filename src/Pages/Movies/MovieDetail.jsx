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
    setBuyTicket(!buyTicket);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [buyTicket, setBuyTicket] = React.useState(false);

  const [date, setDate] = React.useState(Dates[0].date);

  const [provinceId, setProvinceId] = React.useState(
    "638f61dceae6921efd78e7b4"
  );

  const { fetchGet, result: Optionsresult } = useGet();
  const { fetchGet: fetchGetShowtime, result: showtimeResult } = useGet();

  React.useEffect(() => {
    window.scrollTo(0, 0)
    fetchGet("province");
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    fetchGetShowtime(`showtime/${id}/${provinceId}/${date}`);
    // eslint-disable-next-line
  }, [provinceId, date, id]);

  const nowDay = new Date();
  nowDay.setHours(0, 0, 0, 0);

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
        <div className="py-[20px] min-h-[90px] text-[40px] font-bold">NỘI DUNG</div>

        <div className="grid grid-cols-[27%_73%] gap-x-[20px] mb-[40px]">
          <img className="mr-[30px] w-[100%]" src={movie?.image} alt="" />

          <div>
            <div className="text-[30px] mb-[20px] font-semibold">
              {movie?.name}
            </div>
            <div className="mb-[40px]">
              <div className="text-[18px] leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Đạo diễn: </span>
                {movie?.director}
              </div>
              <div className="text-[18px] leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Diễn viên: </span>
                {movie?.actors}
              </div>
              <div className="text-[18px] leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Thể loại: </span>
                {movie?.genre.join(", ")}
              </div>
              <div className="text-[18px] leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Khởi chiếu: </span>
                {new Date(movie?.releaseDate).toLocaleDateString("en-UK")}
              </div>
              <div className="text-[18px] leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Thời lượng: </span>
                {movie?.duration} phút
              </div>
              <div className="text-[18px] leading-[25px] mb-[15px]">
                <span className="font-medium mx-0">Ngôn ngữ: </span>
                {movie?.language}
              </div>
              <div className="text-[18px] leading-[25px]">
                <span className="font-medium mx-0">Phân loại: </span>
                <span className="font-bold mx-0 text-[20px]">
                  {movie?.rated}
                </span>
              </div>
            </div>
            <div className="flex flex-start">
              <Button
                type="primary"
                className="mr-[10px] h-[40px] w-[130px] bg-blue-500 font-bold"
                onClick={() => setTrailer(!trailer)}
              >
                Xem Trailer
              </Button>
              {new Date(movie?.releaseDate) <= nowDay ? (
                <Button
                  type="primary"
                  className="h-[40px] w-[130px] bg-blue-500 font-bold"
                  onClick={handleClick}
                >
                  Mua vé
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="text-[25px] font-medium text-center mb-[15px]">CHI TIẾT PHIM</div>
        <div className="text-[18px] mb-[40px] leading-[25px]">
          {movie?.description}
        </div>
      </div>

      {new Date(movie?.releaseDate) <= nowDay && (
        <div
          className="my-[24px] min-h-[360px] mb-[50px] mx-[200px]"
          ref={ref}
        >
        <div className="text-[25px] font-medium text-center mb-[20px]">VUI LÒNG CHỌN THÔNG TIN VÉ</div>
          <div className="border-y-4 border-black py-5">
            {Dates.map((item) => (
              <button
                onClick={() => setDate(item.date)}
                type="button"
                key={item.id}
                className={`ml-5 border ${
                  item.date === date ? "bg-sky-600" : " bg-gray-400"
                }  hover:bg-sky-300 text-white h-[50px] w-[100px] rounded-xl`}
              >
                {item.time}
              </button>
            ))}
          </div>

          <div className="py-5">
            {Optionsresult &&
              Optionsresult.map((item) => (
                <button
                  onClick={() => setProvinceId(item._id)}
                  type="button"
                  key={item._id}
                  className={`ml-5 border ${
                    item._id === provinceId ? "bg-sky-600" : " bg-gray-400"
                  } hover:bg-sky-300  text-white h-[50px] w-[100px] rounded-xl`}
                >
                  {item.name}
                </button>
              ))}
          </div>

          <div>
            {showtimeResult &&
              showtimeResult.map((item) => (
                <div className="border-t-2 border-slate-600 py-5 mx-[50px]">
                  <div className="text-[30px] mb-[20px]">
                    {item?.cinema?.name}
                  </div>
                  <Space wrap>
                    {item.showtimes.map((temp, index) => {
                      return (
                        <div
                          key={index}
                          className="ml-5 border bg-gray-700 hover:bg-sky-300 text-white h-[50px] w-[100px] text-center pt-3 relative"
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
              ))}
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
