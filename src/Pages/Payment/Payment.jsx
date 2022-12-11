import React from "react";
import "../Payment/Payment.css";
import { Checkbox } from "antd";

export const Payment = ({ setPayment, setIsConfirm, isConfirm }) => {
  const onOptionChange = (e) => {
    setPayment(e.target.value);
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
            <Checkbox
              checked={isConfirm}
              onChange={() => setIsConfirm(!isConfirm)}
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
