// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button, Card, Tabs, Radio } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { data } from "autoprefixer";
import { useParams } from "react-router-dom";


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
  Dates.push({
    time: temp2,
    id: i + 1,
  });
}

const branch = [
  {
    name: "HẠNH PHÚC MÁU",
    id: 1,
    idCity: 1,
    idDate: 1,
    time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
  },

  {
    name: "TRO TÀN RỰC RỠ",
    id: 2,
    idCity: 1,
    idDate: 2,
    time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
  },

  {
    name: "HẠNH PHÚC MÁU",
    id: 3,
    idCity: 1,
    idDate: 3,
    time: ["11h15 AM", "4h30 PM"],
  },

  {
    name: "TRO TÀN RỰC RỠ",
    id: 4,
    idCity: 1,
    idDate: 1,
    time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
  },

  {
    name: "HẠNH PHÚC MÁU",
    id: 5,
    idCity: 1,
    idDate: 2,
    time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
  },

  {
    name: "HẠNH PHÚC MÁU",
    id: 6,
    idCity: 1,
    idDate: 3,
    time: ["11h15 AM", "4h30 PM"],
  },

  {
    name: "HẠNH PHÚC MÁU",
    id: 7,
    idCity: 2,
    idDate: 1,
    time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
  },

  {
    name: "TRO TÀN RỰC RỠ",
    id: 8,
    idCity: 2,
    idDate: 2,
    time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
  },

  {
    name: "TRO TÀN RỰC RỠ",
    id: 9,
    idCity: 2,
    idDate: 3,
    time: ["11h15 AM", "4h30 PM"],
  },

  {
    name: "TRO TÀN RỰC RỠ",
    id: 10,
    idCity: 2,
    idDate: 1,
    time: ["9h30 AM", "10h AM", "11h30 AM", "1h PM"],
  },

  {
    name: "TRO TÀN RỰC RỠ",
    id: 11,
    idCity: 2,
    idDate: 2,
    time: ["9h AM", "10h30 AM", "11h AM", "1h30 PM"],
  },

  {
    name: "TRO TÀN RỰC RỠ",
    id: 12,
    idCity: 2,
    idDate: 3,
    time: ["11h15 AM", "4h30 PM"],
  },
];

export const Cinema = () => {
  
  // Backend
  const [provinces, setProvinces] = React.useState();
  const [cinemas, setCinemas] = React.useState();
  const [isDisplay, setIsDisplay] = React.useState(false);

  // Dữ liệu giả
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
  React.useEffect(() => {
    fetch("http://localhost:3500/province")
      // lấy dữ liệu về dạng json
      .then((response) => response.json())
      // set state provinces bằng dữ liệu trả về
      .then((province) => setProvinces(province));
  }, []);

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
  React.useEffect(() => {
    fetch("http://localhost:3500/cinema")
      // lấy dữ liệu về dạng json
      .then((response) => response.json())
      // set state provinces bằng dữ liệu trả về
      .then((cinema) => setCinemas(cinema));
  }, []);

  // Load Cinema tướng ứng với Provinces
  function getProvinceById(id) {
    fetch("http://localhost:3500/province/" + id)
      .then((response) => response.json())
      .then((province) => setCinemas(province.cinemas));
  }
  console.log(cinemas);

  // Dữ liệu khởi tạo (mặc định cho Toàn quốc)
  const cinema = [
    {
      name: "BHD Hà Nội",
      id: 6,
      idProvince: 1,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
      img: "https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/v/i/vivo-2_1.png",
    },
    {
      name: "BHD Hà Nội 2",
      id: 66,
      idProvince: 1,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    },
    {
      name: "BHD Hồ Chí Minh",
      id: 7,
      idProvince: 2,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    },
    {
      name: "BHD Hồ Chí Minh 2",
      id: 77,
      idProvince: 2,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    },
    {
      name: "BHD Cần Thơ",
      id: 8,
      idProvince: 3,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    },
    {
      name: "BHD Hải Phòng",
      id: 9,
      idProvince: 4,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    },
    {
      name: "BHD Đà Nẵng",
      id: 10,
      idProvince: 5,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    },
  ];

  const [mode, setMode] = useState("top");
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  // Movie Showtime

  const [movies, setMovies] = React.useState([
    {
      id: 1,
      name: "HẠNH PHÚC MÁU",
      img: "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/h/p/hpm_poster_2x3_1_.jpg",
    },
    {
      id: 2,
      name: "HẠNH PHÚC MÁU",
      img: "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/h/p/hpm_poster_2x3_1_.jpg",
    },
    {
      id: 3,
      name: "HẠNH PHÚC MÁU",
      img: "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/h/p/hpm_poster_2x3_1_.jpg",
    },
    {
      id: 4,
      name: "HẠNH PHÚC MÁU",
      img: "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/h/p/hpm_poster_2x3_1_.jpg",
    },
  ]);

  const City = [
    { name: "Hà Nội", id: 1 },
    { name: "Hồ Chí Minh", id: 2 },
    { name: "Cần Thơ", id: 3 },
  ];

  // const [getIdDate, setGetIdDate] = React.useState(1);
  // const [getIdCity, setGetIdCity] = React.useState(1);
  let getIdCity = 1;
  let getIdDate = 1;

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

  const [clickedDate, getclikedDate] = React.useState(1);

  const getDate = (id) => {
    getIdCity = 1;
    getIdDate = id;
    getclikedDate(id);
    getclickedCity(1);
    console.log("getDate " + id);
    loadShowtime();
  };

  const [clickedCity, getclickedCity] = React.useState(1);
  const getShowtime = (id) => {
    getIdCity = id;
    getclickedCity(id);
    console.log("getShowTime " + id);
    loadShowtime();
  };

  const loadShowtime = () => {
    const newList = branch.filter(function (item) {
      return item.idCity === getIdCity && item.idDate === getIdDate;
    });
    setShowTime([...newList]);
  };

  const [buyTicket, setBuyTicket] = React.useState(false);
  const ClickedBuyTicket = () => {
    setBuyTicket(!buyTicket);
  };
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
  }, []);

  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Cinema</Breadcrumb.Item>
      </Breadcrumb>
      <div className="background" >
        
        <div className="container" >
        <h1 className="text-3xl text-white text-center">DANH SÁCH RẠP</h1>
        <div className="font-bold flex flex-wrap gap-y-8 justify-center align-center p-[24px] min-h-[70px] ">
          {provinces &&
            provinces.map((province) => (
              <button
                onClick={() => getProvinceById(province._id)}
                // type="button"
                key={province._id}
                className="ml-12 border bg-sky-700 hover:bg-sky-300 text-white px-[12px] py-[12px]"
              >
                {province.name}
              </button>
            ))}
        </div>
        <div className="p-[24px] min-h-[360px] grid grid-cols-4 gap-10 px-[150px] text-white ">
          {cinemas &&
            cinemas.map((item) => (
              // <Card
              //   title={item.name}
              //   style={{
              //     width: 300,
              //     height: 200,
              //   }}
              //   onClick={(item) => setButtonClick(item)}
              //   actions={[<FontAwesomeIcon size="lg" icon={faLocationDot} />]}
              // >
              //   <p>{item.address}</p>
              // </Card>
              <div
                className="border-2 border-gray-500 h-[200px]"
                onClick={() => setIsDisplay(true)}
              >
                <div className="border-b-2 border-gray-500 mb-5 text-center py-[12px] font-bold">
                  {item.name}
                </div>
                <div className="mb-5 px-[10px] h-[60px] text-xs">
                  {item.address}
                </div>
                {/* <div className="w-[100px] mx-auto text-center">Xem</div> */}
                <div className="text-center py-[12px] border-t-2 border-gray-500">
                  {/* <FontAwesomeIcon size="lg" icon={faLocationDot} /> */}
                </div>
              </div>
            ))}
        </div>

        {isDisplay && (
          <>
            <h1 className="bg-no-repeat	 bg-[url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg')] text-3xl text-white text-center">
              THEATER
            </h1>
            <div className="p-[24px] min-h-[360px] bg-white my-[50px] mx-[200px]">
              <div className="border-y-4 border-black py-5">
                {Dates.map((item) => (
                  <button
                    onClick={() => getDate(item.id)}
                    type="button"
                    key={item.id}
                    className="ml-5 border bg-sky-700 hover:bg-sky-300 text-white h-[50px] w-[100px] rounded-xl"
                    style={{
                      backgroundColor:
                        clickedDate === item.id ? "#0288D1" : "gray",
                    }}
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
                        className="ml-5 border bg-gray-700 hover:bg-sky-300 text-white h-[50px] w-[100px]"
                      >
                        {temp}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        </div>
      </div>
    </Layout>
  );
};
