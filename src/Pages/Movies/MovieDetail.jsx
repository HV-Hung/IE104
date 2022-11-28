import { Breadcrumb, Button } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";



const Dates = [];
for (let i = 0; i <= 2; i++) {
  const toDate = new Date();
  const temp = new Date();
  temp.setDate(toDate.getDate() + i);
  const temp2 = (temp.getDay() !== 0 ? "T" + (1 + temp.getDay()) : "CN") + ", " + temp.getDate() + "/" + temp.getMonth();
  Dates.push(
    {
      time: temp2,
      id: i + 1
    }
  );
}



const branch = [
  {
    name: "Hà Nội 1",
    id: 1,
    idCity: 1,
    idDate: 1,
    time: ['9h30 AM', '10h AM', '11h30 AM', '1h PM']
  },

  {
    name: "Hà Nội 1",
    id: 2,
    idCity: 1,
    idDate: 2,
    time: ['9h AM', '10h30 AM', '11h AM', '1h30 PM']
  },

  {
    name: "Hà Nội 1",
    id: 3,
    idCity: 1,
    idDate: 3,
    time: ['11h15 AM', '4h30 PM']
  },

  {
    name: "Hà Nội 2",
    id: 4,
    idCity: 1,
    idDate: 1,
    time: ['9h30 AM', '10h AM', '11h30 AM', '1h PM']
  },

  {
    name: "Hà Nội 2",
    id: 5,
    idCity: 1,
    idDate: 2,
    time: ['9h AM', '10h30 AM', '11h AM', '1h30 PM']
  },

  {
    name: "Hà Nội 2",
    id: 6,
    idCity: 1,
    idDate: 3,
    time: ['11h15 AM', '4h30 PM']
  },

  {
    name: "HCM 1",
    id: 7,
    idCity: 2,
    idDate: 1,
    time: ['9h30 AM', '10h AM', '11h30 AM', '1h PM']
  },

  {
    name: "HCM 1",
    id: 8,
    idCity: 2,
    idDate: 2,
    time: ['9h AM', '10h30 AM', '11h AM', '1h30 PM']
  },

  {
    name: "HCM 1",
    id: 9,
    idCity: 2,
    idDate: 3,
    time: ['11h15 AM', '4h30 PM']
  },

  {
    name: "HCM 2",
    id: 10,
    idCity: 2,
    idDate: 1,
    time: ['9h30 AM', '10h AM', '11h30 AM', '1h PM']
  },

  {
    name: "HCM 2",
    id: 11,
    idCity: 2,
    idDate: 2,
    time: ['9h AM', '10h30 AM', '11h AM', '1h30 PM']
  },

  {
    name: "HCM 2",
    id: 12,
    idCity: 2,
    idDate: 3,
    time: ['11h15 AM', '4h30 PM']
  },

]


export const MovieDetail = () => {


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
      time: ['9h30 AM', '10h AM', '11h30 AM', '1h PM']
    },
    {
      name: "Hà Nội 2",
      id: 4,
      idCity: 1,
      idDate: 1,
      time: ['9h30 AM', '10h AM', '11h30 AM', '1h PM']
    },
  ])

  const getDate = (id) => {
    getIdCity = 1;
    getIdDate = id;
    console.log('getDate ' + id);
    loadShowtime();
  }



  const getShowtime = (id) => {
    getIdCity = id;
    console.log('getShowTime ' + id);
    loadShowtime();
  }

  const loadShowtime = () => {
    const newList = branch.filter(function (item) {
      return item.idCity === getIdCity && item.idDate === getIdDate;
    });
    setShowTime([...newList]);
  }

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
          Trang chủ Phim Đang chiếu Khí con lon ton thành phố
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="pt-[20px] h-[90px] w-[1228px] mx-auto flex justify-between">
        <div className="text-[40px] text-white font-semibold">Nội dung</div>
      </div>
      <div className="h-[2px] w-[1228px] mx-auto bg-white mb-[15px]"></div>

      <div className="max-h-[900px] w-[1228px] mx-auto flex flex-start">
        <img
          className="h-[360px] pr-[15px]"
          src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/k/c/kclttg_-_main_poster_web_.jpg"
          alt=""
        />
        <div className="h-[360px] flex-1 ml-[15px]">
          <div className="text-[24px] py-[10px] font-semibold border-b-2 border-gray-500 text-white">
            KHỈ CON LON TON THẾ GIỚI
          </div>
          <div className="mt-[10px]">
            <div className="text-[15px] leading-[25px] text-white">
              Đạo diễn: Samuel Tourneux
            </div>
            <div className="text-[15px] leading-[25px] text-white">
              Diễn viên: quần chúng nhân dân
            </div>
            <div className="text-[15px] leading-[25px] text-white">
              Thể loại: hoạt hình
            </div>
            <div className="text-[15px] leading-[25px] text-white">
              Khởi chiếu: 11/11/2022
            </div>
            <div className="text-[15px] leading-[25px] text-white">
              Thời lượng: 82 phút
            </div>
            <div className="text-[15px] leading-[25px] text-white">
              Ngôn ngữ: Lồng tiếng Việt
            </div>
            <div className="text-[15px] leading-[25px] text-white">
              Phân loại: Phim dành cho mọi đối tượng
            </div>
          </div>
          <div className="h-[50px] w-[50px] bg-green-500 mt-[10px] text-center text-[30px] font-bold text-white">P</div>
          <div className="flex flex-start mt-[23px]">
            <Button type="primary mr-[20px]">Like</Button>
            <Button type="primary">Mua vé</Button>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-[20px] py-[10px] font-bold">CHI TIẾT</div>
      <div className="max-h-[100px]  w-[1228px] mx-auto text-[15px] text-white mb-[20px] leading-[25px]">
        Khỉ Con luôn khát khao được chu du năm châu bốn bể và khám phá thế giới
        rộng lớn nhiệm màu. Nhưng vì không muốn con trai đối mặt với bất kỳ nguy
        hiểm nào, mẹ Khỉ Con không cho phép cậu thực hiện ước mơ đó. Một ngày
        nọ, nhà thám hiểm Ếch Bảnh ghé qua thị trấn nơi Khỉ Con đang sinh sống
        và cá cược với những cư dân nơi đây rằng mình có thể đi vòng quanh thế
        giới chỉ trong vòng 80 ngày. Một cách tình cờ, Khỉ Con trở thành người
        bạn đồng hành của Ếch Bảnh, cả hai đã cùng bắt đầu một cuộc phiêu lưu
        đầy bất ngờ nhưng cũng không kém phần thú vị.
      </div>

      <div className="p-[24px] min-h-[360px] bg-white my-[50px] mx-[200px]">
        <div className="border-y-4 border-black py-5">

          {Dates.map((item) => (
            <button
              onClick={() => getDate(item.id)}
              type="button"
              key={item.id}
              className="ml-5 border bg-sky-700 hover:bg-sky-300 text-white h-[50px] w-[100px] rounded-xl"
            >
              {item.time}
            </button>

          ))}
        </div>

        <div className="py-5">

          {City.map((item) => (
            <button
              onClick={() => getShowtime(item.id)}
              type="button"
              key={item.id}
              className="ml-5 border bg-sky-700 hover:bg-sky-300 text-white h-[50px] w-[100px] rounded-xl"
            >
              {item.name}
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
    </Layout>
  );
};
