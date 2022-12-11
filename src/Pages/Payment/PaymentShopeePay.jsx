import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faCreditCard, faBarcode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const PaymentShopeePay = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[900px] mx-[auto] my-[32px] flex">
      <div className="w-[315px] bg-[#ee4d2d] text-[#fff] rounded-[6px]">
        <div className="mx-[16px] my-[24px]">
          <span class="text-[20px] my-[32px]" >Nhà cung cấp CGV</span>
        </div>
        <hr className="mx-[16px]"/>
        <div className="text-[18px] mx-[16px] my-[24px]">
          <FontAwesomeIcon className="mr-[8px] inline-block" icon={faMoneyBill1}></FontAwesomeIcon>
          <span className="">Số tiền 125.000đ</span>
        </div>
        <hr className="mx-[16px]"/>
        <div className="text-[18px] mx-[16px] my-[24px]">
          <FontAwesomeIcon className="mr-[8px] inline-block" icon={faCreditCard}></FontAwesomeIcon>
          <span>Thông tin 088-202212101313-2001</span>
        </div>
        <hr className="mx-[16px]"/>
        <div className="text-[18px] mx-[16px] my-[24px]">
          <FontAwesomeIcon className="mr-[8px] inline-block" icon={faBarcode}></FontAwesomeIcon>
          <span>Đơn hàng 120466494</span>
        </div>
        <hr className="mx-[16px]"/>
        <div className="text-[18px] my-[64px] text-center cursor-pointer " onClick={() => {
            navigate(`/payment`);
          }}>
          <FontAwesomeIcon className="mr-[8px] inline-block" icon={faArrowLeft}></FontAwesomeIcon>
          <span>Quay lại</span>
        </div>
      </div>
      <div className="flex-1 rounded-[6px]">
        <div className="flex justify-between mx-[16px] my-[24px]">
          <img className="w-[64px]" src="https://cdn.mservice.io/static/gcs_partner_m4b/24448-2019-05-31/saHon8l0idgsd6yjSXkb_1559293361228" alt="Logo CGV" />
          <img className="w-[64px]" src="data:image/png;base64,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 nesRlUV48VfKHnlfeFgoQvQr34LA4R/Y749rF8YGjp1AzTevRUX9N6DQYKOiNQz57k+xjinhsrnD 5OoV2uFF5xFdco08WraaqQCRC68k+LkvuLsYN86sfFz2xVWkH7qLwiB7FNhgFxg/kejF3yU4fa7r y6pIEAGc/XvJPvEw6VXL0W37K7FIcTiUwhoxiuCchUS/tKSkx3QMyGIrFcS/cBzyb28kv+lV8pvX oVOJ6jobOCh3MxRWbT2BydOwJ0zueTB6hcfyrnwQhSjCd7eTCm+SIApPkCAKT5AgCk+QIApPkCAK T5AgCk+QIApPkCAKT5AgCk+QIApPkCAKT5AgCk+QIApPkCAKT5AgCk+QIApPkCAKT5AgCk+wgNWm ixC+t94CqucBH2Kw+g+ltW4E1gNjTVcjfGkHMN4COoEFQKvpioTv7ABOh577mg+ecAlwFTDVdIWH Se7Rrg6rgWeA2+jpCPl/czS1wqfEMrIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTRUMTg6 NTk6MTUrMDg6MDBfsG7EAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE0VDE4OjU5OjE1KzA4 OjAwLu3WeAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRF WHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdo dAAxNjLHxW2aAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE2MlQ0PccAAAAZdEVYdFRodW1i OjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYwNzk0MzU1NQxE 2yoAAAASdEVYdFRodW1iOjpTaXplADM3NDdCQqTvNYQAAABGdEVYdFRodW1iOjpVUkkAZmlsZTov Ly9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjA2OTkyOTk1MTU1NjI1OF84MF9bMF30XB3L AAAAAElFTkSuQmCC" alt="Logo Shopee" />
        </div>
        <div className="mx-[16px]">
          <hr />
          <p className="text-[28px] text-[#af206f] text-center py-[32px]" >Quét mã để thanh toán</p>
          <img className="w-[300px] mx-[auto]" src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="QR Code" />
          <p className="text-center text-[18px] mt-[24px]" >Sử dụng App ShopeePay hoặc ứng dựng Camera hỗ trợ QR code để quét mã</p>
        </div>
      </div>
    </div>
      
  );
};

// http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC
