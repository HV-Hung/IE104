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
    if (payments === "visa") navigate(`/payment/visa`);
    else if (payments === "momo") {
      navigate(`/payment/momo`);
    }
    navigate(`/payment/momo`);
  };

  let checkAge = false;
  const onOptionChange = (e) => {
    payments = e.target.value;
  };
  const onCheckChange = () => {
    checkAge = !checkAge;
  };

  return (
    <div className="wrap">
      <div className="content-pay">
        <div className="method-pay">
          <h2 className="method-pay-heading">Hình thức thanh toán</h2>
          <div className="method-pay-content">
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
              Tôi đồng ý với điều khoản sử dụng và mua vé cho người có độ tuổi
              phù hợp
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
