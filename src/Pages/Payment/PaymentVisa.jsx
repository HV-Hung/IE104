import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faCreditCard, faBarcode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const PaymentVisa = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[900px] mx-[auto] my-[32px] flex">
      <div className="w-[315px] bg-[#af206f] text-[#fff] rounded-[6px]">
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
        <div className="flex">
          <span className="mr-[16px]">Thẻ tín dụng/ Ghi nợ</span>
          <img className="w-[32px] mr-[8px]" src="https://onepay.vn/paygate/assets/img/VS.svg" alt="" />
          <img className="w-[32px] mr-[8px]" src="https://onepay.vn/paygate/assets/img/MC.svg" alt="" />
          <img className="w-[32px] mr-[8px]" src="https://onepay.vn/paygate/assets/img/amex.svg" alt="" />
          <img className="w-[32px] mr-[8px]" src="https://onepay.vn/paygate/assets/img/JC.svg" alt="" />
        </div>
      </div>
    </div>
      
  );
};

// http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC
