import React from "react";
import background from "./img/ticket_bg.png";
import { seats as allSeat } from "./seats";
import { foodItems } from "./foodItems";

export const Ticket = ({ seats, showtime, step, setStep, foods }) => {
  const pickingSeat = allSeat.filter((seat) => seats?.includes(seat.id));
  const pickingSeatCode = pickingSeat?.map((seat) => seat.code);
  const date = new Date(showtime?.showtime.date);
  const formatDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const newFoods = foods.map((food) => {
    const newFood = foodItems.filter((foodItem) => food.id === foodItem.id)[0];
    newFood.quantity = food.quantity;
    return newFood;
  });
  const totalFood = newFoods.reduce((a, b) => a + b.price * b.quantity, 0);
  const totalTicket = pickingSeat.reduce((a, b) => a + b.price, 0);
  return (
    <div
      style={{
        display: "grid",
        columnGap: "17px",
        gridTemplateRows: "4 1fr",
        gridTemplateColumns: "120px 120px 1.7fr 0.75fr 1fr 1fr 1fr 120px",
        margin: "auto",
        marginTop: "80px",
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
      className=" text-[15px] h-[200px] w-[70vw] col-start-1 col-end-3 row-start-4 row-end-5 self-start footer rounded-xl"
    >
      {step > 1 && (
        <button
          onClick={() => setStep(step - 1)}
          className="h-[100px] w-[100px] bg-amber-900  rounded-[20px] col-start-1 col-end-2 row-start-1 row-end-6 justify-self-center self-center"
        >
          PREVUOUS
        </button>
      )}

      <img
        className="col-[2_/_3] row-[1_/_6] justify-self-center self-center rounded-2xl"
        src={showtime?.showtime.movieId.image}
        alt="hinh anh film"
      />

      <div className="col-start-3 col-end-4 row-start-1 row-end-2 justify-self-left self-center">
        {/* Hiển thị tên phim */}
        {showtime?.showtime.movieId.name}
      </div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 justify-self-left self-center">
        {/* Hiển thị loại phim */}
        2D
      </div>

      <div className="col-start-3 col-end-4 row-start-3 row-end-4 justify-self-left self-center ">
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
        {totalTicket.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </div>
      <div className="col-[7_/_8] row-[2_/_3] justify-self-start self-center font-bold">
        {totalFood.toLocaleString("it-IT", {
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

      <button
        onClick={() => setStep(step + 1)}
        className="h-[100px] w-[100px] bg-orange-400 rounded-[20px] col-start-8 col-end-9 row-start-1 row-end-5 justify-self-center self-center"
      >
        PAYMENT
      </button>
    </div>
  );
};
