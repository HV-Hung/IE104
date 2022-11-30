import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import Ticket from "./Ticket";

//bookticket/food

const foodItems = [
  {
    id: 1,
    image:
      "https://www.tiendauroi.com/wp-content/uploads/2019/06/ca44264d97633d40d8eaea153208a50d54362f7c.jpeg",
    title: "Bắp nước size nhỏ",
    contents: ["Không thể đổi vị", "Nhiều vị lựa chọn", "Mua 3 tặng 1"],
    price: "100.000vnd",
    quantity: 0,
  },
  {
    id: 2,
    image:
      "https://www.tiendauroi.com/wp-content/uploads/2019/06/ca44264d97633d40d8eaea153208a50d54362f7c.jpeg",
    title: "Bắp nước size lớn",
    contents: ["Không thể đổi vị", "Nhiều vị lựa chọn", "Mua 3 tặng 1"],
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
    const { id, image, title, contents, price, quantity } = this.props.foodItem;
    return (
      <div
        key={id}
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
          src={image}
          alt="day la mot buc anh thuc an"
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem" }}>{title}</h2>
          <ul>
            {contents.map((content) => (
              <li style={{ marginLeft: "20px" }}>{content}</li>
            ))}
          </ul>
          <h3 style={{ color: "red", fontSize: "1.5rem" }}>{price}</h3>
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
          {/* {foodItems.map((item) => (
            //console.log(item.id)
            <FoodItem foodItem={foodItems[0]}></FoodItem>
          ))} */}
          
        </div>
        <Ticket></Ticket>
      </div>
    </Layout>
  );
};
