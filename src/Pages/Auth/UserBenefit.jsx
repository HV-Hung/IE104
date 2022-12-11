import React from "react";
import "./Register.css";
const UserBenefit = () => {
  const [change, setChange] = React.useState(1);
  return (
    <div id="processing" className="processing control ">
      <nav>
        <div role={"tablist"} className="nav-tabs" id="nav-tab">
          <a onClick={() => setChange(1)} className={`nav-item ${change === 1 && "active"}`} role={"tab"} href="#">
            <span>Mới</span>
          </a>
          <a onClick={() => setChange(2)} className={`nav-item ${change === 2 && "active"}`} role={"tab"} href="#">
            Đồng
          </a>
          <a onClick={() => setChange(3)} className={`nav-item ${change === 3 && "active"}`} role={"tab"} href="#">
            Bạc
          </a>
          <a onClick={() => setChange(4)} className={`nav-item ${change === 4 && "active"}`} role={"tab"} href="#">
            Vàng
          </a>
          <a onClick={() => setChange(5)} className={`nav-item ${change === 5 && "active"}`} role={"tab"} href="#">
            Kim Cương
          </a>
        </div>
      </nav>

      <div className="tab-content" id="nav-content">
        {change === 1 && (<div id="nav-1" role={"tabpanel"} className="tab-pane">
          <div className="cover-all-benefit row">
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png"
                  alt=""
                />
                <span>Miễn phí upsize cho đơn đầu tiên</span>
              </div>
            </div>
          </div>
        </div>)}

        {change === 2 && (<div id="nav-2" role={"tabpanel"} className="tab-pane">
          <div className="cover-all-benefit">
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png"
                  alt=""
                />
                <span>Tặng 01 phần bánh sinh nhật</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/879_v5Membership2snack.png"
                  alt=""
                />
                <span>Miễn phí 01 phần Snack cho đơn hàng trên 100,000đ</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png"
                  alt=""
                />
                <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
              </div>
            </div>
          </div>
        </div>)}

        {change === 3 && (<div id="nav-3" role={"tabpanel"} className="tab-pane ">
          <div className="cover-all-benefit">
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png"
                  alt=""
                />
                <span>Tặng 01 phần bánh sinh nhật</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png"
                  alt=""
                />
                <span>Ưu đãi Mua 2 tặng 1</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png"
                  alt=""
                />
                <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
              </div>
            </div>
          </div>
        </div>)}

        {change === 4 && (<div id="nav-4" role={"tabpanel"} className="tab-pane ">
          <div className="cover-all-benefit">
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png"
                  alt=""
                />
                <span>Tặng 01 phần bánh sinh nhật</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png"
                  alt=""
                />
                <span>Miễn phí 1 phần nước Cà phê / Trà</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png"
                  alt=""
                />
                <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
              </div>
            </div>
          </div>
        </div>)}

        {change === 5 && (<div id="nav-5" role={"tabpanel"} className="tab-pane ">
          <div className="cover-all-benefit">
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/876_v5Membership2bean.png"
                  alt=""
                />
                <span>Được nhân 1.5 BEAN tích lũy</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png"
                  alt=""
                />
                <span>Tặng 01 phần bánh sinh nhật</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png"
                  alt=""
                />
                <span>Miễn phí 01 phần nước bất kì</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png"
                  alt=""
                />
                <span>
                  Nhận riêng Ưu đãi từ The Coffee House và đối tác khác
                </span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/880_v5Membership2star.png"
                  alt=""
                />
                <span>Cơ hội trải nghiệm & hưởng đặc quyền đầu tiên</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
                <img
                  src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png"
                  alt=""
                />
                <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default UserBenefit;
