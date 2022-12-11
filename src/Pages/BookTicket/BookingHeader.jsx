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
            backgroundColor: "#31D7A9",
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
            color: "#31D7A9",
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
            backgroundColor: "#31D7A9",
          }}
        ></div>
      </div>
      <div style={{ margin: "10px" }}>
        <span>
          {`${showtime?.cinema.name} | Phòng ${
            showtime?.showtime.roomId.name
          } | Số ghế (${240 - showtime?.showtime.tickets.length}/240)`}
          <br />
        </span>
        <span>
          {formatDate} {showtime?.showtime.time} ~ {formatDate}{" "}
          {showtime?.showtime.time_end}
        </span>
      </div>
      <hr></hr>
      <div style={{ textAlign: "center", fontSize: "20px" }}>
        {step === 1 ? "Đặt ghế" : "Bắp / Nước"}
      </div>
      <hr></hr>
    </div>
  );
};
