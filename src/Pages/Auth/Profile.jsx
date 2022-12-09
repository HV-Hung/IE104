import { Breadcrumb } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import Barcode from 'react-barcode';
import "./Profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Profile = () => {
  var Barcode = require('react-barcode');
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      
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
              <img className="image" src="https://order.thecoffeehouse.com/_nuxt/img/Leaves.5c9ad83.svg" alt="" />
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
            Còn 100 BEAN nữa bạn sẽ thăng hạng. Đổi quà không ảnh hưởng tới việc thăng hạng của bạn Chưa tích điểm
            </p>
          </div>

          <div className="user-menu">
            <ul className="user-list ">
              <li className="user-item active">
                <img className="icon-user" src="https://order.thecoffeehouse.com/icon/user-icon.svg" alt="" />
                <span>Thông tin tài khoản</span>
              </li>
              <li  className="user-item">
                <img className="icon-user" src="https://order.thecoffeehouse.com/icon/address-book.svg" alt="" />
                <span className="user-address">Sổ địa chỉ</span>
              </li>
              <li  className="user-item">
                <img className="icon-user" src="https://order.thecoffeehouse.com/icon/member-benefit.svg" alt="" />
                <span>Quyền lợi thành viên</span>
              </li>
              <li className="user-item">
                <img className="icon-user" src="https://order.thecoffeehouse.com/icon/history-order.svg" alt="" />
                <span>Lịch sử mua hàng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="column-main">
          <div id="dashboard" className="dashboard control">
            <div className="page-title">
              <h1>Thông tin tài khoản</h1>
            </div>

            <form action="#" className="form-user">
              <div className="form-group ">
                <label id="user-name" htmlFor="user-name">Tên khách hàng</label>
                <div className="name-input">              
                  
                  <input pattern="[A-Za-z]" required placeholder="Tên" id="first-name" type="text" />
                  <input pattern="[A-Za-z]" required placeholder="Họ" id="last-name" type="text" />
                </div>                
              </div>

              <div className="form-group row">
                <label htmlFor="phone-number">Số điện thoại</label>
                <input disabled className="form-control" required pattern="[0-9]{10,}" type="text" name="user-phone-number" id="phone-number" />
              </div>

              <div className="form-group row">
                <label htmlFor="datapicker">Sinh nhật (Bạn không thể thay đổi sau khi đã lựa chọn)</label>
                <input required type="date" name="date-of-birth" id="datapicker" />
              </div>

              <div className="form-group row">
                <label htmlFor="email">Email</label>
                <input disabled className="form-control"  required type="email" name="email" id="email" />
              </div>

              <div className="form-group column">
                <div className="gender">
                  <input type="radio" name="male-female" id="male" />
                  <label htmlFor="male">Nam</label>
                </div>

                <div className="gender">
                  <input type="radio" name="male-female" id="female" />
                  <label htmlFor="female">Nữ</label>
                </div>
              </div>

              <div className="btn">
                <button className="btn-submit" type="submit">Cập nhật</button>
              </div>
            </form>
            
          </div>

          <div id="address" className="address control not-active">
            <h1>Sổ địa chỉ</h1>
          </div>

          <div id="processing" className="processing control not-active">
                  <nav>
                      <div role={"tablist"} className="nav-tabs" id='nav-tab'>
                          <a role={"tab"} className='nav-item active' href="#"><span>Mới</span></a>
                          <a role={"tab"} className='nav-item' href="#">Đồng</a>
                          <a role={"tab"} className='nav-item' href="#">Bạc</a>
                          <a role={"tab"} className='nav-item' href="#">Vàng</a>
                          <a role={"tab"} className='nav-item' href="#">Kim Cương</a>
                      </div>
                  </nav>

                  <div className="tab-content" id="nav-content">
                      <div id="nav-1" role={"tabpanel"} className="tab-pane">
                          <div className="cover-all-benefit row">
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png" alt="" />
                                      <span>
                                      Miễn phí upsize cho đơn đầu tiên
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div id="nav-2" role={"tabpanel"} className="tab-pane not-active">
                          <div className="cover-all-benefit">
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" alt="" />
                                      <span>
                                      Tặng 01 phần bánh sinh nhật
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/879_v5Membership2snack.png" alt="" />
                                      <span>
                                      Miễn phí 01 phần Snack cho đơn hàng trên 100,000đ
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" alt="" />
                                      <span>
                                      Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div id="nav-3" role={"tabpanel"} className="tab-pane not-active">
                          <div className="cover-all-benefit">
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" alt="" />
                                      <span>
                                      Tặng 01 phần bánh sinh nhật
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png" alt="" />
                                      <span>
                                      Ưu đãi Mua 2 tặng 1
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" alt="" />
                                      <span>
                                      Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div id="nav-4" role={"tabpanel"} className="tab-pane not-active">
                          <div className="cover-all-benefit">
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" alt="" />
                                      <span>
                                      Tặng 01 phần bánh sinh nhật
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png" alt="" />
                                      <span>
                                      Miễn phí 1 phần nước Cà phê / Trà
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" alt="" />
                                      <span>
                                      Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div id="nav-5" role={"tabpanel"} className="tab-pane not-active">
                          <div className="cover-all-benefit">
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/876_v5Membership2bean.png" alt="" />
                                      <span>
                                      Được nhân 1.5 BEAN tích lũy
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" alt="" />
                                      <span>
                                      Tặng 01 phần bánh sinh nhật
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png" alt="" />
                                      <span>
                                      Miễn phí 01 phần nước bất kì
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png" alt="" />
                                      <span>
                                      Nhận riêng Ưu đãi từ The Coffee House và đối tác khác
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/880_v5Membership2star.png" alt="" />
                                      <span>
                                      Cơ hội trải nghiệm & hưởng đặc quyền đầu tiên
                                      </span>
                                  </div>
                              </div>
                              <div className="all-benefit">
                                  <div className="cover-image">
                                      <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" alt="" />
                                      <span>
                                      Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
          </div>

          <div id="card-product-note-item" className="card-product-note-item control not-active">
            <input type={"text"}></input>
            <FontAwesomeIcon icon={['fab', 'google']} />
          </div>
         
        </div>
      </div>
      
    </Layout>
    
  );
  
};

// Navigation body content
const tab = document.querySelectorAll(".user-item");
const tabContent = document.querySelectorAll(".control");

console.log(tab);
console.log(tabContent);

for(let i = 0; i <tab.length; i++){
  tab[i].addEventListener('click', () =>{
    resetClass();
    tab[i].classList.add("active");
    tabContent[i].classList.remove("not-active");
  })
}

function resetClass(){
  for(let j = 0; j < tab.length; j++){
    tab[j].classList.remove("active");
    tabContent[j].classList.add("not-active");
  }
}


// Navigation block content
const navigate = document.querySelectorAll(".nav-item");
const content = document.querySelectorAll(".tab-pane");

console.log(navigate);
console.log(content);

for(let i = 0; i <navigate.length; i++){
  navigate[i].addEventListener('click', () =>{
    deleteClass();
    navigate[i].classList.add("active");
    content[i].classList.remove("not-active");
  })
}

function deleteClass(){
  for(let j = 0; j < navigate.length; j++){
    navigate[j].classList.remove("active");
    content[j].classList.add("not-active");
  }
}


