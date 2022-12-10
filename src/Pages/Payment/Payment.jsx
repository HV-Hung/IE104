import React from "react";
import { Layout } from "../../Layout/Layout";
import "../Payment/Payment.css";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();
  let payments = "Hi";
  const pay = () => {
    if (payments === "Hi") {
      alert("Vui lòng chọn hình thức thanh toán");
      return;
    }
    if (!checkAge) {
      alert("Vui lòng đồng ý với điều khoản!");
      return;
    }
    if (payments === "Visa") navigate(`/payment/visa`);
    else navigate(`/payment/momo`);
  };

  let checkAge = false;
  const onOptionChange = (e) => {
    payments = e.target.value;
  };
  const onCheckChange = () => {
    checkAge = !checkAge;
  };

  return (
    <Layout>
      <div className="heading">
        <h1 className="header">THANH TOÁN</h1>
      </div>

      <div className="wrap">
        <div className="container">
          <div className="content-pay">
            <div className="method-pay">
              <h2 className="method-pay-heading">Hình thức thanh toán</h2>
              <div className="method-pay-content">
                <div className="method-pay-item">
                  <input
                    name="method-pay"
                    type="radio"
                    value="atm"
                    id="atm-radio"
                    onChange={onOptionChange}
                  />
                  <label for="atm-radio">
                    <img
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/atm_icon.png"
                      alt="Thẻ quốc tế"
                    />
                    AMT card (Thẻ nội địa)
                  </label>
                </div>

                <div className="method-pay-item">
                  <input
                    name="method-pay"
                    type="radio"
                    value="visa"
                    id="visa-radio"
                    onChange={onOptionChange}
                  />
                  <label for="visa-radio">
                    <img
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/visa-mastercard-icon.png"
                      alt="ATM"
                    />
                    Thẻ quốc tế (Visa, Master, Amex, JCB)
                  </label>
                </div>

                <div className="method-pay-item">
                  <input
                    name="method-pay"
                    type="radio"
                    value="momo"
                    id="momo-radio"
                    onChange={onOptionChange}
                  />
                  <label for="momo-radio">
                    <img
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/momo_icon.png"
                      alt="MoMo"
                    />
                    Ví MoMo
                  </label>
                </div>

                <div className="method-pay-item">
                  <input
                    name="method-pay"
                    type="radio"
                    value="zalopay"
                    id="zalopay-radio"
                    onChange={onOptionChange}
                  />
                  <label for="zalopay-radio">
                    <img
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/icon_zlp_1k.png"
                      alt="ZaloPay"
                    />
                    ZaloPay
                  </label>
                </div>

                <div className="method-pay-item">
                  <input
                    name="method-pay"
                    type="radio"
                    value="shopeepay"
                    id="shopeepay-radio"
                    onChange={onOptionChange}
                  />
                  <label for="shopeepay-radio">
                    <img
                      src="https://www.cgv.vn/media/catalog/product/placeholder/default/sppay.png"
                      alt="ShopeePay"
                    />
                    ShopeePay
                  </label>
                </div>
              </div>
              <div className="method-pay-check">
                <input
                  type="checkbox"
                  name="rule"
                  id="rule"
                  value="yes"
                  onChange={onCheckChange}
                />
                <label for="rule">
                  Tôi đồng ý với điều khoản sử dụng và mua vé cho người có độ
                  tuổi phù hợp
                </label>
              </div>
            </div>

            <div className="total-pay">
              <div className="pay-item">
                <p>Tổng cộng</p>
                <p>250.000,00 đ</p>
              </div>
              <div className="pay-item">
                <p>Khuyến mãi</p>
                <p>0,00 đ</p>
              </div>
              <div className="pay-item pay-item-total">
                <p>Tổng số tiền thanh toán</p>
                <div className="pay-content">
                  <span>Thẻ quốc tế (Visa, Master, Amex, JCB)</span>
                  <span>250.000,00 đ</span>
                </div>
                <p>250.000,00 đ</p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              columnGap: "17px",
              gridTemplateRows: "4 1fr",
              gridTemplateColumns: "120px 120px 1.7fr 0.75fr 1fr 1fr 1fr 120px",
              margin: "auto",
              marginTop: "80px",

              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              color: "white",
            }}
            className=" text-[15px] h-[200px] w-[70vw] col-start-1 col-end-3 row-start-4 row-end-5 self-start footer rounded-xl"
          >
            <button className="h-[100px] w-[100px] bg-amber-900  rounded-[20px] col-start-1 col-end-2 row-start-1 row-end-6 justify-self-center self-center">
              PREVIOUS
            </button>

            <img
              className="col-[2_/_3] row-[1_/_6] justify-self-center self-center rounded-2xl"
              src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_adam_4_1.jpg"
              alt="hinh anh film"
            />

            <div className="col-start-3 col-end-4 row-start-1 row-end-2 justify-self-left self-center">
              {/* Hiển thị tên phim */}
              BLACK ADAM
            </div>
            <div className="col-start-3 col-end-4 row-start-2 row-end-3 justify-self-left self-center">
              {/* Hiển thị loại phim */}
              2D
            </div>

            <div className="col-start-3 col-end-4 row-start-3 row-end-4 justify-self-left self-center ">
              {/* Hiển thị độ tuổi được xem phim */}
              C13
            </div>

            <div className="col-[4_/_5] row-[1_/_2] justify-self-start self-center">
              Rạp:
            </div>
            <div className="col-[4_/_5] row-[2_/_3] justify-self-start self-center">
              Suất chiếu:
            </div>
            <div className="col-[4_/_5] row-[3_/_4] justify-self-start self-center ">
              Phòng chiếu:
            </div>
            <div className="col-[4_/_5] row-[4_/_5] justify-self-start self-center">
              Ghế:
            </div>

            <div className="col-[5_/_6] row-[1_/_2] justify-self-start  self-center font-bold">
              {/* Hiển thị rạp chiếu */}
              CGV HÙNG VƯƠNG
            </div>
            <div className="col-[5_/_6] row-[2_/_3] justify-self-start self-center font-bold">
              {/* Hiển thị ngày giờ phim chiếu */}
              <p>11:00</p>
              <p>26/11/2022</p>
            </div>
            <div className="col-[5_/_6] row-[3_/_4] justify-self-start self-center text-center font-bold">
              {/* Hiển thị phòng chiếu phim được chọn */}
              A2
            </div>
            <div className="col-[5_/_6] row-[4_/_5] justify-self-start self-center font-bold">
              {/* Hiển thị ghế được chọn */}
              G14, G15
            </div>

            <div className="col-[6_/_7] row-[1_/_2] justify-self-end self-center">
              Vé phim:
            </div>
            <div className="col-[6_/_7] row-[2_/_3] justify-self-end self-center">
              Combo:
            </div>
            <div className="col-[6_/_7] row-[3_/_4] justify-self-end self-center text-center">
              Tổng:
            </div>

            <div className="col-[7_/_8] row-[1_/_2] justify-self-start self-center font-bold">
              200.000đ
            </div>
            <div className="col-[7_/_8] row-[2_/_3] justify-self-start self-center font-bold">
              150.000đ
            </div>
            <div className="col-[7_/_8] row-[3_/_4] justify-self-start self-center text-center font-bold">
              150.00đ
            </div>

            <button
              className="h-[100px] w-[100px] bg-orange-400 rounded-[20px] col-start-8 col-end-9 row-start-1 row-end-5 justify-self-center self-center"
              onClick={pay}
            >
              PAYMENT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
