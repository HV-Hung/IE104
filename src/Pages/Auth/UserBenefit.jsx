import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faTicket, faGem } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
const UserBenefit = () => {
  const [change, setChange] = React.useState(1);
  return (
    <div id="processing" className="processing control ">
      <nav>
        <div role={"tablist"} className="nav-tabs font-bold text-[24px]" id="nav-tab">
          
          
          <a onClick={() => setChange(1)} className={`nav-item ${change === 1 && "active"}`} role={"tab"} href="#">
            Bạc
          </a>
          <a onClick={() => setChange(2)} className={`nav-item ${change === 2 && "active"}`} role={"tab"} href="#">
            Vàng
          </a>
          <a onClick={() => setChange(3)} className={`nav-item ${change === 3 && "active"}`} role={"tab"} href="#">
            Kim Cương
          </a>
        </div>
      </nav>

      <div className="tab-content" id="nav-content">
        

        

        {change === 1 && (<div id="nav-3" role={"tabpanel"} className="tab-pane ">
          <div className="cover-all-benefit">
            <div className="all-benefit">
              <div className="cover-image">
              <FontAwesomeIcon className="text-[50px] mb-[20px] blue-color" icon={faCakeCandles} />
                <span>Tặng 01 phần bánh sinh nhật tại rạp</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
              <FontAwesomeIcon className="text-[50px] mb-[20px] blue-color" icon={faTicket} />
                <span>Ưu đãi Mua 2 tặng 1</span>
              </div>
            </div>
            
          </div>
        </div>)}

        {change === 2 && (<div id="nav-4" role={"tabpanel"} className="tab-pane ">
        <div className="cover-all-benefit">
            <div className="all-benefit">
              <div className="cover-image">
              <FontAwesomeIcon className="text-[50px] mb-[20px] blue-color" icon={faCakeCandles} />
                <span>Tặng 01 phần bánh sinh nhật tại rạp</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
              <FontAwesomeIcon className="text-[50px] mb-[20px] blue-color" icon={faTicket} />
                <span>Nhận 5 vé xem phim miễn phí</span>
              </div>
            </div>
            
          </div>
        </div>)}

        {change === 3 && (<div id="nav-5" role={"tabpanel"} className="tab-pane ">
        <div className="cover-all-benefit">
            <div className="all-benefit">
              <div className="cover-image">
              <FontAwesomeIcon className="text-[50px] mb-[20px] blue-color" icon={faCakeCandles} />
                <span>Tặng 01 phần bánh sinh nhật tại rạp</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
              <FontAwesomeIcon className="text-[50px] mb-[20px] blue-color" icon={faTicket} />
                <span>Nhận 10 vé xem phim miễn phí</span>
              </div>
            </div>
            <div className="all-benefit">
              <div className="cover-image">
              <FontAwesomeIcon className="text-[50px] mb-[20px] blue-color" icon={faGem} />
                <span>Phòng chờ riêng cho thành viên kim cương</span>
              </div>
            </div>
            
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default UserBenefit;
