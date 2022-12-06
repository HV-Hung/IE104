import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button, Card, Tabs, Radio } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { data } from "autoprefixer";

export const Cinema = () => {
  const [provinces, setProvinces] = React.useState();
  const [cinemas, setCinemas] = React.useState();
  const [cinemaListProvince, setCinemaListProvince] = React.useState([
    {
      name: "BHD Hà Nội",
      id: 6,
      idProvince: 1,
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    },
    {
      name: "BHD Hà Nội 2",
      id: 6,
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
  ]);

  // const [buttonClick, setButtonClick] = React.useState({
  //   name: "BHD Hà Nội",
  //   id: 6,
  //   idProvince: 1,
  //   address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  //   img: "https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/v/i/vivo-2_1.png",
  // });

  // const [cinemaList, setCinemaList] = React.useState([
  //   { name: "Toàn Quốc", id: 0 },
  //   { name: "Hà Nội", id: 1 },
  //   { name: "TP Hồ Chí Minh", id: 2 },
  //   { name: "Cần Thơ", id: 3 },
  //   { name: "Hải Phòng", id: 4 },
  //   { name: "Đà Nẵng", id: 5 },
  // ]);

  React.useEffect(() => {
    fetch("http://localhost:3500/province")
      .then((response) => response.json())
      .then((province) => setProvinces(province));
  }, []);

  function getProvinceById(id) {
    if (id != 0) {
      const newList = cinema.filter(function (cinema) {
        return cinema.idProvince == id;
      });
      setCinemaListProvince([...newList]);
    } else setCinemaListProvince([...cinema]);
  }

  // function getProvinceById(id) {
  //   fetch("http://localhost:3500/province/" + id)
  //     .then((response) => response.json())
  //     .then((province) => setCinemas(province.cinemas));
  // }
  // console.log(cinemas);

  // Initialize data
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

  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Cinema</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-3xl text-white text-center">DANH SÁCH RẠP</h1>
      <div className="flex justify-center align-center p-[24px] min-h-[70px] bg-white m-[24px]">
        {provinces &&
          provinces.map((item) => (
            <button
              onClick={() => getProvinceById(item.id)}
              // type="button"
              key={item.id}
              className="ml-12 border bg-sky-700 hover:bg-sky-300 text-white px-[12px] py-[12px]"
            >
              {item.name}
            </button>
          ))}
      </div>
      <div className="p-[24px] min-h-[360px] bg-white m-[48px] grid grid-cols-4 gap-10 px-[150px]">
        {cinemaListProvince.map((item) => (
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
          <div className="border-2 border-gray-500">
            <div className="border-b-2 border-gray-500 mb-5 text-center py-[12px] font-bold">
              {item.name}
            </div>
            <div className="mb-5 px-[24px]">{item.address}</div>
            {/* <div className="w-[100px] mx-auto text-center">Xem</div> */}
            <div className="text-center py-[12px] border-t-2 border-gray-500">
              <FontAwesomeIcon size="lg" icon={faLocationDot} />
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl text-white text-center">THEATER</h1>

      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
        <Radio.Group
          onChange={handleModeChange}
          value={mode}
          style={{
            marginBottom: 8,
          }}
        ></Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{
            height: 220,
          }}
          items={new Array(30).fill(null).map((_, i) => {
            const id = String(i);
            return {
              label: `Tab-${id}`,
              key: id,
              disabled: i === 28,
              children: `Content of tab ${id}`,
            };
          })}
        />
      </div>
    </Layout>
  );
};
