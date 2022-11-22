
import React from "react";
import { Layout } from "../../Layout/Layout";
import "../Payment/Payment.css"


export const Payment = () => {


  return (
    <Layout>
      <br></br>
      <h1 className="title">THANH TOÁN</h1>
      <br></br>
      <br></br>
      <main className="NoiDung">
        <div>

          <div className="Sale">
            <h2 className="TieuDeH2">⭐Mã giảm giá</h2>
            <input></input>
            <button>Nhập</button>
          </div>


          <div className="HTTT">
            <h2 className="TieuDeH2">Hình thức thanh toán</h2>
            <div>
              <dl>
                <dt>
                  <input name="Pay" type="radio" value="visa" />
                  <label for="visa-radio">
                    <span className="visa logoThanhToan"></span>
                    <span>Thẻ quốc tế</span>
                  </label>
                </dt>
                <dt>
                  <input name="Pay" type="radio" value="Zalo" />
                  <label for="Zalo-radio">
                    <span className="Zalo logoThanhToan"></span>
                    <span>ZaloPay</span>
                  </label>
                </dt>
                <dt>
                  <input name="Pay" type="radio" value="ATM" />
                  <label for="ATM-radio">
                    <span className="ATM logoThanhToan"></span>
                    <span>ATM card</span>
                  </label>
                </dt>
                <input name="Pay" type="radio" value="MoMo" />
                <label for="MoMo-radio">
                  <span className="MoMo logoThanhToan"></span>
                  <span>Ví MoMo</span>
                </label>
              </dl>
            </div>
          </div>

          <div className="checkbox" >
            <input type="checkbox" name="DieuKhoan" value="yes" />Tôi đồng ý với điều khoản sử dụng và mua vé cho người có độ tuổi phù hợp
          </div>
        </div>

        <div>
          <div className="TongCong">
            <h2 className="TieuDeH2">Tổng cộng</h2>
            <div>250.000đ</div>
          </div>
          <div className="TienKhuyeMai">
            <h2 className="TieuDeH2">Khuyến mãi</h2>
            <div>0đ</div>
          </div>
          <div className="TongTien">
            <h2 className="TieuDeH2">Tổng tiền thanh toán</h2>
            <div>250.000đ</div>
          </div>
        </div>


        <div className="footer"></div>
      </main>

    </Layout>
  );
};