import React, { useEffect } from "react";
import { Layout } from "../../Layout/Layout";
import Barcode from "react-barcode";
import { useParams } from "react-router-dom";
import { useGet } from "../../api";

export const Ticket = () => {
  const { fetchGet, result: ticket } = useGet();
  const { id } = useParams();

  useEffect(() => {
    fetchGet("ticket/" + id);
  }, []);
  console.log(ticket);
  const foods = ticket?.foods.filter((food) => food.quantity !== 0);
  console.log(foods);
  return (
    <Layout>
      <div className="p-[12px] min-h-[800px]">
        <div className="mx-[200px] border-2 rounded-lg my-[20px] shadow-xl text-center">
          <div
            className="ml-[250px] mr-[250px] my-[20px]
             text-[22px] py-[10px] font-bold
             rounded-full border-sky-600 border-2 bg-sky-600"
          >
            MÃ ĐẶT VÉ #9876234233 - HOÀN TẤT
          </div>
          <div className="px-[625px]">
            <Barcode className="" value={ticket?.id} />
          </div>

          <div
            className="ml-[250px]  my-[20px]
             text-[22px] py-[10px] font-bold
            mr-[30px] rounded-full border-sky-600 border-2 bg-sky-600"
          >
            THÔNG TIN ĐƠN HÀNG
          </div>
          <div className="flex mx-[250px] my-[30px]">
            <div>
              <img
                className="w-[370px] rounded-lg"
                src={ticket?.movieImage}
              ></img>
            </div>
            <div className="ml-[50px] text-start w-full mb-[75px] text-[20px] font-bold">
              <p>TÊN PHIM: {ticket?.movieName}</p>
              <p>
                THỜI GIAN:
                <span className="font-normal"> {ticket?.time}</span>
              </p>
              <div>
                NGÀY:
                <span className="font-normal"> {ticket?.date}</span>
              </div>
              <div>
                RẠP:
                <span className="font-normal"> {ticket?.cinemaName}</span>
              </div>
              <div>
                PHÒNG:
                <span className="font-normal"> {ticket?.room}</span>
              </div>

              <div className="w-full flex justify-between mt-[30px]">
                <div className="ml-0">
                  GHẾ:
                  <span className="font-normal"> {ticket?.seat}</span>
                </div>

                <span className="mr-[50px]">
                  {ticket?.totalTicket.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              {ticket?.totalFood !== 0 && (
                <div>
                  <div>BẮP NƯỚC:</div>

                  <div className="ml-[50px] pl-50px">
                    {foods?.map((food, index) => {
                      return (
                        <div className="w-full flex justify-between">
                          <span className="ml-0 font-normal">
                            {food.title} x{food.quantity}
                          </span>
                          <span className="font-bold mr-[50px]">
                            {food.price.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="w-full flex justify-between">
                <span className="ml-0">TỔNG THANH TOÁN:</span>
                <span className="mr-[50px]">
                  {" "}
                  {(ticket?.totalTicket + ticket?.totalFood).toLocaleString(
                    "it-IT",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </span>
              </div>

              <div className="w-full flex justify-between">
                <span className="ml-0">PHƯƠNG THỨC THANH TOÁN:</span>
                <span className="mr-[50px] font-normal">
                  {ticket?.paymentMethod}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
