import React from "react";
import { Layout } from "../../Layout/Layout";
import Barcode from "react-barcode";
import "./Profile.css";
import UserInfo from "./UserInfo";
import UserBenefit from "./UserBenefit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClockRotateLeft, faGift, faCircle } from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
  const [tab, setTab] = React.useState(1);
  console.log(tab);
  return (
    <Layout>
      <div className="profile-container ">
        <div className="column-left">
          <div className="user-info-card">
            <div className="point">
              {/* <img className="point-icon" src="https://order.thecoffeehouse.com/_nuxt/img/Leaves.5c9ad83.svg" alt="" /> */}
              <span>Tích điểm</span>
            </div>
            <div className="user-info-card-header">
              <span>Nguyễn Phi Long</span>
              
            </div>
            <div className="user-card-barcode flex flex-col">
              <Barcode className="barcode" displayValue={false}  format="CODE128" value="0393277584"  width='8px' height='180px'/>
              <span className="font-bold mt-[5px] text-[20px]">0393277584</span>
            </div>
          </div>

          <div className="user-info-detail">
            <div className="user-rank">
              <span>BẠC</span>
              <span>VÀNG</span>
              <span>KIM CƯƠNG</span>
            </div>

            <div className="user-progress-bar">
              <div className="dot-beign"></div>
              <FontAwesomeIcon className="absolute text-[20px] text-white left-[0%]" icon={faCircle} />
              <div className="dot-end"></div>
            </div>

            <p className="flex flex-row ml-[10px] mr-[10px] text-[24px] my-[20px] justify-between">
             <span>Tổng chi tiêu</span>
             <span className="font-bold">80.000.000 VNĐ</span>
            </p>
            
          </div>

          <div className="user-menu">
            <ul className="user-list ">
              <li
                onClick={() => setTab(1)}
                className={`user-item ${tab === 1 && "active"}`}
              >
                <FontAwesomeIcon className="text-[28px]" icon={faUser} />
                <span>Thông tin tài khoản</span>
              </li>
              
              <li
                onClick={() => setTab(2)}
                className={`user-item ${tab === 2 && "active"}`}
              >
                <FontAwesomeIcon className="text-[28px]" icon={faGift} />
                <span>Quyền lợi thành viên</span>
              </li>
              <li
                onClick={() => setTab(3)}
                className={`user-item ${tab === 3 && "active"}`}
              >
                <FontAwesomeIcon className="text-[28px]" icon={faClockRotateLeft} />
                <span>Lịch sử đặt vé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="column-main">
          {tab === 1 && <UserInfo />}
          

          {tab === 2 && <UserBenefit />}
          {tab === 3 && (<div id="card-product-note-item" className="card-product-note-item control">
            <input type="text" name="" id="" />
          </div>)}
          </div>
        </div>
     
    </Layout>
  );
};
