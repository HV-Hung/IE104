import React from "react";
import background from "./img/ticket_bg.png";

export const Ticket = () => {
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
        color:"white",
      }}
      className=" text-[15px] h-[200px] w-[70vw] col-start-1 col-end-3 row-start-4 row-end-5 self-start footer rounded-xl"
    >
      <button className="h-[100px] w-[100px] bg-amber-900  rounded-[20px] col-start-1 col-end-2 row-start-1 row-end-6 justify-self-center self-center">
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

      <div className="col-start-3 col-end-4 row-start-3 row-end-4 justify-self-left self-center ">
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
        200.000đ
      </div>
      <div className="col-[7_/_8] row-[2_/_3] justify-self-start self-center font-bold">
        150.000đ
      </div>
      <div className="col-[7_/_8] row-[3_/_4] justify-self-start self-center text-center font-bold">
        150.00đ
      </div>

      <button className="h-[100px] w-[100px] bg-orange-400 rounded-[20px] col-start-8 col-end-9 row-start-1 row-end-5 justify-self-center self-center">
        PAYMENT
      </button>
    </div>
  );
};
