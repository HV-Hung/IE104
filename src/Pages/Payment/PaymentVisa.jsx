import React from "react";
import { useNavigate } from "react-router-dom";
export const PaymentVisa = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute w-[901px] h-[625px] left-[25%] top-[100px] bg-white-300 rounded-2xl shadow-[30px_40px_160px_20px_rgba(0,0,0,0.3)] ">
      <div className=" w-[35%] h-[100%] bg-blue-400 rounded-l-2xl">
        <div className=" text-3xl text-center border-b-2 border-dashed p-4">
          <div className=" text-left">Nhà cung cấp</div>
          <div>CGV</div>
        </div>
        <div className=" text-3xl text-center border-b-2 border-dashed p-4">
          <div className=" text-left">💵Số tiền</div>
          <div>250.000đ</div>
        </div>
        <button className="absolute w-[200px] h-[50px] text-[20px] bg-slate-800 text-cyan-50  left-[60px] top-[250px] rounded-xl">
          Thanh toán
        </button>
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
        className="absolute w-[100px] h-[80px] left-[85%] top-[10px] rounded-xl"
        src="https://inkdtex.com/Image/Picture/New/LOGO-VISA-DTEX-5.jpg"
        alt="logo momo"
      ></img>
      <form className="absolute left-[40%] top-[200px] rounded-xl text-[20px]">
        <div>
          <label className=" mr-2">Số thẻ*</label>
          <br></br>
          <input
            className=" border-solid border-black border-[1px] w-[500px]"
            type="text"
          ></input>
        </div>
        <br></br>
        <div>
          <label className=" mr-2">Tháng/năm hết hạn*</label>
          <br></br>
          <input
            className=" border-solid border-black border-[1px]"
            type="text"
          ></input>
        </div>
        <br></br>
        <div>
          <label className=" mr-2">CSC*</label>
          <br></br>
          <input
            className=" border-solid border-black border-[1px]"
            type="text"
          ></input>
        </div>
      </form>
    </div>
  );
};
