import React from "react";

export const BookingHeader = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            height: "7px",
            width: "25rem",
            margin: "10px 10px 10px 10px",
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
            width: "25rem",
            margin: "10px 10px 10px 10px",
            backgroundColor: "#31D7A9",
          }}
        ></div>
      </div>
      <div style={{margin:"10px 10px 10px 10px"}}>
        <span>CGV Hùng Vương Plaza | Cinema 5 | Số ghế (260/260)<br></br></span>
        <span>06/11/2022 11:11 ~ 06/11/2022 13:30</span>
      </div>
      <hr></hr>
      <div style={{ textAlign: "center",fontSize:"20px" }} >Bắp / Nước</div>
      <hr></hr>
    </div>
  );
};
