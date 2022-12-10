import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "antd";

import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { useParams } from "react-router-dom";
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

// const branch = [
//   {
//     name: "HẠNH PHÚC MÁU",
//     id: 1,
//     idCity: 1,
//     idDate: 1,
//     time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
//   },

//   {
//     name: "TRO TÀN RỰC RỠ",
//     id: 2,
//     idCity: 1,
//     idDate: 2,
//     time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
//   },

//   {
//     name: "HẠNH PHÚC MÁU",
//     id: 3,
//     idCity: 1,
//     idDate: 3,
//     time: ["11h15 AM", "4h30 PM"],
//   },

//   {
//     name: "TRO TÀN RỰC RỠ",
//     id: 4,
//     idCity: 1,
//     idDate: 1,
//     time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
//   },

//   {
//     name: "HẠNH PHÚC MÁU",
//     id: 5,
//     idCity: 1,
//     idDate: 2,
//     time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
//   },

//   {
//     name: "HẠNH PHÚC MÁU",
//     id: 6,
//     idCity: 1,
//     idDate: 3,
//     time: ["11h15 AM", "4h30 PM"],
//   },

//   {
//     name: "HẠNH PHÚC MÁU",
//     id: 7,
//     idCity: 2,
//     idDate: 1,
//     time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
//   },

//   {
//     name: "TRO TÀN RỰC RỠ",
//     id: 8,
//     idCity: 2,
//     idDate: 2,
//     time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
//   },

//   {
//     name: "TRO TÀN RỰC RỠ",
//     id: 9,
//     idCity: 2,
//     idDate: 3,
//     time: ["11h15 AM", "4h30 PM"],
//   },

//   {
//     name: "TRO TÀN RỰC RỠ",
//     id: 10,
//     idCity: 2,
//     idDate: 1,
//     time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
//   },

//   {
//     name: "TRO TÀN RỰC RỠ",
//     id: 11,
//     idCity: 2,
//     idDate: 2,
//     time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
//   },

//   {
//     name: "TRO TÀN RỰC RỠ",
//     id: 12,
//     idCity: 2,
//     idDate: 3,
//     time: ["11h15 AM", "4h30 PM"],
//   },
// ];

export const Cinema = () => {
  const [provinceId, setProvinceId] = React.useState();
  const [cinemaId, setCinemaId] = React.useState();
  const { fetchGet: fetchProvinces, result: provincesResult } = useGet();
  const { fetchGet: fetchProvince, result: provinceResult } = useGet();
  const { fetchGet: fetchShowtime, result: showtimeResult } = useGet();
  const [date, setDate] = React.useState(Dates[0].date);

  // Dữ liệu giả provines và cinemas
  // const [provinces, setprovinces] = React.useState([
  //   { name: "Toàn Quốc", id: 0 },
  //   { name: "Hà Nội", id: 1 },
  //   { name: "TP Hồ Chí Minh", id: 2 },
  //   { name: "Cần Thơ", id: 3 },
  //   { name: "Hải Phòng", id: 4 },
  //   { name: "Đà Nẵng", id: 5 },
  // ]);

  // const [cinemas, setCinemas] = React.useState([
  //   {
  //     name: "BHD Hà Nội",
  //     id: 6,
  //     idProvince: 1,
  //     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  //   },
  //   {
  //     name: "BHD Hà Nội 2",
  //     id: 6,
  //     idProvince: 1,
  //     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  //   },
  //   {
  //     name: "BHD Hồ Chí Minh",
  //     id: 7,
  //     idProvince: 2,
  //     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  //   },
  //   {
  //     name: "BHD Cần Thơ",
  //     id: 8,
  //     idProvince: 3,
  //     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  //   },
  //   {
  //     name: "BHD Hải Phòng",
  //     id: 9,
  //     idProvince: 4,
  //     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  //   },
  //   {
  //     name: "BHD Đà Nẵng",
  //     id: 10,
  //     idProvince: 5,
  //     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  //   },
  // ]);

  
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
    if (provinceId) fetchShowtime(`showtime/cinema/${cinemaId}/${date}`);
  }, [cinemaId, date]);
  // Dữ liệu giả
  // function getProvinceById(id) {
  //   if (id != 0) {
  //     const newList = cinema.filter(function (cinema) {
  //       return cinema.idProvince == id;
  //     });
  //     setCinemas([...newList]);
  //   } else setCinemas([...cinema]);
  // }

  // Mặc định load tất cả cinema

  const [mode, setMode] = useState("top");
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  // Movie Showtime (cũ)

  const [ShowTime, setShowTime] = React.useState([
    {
      name: "Hà Nội 1",
      id: 1,
      idCity: 1,
      idDate: 1,
      time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
    },
    {
      name: "Hà Nội 2",
      id: 4,
      idCity: 1,
      idDate: 1,
      time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
    },
  ]);

  const [buyTicket, setBuyTicket] = React.useState(false);

  const param = useParams();
  const [movie, setMovie] = useState(undefined);
  const id = param.id;

  console.log(showtimeResult);
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
            provinceResult.cinemas.map((item) => (
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
              </div>
            ))}
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
            <div className="border-y-4 border-black py-5">
              {Dates.map((item) => (
                <button
                  onClick={() => setDate(item.date)}
                  type="button"
                  key={item.id}
                  className={`ml-5 border ${
                    item.date === date ? "bg-red-500" : "bg-sky-700"
                  }  hover:bg-sky-300 text-black h-[50px] w-[100px] rounded-xl`}
                >
                  {item.time}
                </button>
              ))}
            </div>

            <div>
              {ShowTime.map((item) => (
                <div className="border-t-2 border-slate-600 py-5 mx-[50px]">
                  <div className="text-[30px] mb-[20px]">{item.name}</div>
                  {item.time.map((temp, index) => (
                    <button
                      type="button"
                      key={index}
                      className="ml-5 border bg-gray-700 hover:bg-sky-300 text-black h-[50px] w-[100px]"
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </Layout>
  );
};
