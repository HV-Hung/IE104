import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import Ticket from "./Ticket";

//bookticket/food

const food_item = [
  {
    id: 1,
    image:
      "https://www.tiendauroi.com/wp-content/uploads/2019/06/ca44264d97633d40d8eaea153208a50d54362f7c.jpeg",
    title: "Bắp nước size nhỏ",
    contents: ["Không thể đổi vị", "nhiều vị lựa chọn"],
    price: "100.000vnd",
    quantity: 0,
  },
  {
    id: 2,
    image:
      "https://www.tiendauroi.com/wp-content/uploads/2019/06/ca44264d97633d40d8eaea153208a50d54362f7c.jpeg",
    contents: "Bắp nước size lớn",
    price: "200.000vnd",
    quantity: 0,
  },
];
class Counter extends React.Component {
  state = { count: 0 };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          <button
            style={{
              fontSize: "20px",
              backgroundColor: "#e7e7e7",
              border: "none",
              padding: "3px 20px",
              marginRight: "15px",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "8px",
            }}
            onClick={this.decrement}
          >
            -
          </button>
          <span style={{ fontSize: "25px" }}>{this.state.count}</span>
          <button
            style={{
              fontSize: "20px",
              backgroundColor: "#e7e7e7",
              border: "none",
              padding: "3px 20px",
              marginLeft: "15px",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "8px",
            }}
            onClick={this.increment}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

class FoodItem extends React.Component {
  render() {
    return (
      <div
        className="p-[12px] min-h-[100px] bg-#e23f m-[12px]"
        style={{ display: "flex" }}
      >
        <img
          style={{
            flex: 1,
            maxHeight: "200px",
            maxWidth: "200px",
            marginRight: "20px",
          }}
          src="https://www.tiendauroi.com/wp-content/uploads/2019/06/ca44264d97633d40d8eaea153208a50d54362f7c.jpeg"
          alt="day la mot buc anh thuc an"
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem" }}>Ten combo</h2>
          <ul>
            <li>content</li>
            <li>content</li>
            <li>content</li>
          </ul>
          <h3 style={{ color: "red", fontSize: "1.5rem" }}>Giá: 100.000đ</h3>
          <Counter></Counter>
        </div>
      </div>
    );
  }
}

export const Food = () => {
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Food</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="p-[24px] min-h-[360px] max-w-[70rem] bg-white m-[24px] "
        style={{ margin: "auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30rem 30rem",
            gap: "5px",
            margin: "auto",
          }}
        >
          <FoodItem></FoodItem>
          <FoodItem></FoodItem>
          <FoodItem></FoodItem>
          <FoodItem></FoodItem>
          <FoodItem></FoodItem>
          <FoodItem></FoodItem>
          <FoodItem></FoodItem>
          <FoodItem></FoodItem>
          <script></script>
        </div>
        <Ticket></Ticket>
      </div>
    </Layout>
  );
};
