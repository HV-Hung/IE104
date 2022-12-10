import React from "react";

export const Button = ({ isAdd, onClick }) => {
  return (
    <button
      style={{
        fontSize: "20px",
        backgroundColor: "#90A5E8",
        border: "none",
        color: "white",
        padding: "0px 15px",
        margin: isAdd ? "35px 0px 5px 0px" : "35px 0px 5px 30px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        borderRadius: "8px",
      }}
      onClick={() => onClick()}
    >
      {isAdd ? "+" : "-"}
    </button>
  );
};
