import React from "react";
import { useState } from "react";
import background from "./img/ticket_bg.png";
import { seats as allSeat } from "./seats";
import { foodItems } from "./foodItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faArrowRight,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export const Ticket = ({ seats, showtime, step, setStep, foods }) => {
  const navigate = useNavigate();
  const pickingSeat = allSeat.filter((seat) => seats?.includes(seat.id));
  const pickingSeatCode = pickingSeat?.map((seat) => seat.code);
  const date = new Date(showtime?.showtime.date);
  const formatDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const newFoods = foods?.map((food) => {
    const newFood = foodItems?.filter((foodItem) => food.id === foodItem.id)[0];
    newFood.quantity = food.quantity;
    return newFood;
  });
  const totalFood = newFoods?.reduce((a, b) => a + b.price * b.quantity, 0);
  const totalTicket = pickingSeat?.reduce((a, b) => a + b.price, 0);
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
      className=" text-[15px] h-[200px] w-[75vw] col-[1_/_3] row-[4_/_5] self-start footer rounded-xl"
    >
      {step > 1 && (
        <button
          onClick={() => (step === 3 ? setStep(1) : setStep(step - 1))}
          className="h-[80px] w-[80px]  bg-[#444444] rounded-[20px] col-[1_/_2] row-[1_/_6] justify-self-center self-center text-xs hover:opacity-80 border"
        >
          <FontAwesomeIcon
            className="mx-[20px] text-4xl"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          PREVUOUS
        </button>
      )}

      <img
        className="col-[2_/_3] row-[1_/_6] justify-self-center self-center rounded-2xl"
        src={showtime?.showtime.movieId.image}
        alt="hinh anh film"
      />

      <div className="font-bold col-start-3 col-end-4 row-start-2 row-end-3 justify-self-left self-center">
      {showtime?.showtime.movieId.name}

      </div>

      <div className="col-[3_/_4] row-[3_/_4] justify-self-left self-center ">
        {/* Hiển thị độ tuổi được xem phim */}
        {showtime?.showtime.movieId.rated}
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
        {showtime?.cinema.name}
      </div>
      <div className="col-[5_/_6] row-[2_/_3] justify-self-start self-center font-bold">
        {/* Hiển thị ngày giờ phim chiếu */}
        <p>{showtime?.showtime.time}</p>
        <p>{formatDate}</p>
      </div>
      <div className="col-[5_/_6] row-[3_/_4] justify-self-start self-center text-center font-bold">
        {/* Hiển thị phòng chiếu phim được chọn */}
        A2
      </div>
      <div className="col-[5_/_6] row-[4_/_5] justify-self-start self-center font-bold">
        {/* Hiển thị ghế được chọn */}
        {pickingSeatCode && pickingSeatCode.join(", ")}
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
        {totalTicket?.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </div>
      <div className="col-[7_/_8] row-[2_/_3] justify-self-start self-center font-bold">
        {totalFood?.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </div>
      <div className="col-[7_/_8] row-[3_/_4] justify-self-start self-center text-center font-bold">
        {(totalTicket + totalFood).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </div>

      {seats.length !== 0 && (
        <button
          onClick={() => {
            if (step === 2) {
              setStep(step + 1);
              navigate(`/payment`);
            } else setStep(step + 1);
          }}
          className="h-[80px] w-[80px] bg-[#e71a0f] border-white rounded-[20px] col-[8_/_9] row-[1_/_5] justify-self-center self-center text-xs hover:opacity-80 border"
        >
          <FontAwesomeIcon
            className="mx-[20px] text-4xl"
            icon={step < 3 ? faArrowRight : faCreditCard}
          ></FontAwesomeIcon>
          {step < 3 ? "NEXT" : "PAYMENT"}
        </button>
      )}
    </div>
  );
};
