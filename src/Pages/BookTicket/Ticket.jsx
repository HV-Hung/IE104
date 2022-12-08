import React from "react";
import { useState } from "react";
import background from "./img/ticket_bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Ticket = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [totalCombo, setTotalCombo] = useState(0);
  const [film_price, setFilmPrice] = useState(150);
  return (
    <div
      style={{
        display: "grid",
        columnGap: "17px",
        gridTemplateRows: "4 1fr",
        gridTemplateColumns: "100px 110px 1.5fr 0.77fr 1.5fr 1fr 0.75fr 100px",
        margin: "auto",
        marginTop: "80px",
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
      className=" text-[15px] h-[200px] w-[70vw] col-[1_/_3] row-[4_/_5] self-start footer rounded-xl"
    >
      <button
        className="h-[80px] w-[80px] bg-amber-900  rounded-[20px] col-[1_/_2] row-[1_/_6] justify-self-center self-center text-xs"
        onClick={() => {
          if (location.pathname === "/payment") navigate(`/bookticket/food`);
          else if (location.pathname === "/bookticket/food")
            navigate(`/bookticket`);
        }}
      >
        <FontAwesomeIcon
          className="mx-[20px] text-4xl"
          icon={faArrowLeft}
        ></FontAwesomeIcon>
        PREVUOUS
      </button>

      <img
        className="col-[2_/_3] row-[1_/_6] justify-self-center self-center rounded-2xl"
        src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_adam_4_1.jpg"
        alt="hinh anh film"
      />

      <div className="col-start-3 col-end-4 row-start-1 row-end-2 justify-self-left self-center">
        {/* Hiển thị tên phim */}
        BLACK ADAM
      </div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 justify-self-left self-center">
        {/* Hiển thị loại phim */}
        2D
      </div>

      <div className="col-[3_/_4] row-[3_/_4] justify-self-left self-center ">
        {/* Hiển thị độ tuổi được xem phim */}
        C13
      </div>

      <div className="col-[4_/_5] row-[1_/_2] justify-self-start self-center">
        Rạp:
      </div>
      <div className="col-[4_/_5] row-[2_/_3] justify-self-start self-center">
        Suất chiếu:
      </div>
      <div className="col-[4_/_5] row-[3_/_4] justify-self-start self-center ">
        Phòng chiếu:
      </div>
      <div className="col-[4_/_5] row-[4_/_5] justify-self-start self-center">
        Ghế:
      </div>

      <div className="col-[5_/_6] row-[1_/_2] justify-self-start  self-center font-bold">
        {/* Hiển thị rạp chiếu */}
        CGV HÙNG VƯƠNG
      </div>
      <div className="col-[5_/_6] row-[2_/_3] justify-self-start self-center font-bold">
        {/* Hiển thị ngày giờ phim chiếu */}
        <p>11:00</p>
        <p>26/11/2022</p>
      </div>
      <div className="col-[5_/_6] row-[3_/_4] justify-self-start self-center text-center font-bold">
        {/* Hiển thị phòng chiếu phim được chọn */}
        A2
      </div>
      <div className="col-[5_/_6] row-[4_/_5] justify-self-start self-center font-bold">
        {/* Hiển thị ghế được chọn */}
        G14, G15
      </div>

      <div className="col-[6_/_7] row-[1_/_2] justify-self-end self-center">
        Vé phim:
      </div>
      <div className="col-[6_/_7] row-[2_/_3] justify-self-end self-center">
        Combo:
      </div>
      <div className="col-[6_/_7] row-[3_/_4] justify-self-end self-center text-center">
        Tổng:
      </div>

      <div className="col-[7_/_8] row-[1_/_2] justify-self-start self-center font-bold">
        {film_price + "đ"}
      </div>
      <div className="col-[7_/_8] row-[2_/_3] justify-self-start self-center font-bold">
        {totalCombo + "đ"}
      </div>
      <div className="col-[7_/_8] row-[3_/_4] justify-self-start self-center font-bold">
        {totalCombo + film_price + "đ"}
      </div>

      <button
        className="h-[80px] w-[80px] bg-[#e71a0f] border-white rounded-[20px] col-[8_/_9] row-[1_/_5] justify-self-center self-center text-xs"
        onClick={() => {
          if (location.pathname === "/bookticket/food") navigate(`/payment`);
          else if (location.pathname === "/bookticket")
            navigate(`/bookticket/food`);
          else if (location.pathname === "/payment") props.onClick();
        }}
      >
        <FontAwesomeIcon
          className="mx-[20px] text-4xl"
          icon={faArrowRight}
        ></FontAwesomeIcon>
        NEXT
      </button>
    </div>
  );
};
