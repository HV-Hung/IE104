import React from "react";
import { useState } from "react";

export const FoodItem = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div
      key={props.foodItem.id}
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
          src={props.foodItem.image}
          alt="day la mot buc anh thuc an"
        />
        <div>
          <div>
            <button
              style={{
                fontSize: "20px",
                backgroundColor: "#90A5E8",
                border: "none",
                color: "white",
                padding: "0px 15px",
                margin: "35px 0px 5px 30px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "8px",
              }}
              onClick={() => {
                console.log(count);
                if (count === 0) {
                  return;
                }
                setCount(count - 1);
                props.getTotal(-props.foodItem.price);
              }}
            >
              -
            </button>
            <span style={{ fontSize: "25px" }}>{count}</span>
            <button
              style={{
                fontSize: "20px",
                backgroundColor: "#90A5E8",
                border: "none",
                color: "white",
                padding: "0px 15px",
                margin: "35px 0px 5px 0px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "8px",
              }}
              onClick={() => {
                setCount(count + 1);
                props.getTotal(props.foodItem.price);
                console.log(count);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <h2 style={{ fontSize: "1.1rem" }}>{props.foodItem.title}</h2>
        <ul>
          {props.foodItem.contents.map((content) => (
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
          Giá:
          <span style={{ fontSize: "25px", color: "red", fontWeight: "bold" }}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.foodItem.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
