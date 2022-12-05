import { Breadcrumb } from "antd";
import React, { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Ticket } from "./Ticket";
import { BookingHeader } from "./BookingHeader";

//bookticket/food

const foodItems = [
  {
    id: 1,
    image:
      "https://www.cgv.vn/media/concession/web/62fe077bd978b_1660815228.png",
    title: "SINGLE BT21 COMBO",
    contents: [
      "1 ly BT21 Back To School 32Oz + 1 nước siêu lớn + 1 bắp 44Oz (tuỳ chọn vị)",
      "Nhận trong ngày xem phim",
      "Mẫu ly phụ thuộc vào số lượng hàng tại rạp",
    ],
    price: "309.000,00đ",
    quantity: 0,
  },
  {
    id: 2,
    image:
      "https://www.cgv.vn/media/concession/web/6364866d90d3f_1667532398.png",
    title: "POWER COMBO",
    contents: [
      "1 ly Avatar + 1 nước siêu lơn + 1 bắp ngọt lớn",
      "Miễn phí đổi ",
      "Mua 3 tặng 1",
    ],
    price: "200.000vnd",
    quantity: 0,
  },
  {
    id: 3,
    image:
      "https://www.cgv.vn/media/concession/web/63648762bc32b_1667532643.png",
    title: "SUPER POWER COMBO",
    contents: [
      "1 ly Avatar + 2 nước siêu lớn + 1 bắp ngọt lớn",
      "Miễn phí đổi vị bắp Phô mai, Caramel",
    ],
    price: "259.000,00đ",
    quantity: 0,
  },
  {
    id: 4,
    image:
      "https://www.cgv.vn/media/concession/web/62c3ee7b85011_1657007740.png",
    title: "SNOOPY SINGLE COMBO",
    contents: [
      "1 ly Snoopy 32Oz (kèm nước) + 1 bắp ngọt lớn",
      "Miễn phí đổi vị bắp Pho mai, Caramel",

      "Mẫu ly phụ thuộc vào số lượng hàng tại rạp",
    ],
    price: "239.000,00đ",
    quantity: 0,
  },
  {
    id: 5,
    image:
      "https://www.cgv.vn/media/concession/web/62c3ef50cb95e_1657007953.png",
    title: "SNOOPY DOUBLE COMBO",
    contents: [
      "2 ly Snoopy 32Oz (kèm nước) + 1 bắp ngọt lớn",
      "Miễn phí đổi vị bắp Phô mai, Caramel",

      "Mẫu ly phụ thuộc vào số lượng hàng tại rạp",
    ],
    price: "409.000,00đ",
    quantity: 0,
  },
  {
    id: 6,
    image:
      "https://www.cgv.vn/media/concession/web/62c3efe0cf615_1657008097.png",
    title: "SNOOPY TRIPLE COMBO",
    contents: [
      "3 ly Snoopy 32Oz (kèm nước) + 1 bắp ngọt lớn",
      "Miễn phí đổi vị bắp Phô mai, Caramel",
      "Mẫu ly phụ thuộc vào số lượng hàng tại rạp",
    ],
    price: "599.000,00đ",
    quantity: 0,
  },
  {
    id: 7,
    image:
      "https://www.cgv.vn/media/concession/web/62fe09d0e267d_1660815825.png",
    title: "BT21 BACK TO SCHOOL",
    contents: [
      "08 ly BT21 Back To School 32Oz",
      "Nhận trong ngày xem phim",
      "Đủ 8 loại nhân vật",
    ],
    price: "2099.000,00đ",
    quantity: 0,
  },
  {
    id: 8,
    image:
      "https://www.cgv.vn/media/concession/web/625f7a6cbe151_1650424429.png",
    title: "MY COMBO",
    contents: [
      "1 bắp lớn + 1 nước siêu lớn",
      "Nhận trong ngày xem phim",
      "Miễn phí đổi vị bắp Caramel",
      "Đổi vị Phô mai phụ thu thêm tiền",
    ],
    price: "83.000,00đ",
    quantity: 0,
  },
  {
    id: 9,
    image:
      "https://www.cgv.vn/media/concession/web/625f7aace684c_1650424493.png",
    title: "CGV COMBO",
    contents: [
      "1 bắp lớn + 2 nước siêu lớn",
      "Nhận trong ngày xem phim",
      "Miễn phí đổi vị bắp Caramel",
      "Đổi vị Phô mai phụ thu thêm tiền",
    ],
    price: "102.000,00đ",
    quantity: 0,
  },
  {
    id: 10,
    image:
      "https://www.cgv.vn/media/concession/web/625f7ac59a3dd_1650424518.png",
    title: "CGV SNACK COMBO",
    contents: [
      "1 bắp lớn + 2 nước siêu lớn + 1 Snack",
      "Nhận trong ngày xem phim",
      "Miễn phí đổi vị bắp Caramel",
      "Đổi vị Phô mai phụ thu thêm tiền",
    ],
    price: "113.000,00đ",
    quantity: 0,
  },
];
const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button
          style={{
            fontSize:"20px",
            backgroundColor: "#90A5E8",
            border: "none",
            color: "white",
            padding: "0px 15px",
            margin: "30px 15px 5px 30px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "8px",
          }}
          onClick={() => {
            if (count === 0) {
              return;
            }
            setCount(--count);
          }}
        >
          -
        </button>
        <span style={{ fontSize: "25px" }}>{count}</span>
        <button
          style={{
            fontSize:"20px",
            backgroundColor: "#90A5E8",
            border: "none",
            color: "white",
            padding: "0px 15px",
            margin: "30px 0px 5px 15px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            borderRadius: "8px",
          }}
          onClick={() => {
            setCount(++count);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

const FoodItem = ({ foodItem }) => {
  return (
    <div
      key={foodItem.id}
      className="p-[12px] min-h-[100px] bg-#e23f m-[12px]"
      style={{ display: "flex" }}
    >
      <div style={{ flex: 1 }}>
        <img
          style={{
            maxHeight: "200px",
            maxWidth: "200px",
            marginRight: "20px",
          }}
          src={foodItem.image}
          alt="day la mot buc anh thuc an"
        />
        <Counter> style={{ marginLeft: "30px" }}</Counter>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <h2 style={{ fontSize: "1.1rem" }}>{foodItem.title}</h2>
        <ul>
          {foodItem.contents.map((content) => (
            <li style={{ marginLeft: "20px", listStyleType: "circle" }}>
              {content}
            </li>
          ))}
        </ul>
        <div
          style={{
            fontSize: "20px",
            position: "absolute",
            bottom: "3px",
          }}
        >
          Giá:{" "}
          <span style={{ fontSize: "25px", color: "red", fontWeight: "bold" }}>
            {foodItem.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Food = () => {
  let [combo_total, setComboTotal] = useState(150.0);

  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Food</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="p-[24px] min-h-[360px] max-w-[90vw] bg-[#F2F7FF] m-[24px] "
        style={{ margin: "auto" }}
      >
        <BookingHeader></BookingHeader>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30rem 30rem",
            gap: "50px",
            width: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {foodItems.map((item) => (
            <FoodItem foodItem={item}></FoodItem>
          ))}
        </div>
        <Ticket total={combo_total}></Ticket>
      </div>
    </Layout>
  );
};
