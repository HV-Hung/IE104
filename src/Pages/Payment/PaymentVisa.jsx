import React from "react";
import { useGet } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faCreditCard, faBarcode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const PaymentVisa = () => {
  const navigate = useNavigate();

  const param = useParams();
  const id = param.id;
  const { fetchGet, result: resultticket } = useGet();


  React.useEffect(() => {
    fetchGet("ticket/" + id);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-[900px] mx-[auto] mt-[64px] flex">
      <div className="w-[315px] bg-[#0c468a] text-[#fff] rounded-[6px]">
        <div className="mx-[16px] my-[24px]">
          <span class="text-[20px] my-[32px]">Nhà cung cấp CGV</span>
        </div>
        <hr className="mx-[16px]" />
        <div className="text-[18px] mx-[16px] my-[24px]">
          <FontAwesomeIcon
            className="mr-[8px] inline-block"
            icon={faMoneyBill1}
          ></FontAwesomeIcon>
          <span className="">Số tiền  {(resultticket?.totalFood + resultticket?.totalTicket).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}</span>
        </div>
        <hr className="mx-[16px]" />
        <div className="text-[18px] mx-[16px] my-[24px]">
          <FontAwesomeIcon
            className="mr-[8px] inline-block"
            icon={faCreditCard}
          ></FontAwesomeIcon>
          <span>Thông tin 088-202212101313-2001</span>
        </div>
        <hr className="mx-[16px]" />
        <div className="text-[18px] mx-[16px] my-[24px]">
          <FontAwesomeIcon
            className="mr-[8px] inline-block"
            icon={faBarcode}
          ></FontAwesomeIcon>
          <span>Đơn hàng 120466494</span>
        </div>
        <hr className="mx-[16px]" />
        <div
          className="text-[18px] my-[64px] text-center cursor-pointer "
          onClick={() => {
            navigate(`/`);
          }}
        >
          <FontAwesomeIcon
            className="mr-[8px] inline-block"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          <span>Quay lại</span>
        </div>
      </div>
      <div className="flex-1 rounded-[6px] ml-[20px]">
        <div className="flex bg-[#f0f0f0] px-[16px] py-[16px] mb-[20px]">
          <span className="text-[20px] mr-[16px]">Thẻ tín dụng/ Ghi nợ</span>
          <img
            className="w-[32px] mr-[8px]"
            src="https://onepay.vn/paygate/assets/img/VS.svg"
            alt=""
          />
          <img
            className="w-[32px] mr-[8px]"
            src="https://onepay.vn/paygate/assets/img/MC.svg"
            alt=""
          />
          <img
            className="w-[32px] mr-[8px]"
            src="https://onepay.vn/paygate/assets/img/amex.svg"
            alt=""
          />
          <img
            className="w-[32px] mr-[8px]"
            src="https://onepay.vn/paygate/assets/img/JC.svg"
            alt=""
          />
        </div>
        <div className="text-[16px] relative border-[1px] border-solid border-[#ccc] px-[16px] py-[16px] rounded-[2px]">
          <div className="mb-[24px]">
            <label htmlFor="number_card">
              <p className="mb-[8px]">Số thẻ*</p>
            </label>
            <input
              className="w-full px-[4px] py-[4px] border-[1px] border-solid border-[#ccc] rounded-[4px]"
              id="number_card"
              type="text"
              placeholder="1234 4568 9101 1234"
            />
          </div>
          <div className="flex justify-between mb-[48px]">
            <div className="div">
              <label htmlFor="date_card">
                <p className="mb-[8px]">Tháng/Năm hết hạn*</p>
              </label>
              <input
                className="w-full px-[4px] py-[4px] border-[1px] border-solid border-[#ccc] rounded-[4px]"
                id="date_card"
                type="text"
                placeholder="12/25"
              />
            </div>
            <div className="div">
              <label htmlFor="csc_card">
                <p className="mb-[8px]">CSC*</p>
              </label>
              <input
                className="w-full px-[4px] py-[4px] border-[1px] border-solid border-[#ccc] rounded-[4px]"
                id="csc_card"
                type="text"
              />
            </div>
          </div>
          <div className="absolute bottom-[8px] right-[8px]">
            <a className="text-[#16a8e1] mr-[28px]" href="">
              Hướng dẫn
            </a>
            <button
              onClick={() => {
                console.log(resultticket);
                navigate(`/ticket/${id}`);
              }} className="text-white px-[12px] py-[12px] bg-[#ccc] rounded-[4px] hover:bg-[#333]">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC
