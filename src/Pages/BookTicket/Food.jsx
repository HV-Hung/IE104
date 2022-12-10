import React, { useState } from "react";
import { Button } from "./Button";

export const Food = ({ foodItem, setFoods, foods }) => {
  // eslint-disable-next-line eqeqeq
  const foodIndex = foods?.findIndex((food) => food.id == foodItem.id);

  return (
    <div
      key={foodItem.id}
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
          src={foodItem.image}
          alt="day la mot buc anh thuc an"
        />
        <div>
          <Button
            onClick={() => {
              if (foodIndex === -1) {
                return;
              }
              if (foods[foodIndex].quantity === 0) return;
              const newFoods = [...foods];
              newFoods[foodIndex].quantity = newFoods[foodIndex].quantity - 1;

              setFoods(newFoods);
            }}
          />
          <span style={{ fontSize: "25px" }}>
            {foodIndex !== -1 ? foods[foodIndex]?.quantity : 0}
          </span>
          <Button
            isAdd
            onClick={() => {
              if (foodIndex === -1) {
                setFoods([...foods, { id: foodItem.id, quantity: 1 }]);
              } else {
                const newFoods = [...foods];
                newFoods[foodIndex].quantity = newFoods[foodIndex].quantity + 1;

                setFoods(newFoods);
              }
            }}
          />
        </div>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <h2 style={{ fontSize: "1.1rem" }}>{foodItem.title}</h2>
        <ul>
          {foodItem.contents.map((content) => (
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
          Giá:{" "}
          <span style={{ fontSize: "20px", color: "red", fontWeight: "bold" }}>
            {foodItem.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
