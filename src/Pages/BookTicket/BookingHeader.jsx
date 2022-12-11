import React from "react";

export const BookingHeader = ({ showtime, step }) => {
  const date = new Date(showtime?.showtime.date);
  const formatDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return (
    <div className="mb-10">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            height: "7px",
            width: "30vw",
            margin: "10px",
            backgroundColor: "rgb(34 211 238)",
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
            color: "#0c468a",
          }}
        >
          BOOKING ONLINE
        </span>
        <div
          style={{
            display: "inline-block",
            height: "7px",
            width: "30vw",
            margin: "10px",
            backgroundColor: "rgb(34 211 238)",
          }}
        ></div>
      </div>
      <div className="mx-[100px] text-[20px] font-bold mb-[20px]">
        <span>
          {`${showtime?.cinema.name} | Phòng ${
            showtime?.showtime.roomId.name
          } | Số ghế (${240 - showtime?.showtime.tickets.length}/240)`}
          <br/>
        </span>
        <span>
          {formatDate} {showtime?.showtime.time} - {" "}
          {showtime?.showtime.time_end}
        </span>
      </div>
      <hr className="mx-[80px] border-cyan-400"></hr>
      <div className="text-center text-[20px] font-bold my-[5px]">
        {step === 1 ? "Lựa chọn ghế ngồi" : "Mua bắp nước"}
      </div>
      <hr className="mx-[80px] border-cyan-400"></hr>
    </div>
  );
};
