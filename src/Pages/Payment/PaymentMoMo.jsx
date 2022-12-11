import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGet } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill1,
  faCreditCard,
  faBarcode,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export const PaymentMoMo = () => {
  const param = useParams();
  const navigate = useNavigate();
  const id = param.id;
  const { fetchGet, result: resultticket } = useGet();


  React.useEffect(() => {
    fetchGet("ticket/" + id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-[900px] mx-[auto] mt-[64px] flex">
      <div className="w-[315px] bg-[#af206f] text-[#fff] rounded-[6px]">
        <div className="mx-[16px] my-[24px]">
          <span class="text-[20px] my-[32px]">Nhà cung cấp CGV</span>
        </div>
        <hr className="mx-[16px]" />
        <div className="text-[18px] mx-[16px] my-[24px]">
          <FontAwesomeIcon
            className="mr-[8px] inline-block"
            icon={faMoneyBill1}
          ></FontAwesomeIcon>
          <span className="">Số tiền {(resultticket?.totalFood + resultticket?.totalTicket).toLocaleString("it-IT", {
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
      <div className="flex-1 rounded-[6px]">
        <div className="flex justify-between mx-[16px] my-[24px]">
          <img
            className="w-[64px]"
            src="https://cdn.mservice.io/static/gcs_partner_m4b/24448-2019-05-31/saHon8l0idgsd6yjSXkb_1559293361228"
            alt="Logo CGV"
          />
          <img
            className="w-[64px]"
            src="https://payment.momo.vn/gw_payment/faces/javax.faces.resource/material/img/logo-1.png"
            alt="Logo Momo"
          />
        </div>
        <div className="mx-[16px]">
          <hr />
          <p className="text-[28px] text-[#af206f] text-center py-[32px]">
            Quét mã để thanh toán
          </p>
          <img
            className="w-[300px] mx-[auto]"
            src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
            alt="QR Code"
            onClick={() => {
              console.log(resultticket);
              navigate(`/ticket/${id}`);
            }}
          />
          <p className="text-center text-[18px] mt-[24px]">
            Sử dụng App MoMo hoặc ứng dựng Camera hỗ trợ QR code để quét mã
          </p>
        </div>
      </div>
    </div>

  );
};

// http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC
