import React from "react";

export const Seat = ({ status, seat, pickSeat }) => {
  return (
    <div
      style={{
        margin: "5px",
        height: "30px",
        width: seat.type === "Couple" ? "92px" : "37px",
        //status: 0=> null, 1> picking,2>picked
        backgroundColor:
          status === 2
            ? "#B8C4BF"
            : status === 1
            ? "#fc6060"
            : seat.type === "Couple"
            ? "#f7adf2"
            : "#82bdf5",
        border: "1px solid black",
        borderRadius: "10% 10% 100% 100% / 10% 10% 100% 100%",
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={() => pickSeat(seat.id)}
    >
      {seat.code}
    </div>
  );
};
