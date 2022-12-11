import React from "react";
import { Layout } from "../../Layout/Layout";
import Barcode from "react-barcode";
import "./Profile.css";
import UserInfo from "./UserInfo";
import UserBenefit from "./UserBenefit";

export const Profile = () => {
  const [tab, setTab] = React.useState(1);
  console.log(tab);
  return (
    <Layout>
      <div className="container ">
        <div className="column-left">
          <div className="user-info-card">
            <div className="point">
              {/* <img className="point-icon" src="https://order.thecoffeehouse.com/_nuxt/img/Leaves.5c9ad83.svg" alt="" /> */}
              <span>Tích điểm</span>
            </div>
            <div className="user-info-card-header">
              <span>Nguyễn Phi</span>
              <p>0 bean - Mới</p>
            </div>
            <div className="user-card-barcode">
              <Barcode className="barcode" value="M161696901" />
              <img
                className="image"
                src="https://order.thecoffeehouse.com/_nuxt/img/Leaves.5c9ad83.svg"
                alt=""
              />
            </div>
          </div>

          <div className="user-info-detail">
            <div className="user-rank">
              <span>VÀNG</span>
              <span>KIM CƯƠNG</span>
            </div>

            <div className="user-progress-bar">
              <div className="dot-beign"></div>
              <div className="dot"></div>
              <div className="dot-end"></div>
            </div>

            <p className="user-text-bean">
              Còn 100 BEAN nữa bạn sẽ thăng hạng. Đổi quà không ảnh hưởng tới
              việc thăng hạng của bạn Chưa tích điểm
            </p>
          </div>

          <div className="user-menu">
            <ul className="user-list ">
              <li
                onClick={() => setTab(1)}
                className={`user-item ${tab === 1 && "active"}`}
              >
                <img
                  className="icon-user"
                  src="https://order.thecoffeehouse.com/icon/user-icon.svg"
                  alt=""
                />
                <span>Thông tin tài khoản</span>
              </li>
              <li
                onClick={() => setTab(2)}
                className={`user-item ${tab === 2 && "active"}`}
              >
                <img
                  className="icon-user"
                  src="https://order.thecoffeehouse.com/icon/address-book.svg"
                  alt=""
                />
                <span className="user-address">Sổ địa chỉ</span>
              </li>
              <li
                onClick={() => setTab(3)}
                className={`user-item ${tab === 3 && "active"}`}
              >
                <img
                  className="icon-user"
                  src="https://order.thecoffeehouse.com/icon/member-benefit.svg"
                  alt=""
                />
                <span>Quyền lợi thành viên</span>
              </li>
              <li
                onClick={() => setTab(4)}
                className={`user-item ${tab === 4 && "active"}`}
              >
                <img
                  className="icon-user"
                  src="https://order.thecoffeehouse.com/icon/history-order.svg"
                  alt=""
                />
                <span>Lịch sử mua hàng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="column-main">
          {tab === 1 && <UserInfo />}
          {tab === 2 && (
            <div id="address" className="address control">
              <h1>Sổ địa chỉ</h1>
            </div>
          )}
          {tab === 3 && <UserBenefit />}
          <div
            id="card-product-note-item"
            className="card-product-note-item control"
          >
            <input type={"text"}></input>
          </div>
        </div>
      </div>
    </Layout>
  );
};
