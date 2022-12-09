
import React from "react";
import { Layout } from "../../Layout/Layout";
import "../Payment/Payment.css"
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
      alert("Vui lòng đồng ý với điều khoản!")
      return;
    }
    if (payments === "Visa")
      navigate(`/payment/visa`);
    else
      navigate(`/payment/momo`);
  }

  let checkAge = false;
  const onOptionChange = (e) => { payments = e.target.value; }
  const onCheckChange = () => { checkAge = !checkAge; }



  return (
    <Layout>
      <div className="heading">
        <h1 className="title">THANH TOÁN</h1>
      </div>
        
        <div className="wrap">
          <div className="container">
            <div className="content-pay">
              <div className="method-pay">
                <div className="HTTT">
                  <h2 className="TieuDeH2 bg-pink-300 rounded-full mb-4 h-[50px] align-middle">Hình thức thanh toán</h2>
                  <div className="bg-amber-600 h-[300px] text-[15px]">
                    <dl>
                      <dt>
                        <input name="Pay" type="radio" value="Visa" id="visa" onChange={onOptionChange} />
                        <label for="visa-radio">
                          <span className="visa logoThanhToan"></span>
                          <span>Thẻ quốc tế</span>
                        </label>
                      </dt>

                      <dt>
                        <input name="Pay" type="radio" value="MoMo" id="momo" onChange={onOptionChange} />
                        <label for="MoMo-radio">
                          <span className="MoMo logoThanhToan"></span>
                          <span>Ví MoMo</span>
                        </label>
                      </dt>
                    </dl>
                  </div>
                  <div className="mt-4">
                    <input type="checkbox" name="DieuKhoan" value="yes" onChange={onCheckChange} />Tôi đồng ý với điều khoản sử dụng và mua vé cho người có độ tuổi phù hợp
                  </div>
                </div>
              </div>


              <div className="total-pay">
                <div className="TongCong">
                  <h2 className="TieuDeH2 bg-slate-300 h-[50px] border-solid border-emerald-600">Tổng cộng</h2>
                  <div className="bg-amber-900 text-[20px] text-center h-[50px] border-solid ">250.000đ</div>
                </div>
                <div className="TienKhuyeMai ">
                  <h2 className="TieuDeH2  bg-slate-300 h-[50px] border-solid border-emerald-600">Khuyến mãi</h2>
                  <div className="bg-amber-900 text-[20px] text-center h-[50px] border-solid ">0đ</div>
                </div>
                <div className="TongTien">
                  <h2 className="TieuDeH2  bg-slate-300 h-[50px] border-solid border-emerald-600">Tổng tiền thanh toán</h2>
                  <div className="bg-amber-900 text-[20px] text-center h-[50px] border-solid ">250.000đ</div>
                </div>
              </div>
            </div>


            <div className=" text-[15px] h-[270px] bg-lime-600 col-start-1 col-end-3 row-start-4 row-end-5 self-start footer rounded-3xl">
              {/* <div className="format-bg-top"></div> */}
              <button className="h-[100px] w-[100px] bg-amber-900  rounded-[20px] col-start-1 col-end-2 row-start-1 row-end-6 justify-self-center self-center">PREVUOUS</button>

              <img className="col-start-2 col-end-3 row-start-1 row-end-5 justify-self-center self-center rounded-2xl" src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_adam_4_1.jpg" alt="hinh anh film" />

              <div className="col-start-3 col-end-4 row-start-1 row-end-3 justify-self-center self-center">Black Adam</div>
              <div className="col-start-3 col-end-4 row-start-3 row-end-4 justify-self-center self-center">2D / C13</div>

              <div className="col-[4_/_5] row-[1_/_2] justify-self-center self-center">Rạp</div>
              <div className="col-[4_/_5] row-[2_/_3] justify-self-center self-center">Xuất chiếu</div>
              <div className="col-[4_/_5] row-[3_/_4] justify-self-center self-center text-center">Phòng chiếu</div>
              <div className="col-[4_/_5] row-[4_/_5] justify-self-center self-center">Ghế</div>

              <div className="col-[5_/_6] row-[1_/_2] justify-self-start self-center">CGV Hùng Vương</div>
              <div className="col-[5_/_6] row-[2_/_3] justify-self-start self-center">
                <p>11:00</p>
                <p>26/11/2022</p>
              </div>
              <div className="col-[5_/_6] row-[3_/_4] justify-self-start self-center text-center">A2</div>
              <div className="col-[5_/_6] row-[4_/_5] justify-self-start self-center">G14, G15</div>

              <div className="col-[6_/_7] row-[1_/_2] justify-self-end self-center">Vé phim</div>
              <div className="col-[6_/_7] row-[2_/_3] justify-self-end self-center">Combo</div>
              <div className="col-[6_/_7] row-[3_/_4] justify-self-end self-center text-center">Tổng</div>

              <div className="col-[7_/_8] row-[1_/_2] justify-self-start self-center">200.000đ</div>
              <div className="col-[7_/_8] row-[2_/_3] justify-self-start self-center">150.000đ</div>
              <div className="col-[7_/_8] row-[3_/_4] justify-self-start self-center text-center">350.000đ</div>


              <button className="h-[100px] w-[100px] bg-orange-400 rounded-[20px] col-start-8 col-end-9 row-start-1 row-end-5 justify-self-center self-center" onClick={pay}>PAYMENT</button>
              {/* <div className="format-bg-seatmap-bottom"></div> */}
            </div>
          </div>
        </div>

    </Layout>
  );
};