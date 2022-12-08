import React from "react";
import { useNavigate } from "react-router-dom";

export const PaymentMoMo = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute w-[901px] h-[625px] left-[25%] top-[100px] bg-white-300 rounded-2xl shadow-[30px_40px_160px_20px_rgba(0,0,0,0.3)] ">
      <div className=" w-[35%] h-[100%] bg-pink-500 rounded-l-2xl">
        <div className=" text-3xl text-center border-b-2 border-dashed p-4">
          <div className=" text-left">Nhà cung cấp</div>
          <div>CGV</div>
        </div>
        <div className=" text-3xl text-center border-b-2 border-dashed p-4">
          <div className=" text-left">💵Số tiền</div>
          <div>250.000đ</div>
        </div>
        <button
          className="text-3xl absolute left-5 bottom-[20px]"
          onClick={() => {
            navigate(`/payment`);
          }}
        >
          ⬅️ Quay lại
        </button>
      </div>
      <img
        className="absolute w-[80px] h-[80px] left-[37%] top-[10px] rounded-xl"
        src="https://i.rada.vn/data/image/2019/10/15/CGV-Cinemas-200.png"
        alt="logo cgv"
      ></img>
      <img
        className="absolute w-[80px] h-[80px] left-[90%] top-[10px] rounded-xl"
        src="https://file.hstatic.net/1000273026/article/momo_logo_ee7f0396e57f4820a504f7ab63e9eade_1024x1024.png"
        alt="logo momo"
      ></img>
      <div className="absolute left-[52%] top-[150px] text-3xl">
        Quét mã để thanh toán
      </div>
      <img
        className=" w-[250px] h-[250px] absolute left-[55%] top-[250px] col-[2_/_3] row-[2_/_3]"
        src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
        alt="qr-code"
      ></img>
    </div>
  );
};

// http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC
