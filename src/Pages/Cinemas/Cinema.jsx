// import { Breadcrumb } from "antd";
// import React from "react";
// import { Layout } from "../../Layout/Layout";

// export const Cinema = () => {
//   return (
//     <Layout>
//       <Breadcrumb style={{ marginLeft: "16px" }}>
//         <Breadcrumb.Item>Cinema</Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="p-[24px] min-h-[360px] bg-white m-[24px]">Cinema</div>
//     </Layout>
//   );
// };

// import { Breadcrumb, Button } from "antd";
// import React from "react";
// import { Layout } from "../../Layout/Layout";

// const locationList = [
//   { id: 1, name: "Hồ Chí Minh" },
//   { id: 2, name: "Hà Nội" },
//   { id: 3, name: "Đà Nẵng" },
//   { id: 4, name: "Cần Thơ" },
//   { id: 5, name: "Hải Phòng" },
// ];

// const cinemaList = [
//   {
//     id: 1,
//     name: "BHD Star 3.2",
//     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
//   },
//   {
//     id: 2,
//     name: "BHD Star 3.2",
//     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
//   },
//   {
//     id: 3,
//     name: "BHD Star 3.2",
//     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
//   },
//   {
//     id: 4,
//     name: "BHD Star 3.2",
//     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
//   },
//   {
//     id: 5,
//     name: "BHD Star 3.2",
//     address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
//   },
// ];
// export const Cinema = () => {
//   return (
//     <Layout>
//       <Breadcrumb style={{ marginLeft: "16px" }}>
//         <Breadcrumb.Item>Cinema</Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
//         <div>
//           {locationList.map((item) => (
//             <Button type="primary" key={item.id} className="ml-5 mb-5">
//               {item.name}
//             </Button>
//           ))}
//         </div>
//         <div>
//           {cinemaList.map((item) => (
//             <Button type="primary" key={item.id} className="ml-5 mb-3 w-100">
//               <div>
//                 <div>{item.name}</div>
//                 <div>{item.address}</div>
//               </div>
//             </Button>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

/* New*/
import { Breadcrumb, Button, Card, Tabs, Radio } from "antd";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";

export const Cinema = () => {
  const [cinemaListProvince, setCinemaListProvince] = React.useState([
    { name: "BHD Hà Nội", id: 6, idProvince: 1 },
    { name: "BHD Hà Nội 2", id: 6, idProvince: 1 },
    { name: "BHD Hồ Chí Minh", id: 7, idProvince: 2 },
    { name: "BHD Cần Thơ", id: 8, idProvince: 3 },
    { name: "BHD Hải Phòng", id: 9, idProvince: 4 },
    { name: "BHD Đà Nẵng", id: 10, idProvince: 5 },
  ]);

  const [buttonClick, setButtonClick] = React.useState({
    name: "BHD Hà Nội",
    id: 6,
    idProvince: 1,
    address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
    img: "https://www.cgv.vn/media/site/cache/1/980x415/b58515f018eb873dafa430b6f9ae0c1e/v/i/vivo-2_1.png",
  });

  const [cinemaList, setCinemaList] = React.useState([
    { name: "Toàn Quốc", id: 0 },
    { name: "Hà Nội", id: 1 },
    { name: "TP Hồ Chí Minh", id: 2 },
    { name: "Cần Thơ", id: 3 },
    { name: "Hải Phòng", id: 4 },
    { name: "Đà Nẵng", id: 5 },
  ]);

  function getProvincebyId(id) {
    if (id != 0) {
      const newList = cinema.filter(function (cinema) {
        return cinema.idProvince == id;
      });
      setCinemaListProvince([...newList]);
    } else setCinemaListProvince([...cinema]);
  }
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
      <h1 className="text-3xl text-white text-center">BHD CINEMAS</h1>
      <div className="p-[24px] min-h-[70px] bg-white m-[24px]">
        {cinemaList.map((item) => (
          // <Button
          //   onClick={() => getProvincebyId(item.id)}
          //   type="primary"
          //   key={item.id}
          //   className="ml-5"
          // >
          //   {item.name}
          // </Button>
          <button
            onClick={() => getProvincebyId(item.id)}
            type="button"
            key={item.id}
            className="ml-5 border bg-sky-700 hover:bg-sky-300 text-white "
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px] grid grid-cols-4 gap-6">
        {cinemaListProvince.map((item) => (
          // <Button type="primary" key={item.id} className="ml-5 mb-3">
          //   <div>
          //     <div>{item.name}</div>
          //     <div>{item.address}</div>
          //   </div>
          // </Button>

          <Card
            title={item.name}
            extra={<a href="#">Xem</a>}
            style={{
              width: 300,
              height: 200,
            }}
            onClick={(item) => setButtonClick(item)}
          >
            <p>{item.address}</p>
          </Card>
          // <div className="border">
          //   <div className="mb-5">{item.name}</div>
          //   <div className="mb-5">{item.address}</div>
          //   <div className="border w-[100px] mx-auto text-center">Xem</div>
          // </div>
        ))}
      </div>

      <div className="p-[24px] min-h-[360px] bg-white m-[24px] grid grid-cols-4 gap-6">
        <h3 className="text-3xl text-center">THEATER</h3>

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
