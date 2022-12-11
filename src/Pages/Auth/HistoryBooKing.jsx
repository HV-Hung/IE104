import React from "react";
import { useGet } from "../../api";

export const HistoryBooKing = () => {
  const { fetchGet, result: tickets } = useGet();

  const user = JSON.parse(localStorage.getItem("user"));
  React.useEffect(() => {
    fetchGet("ticket/user/" + user?._id);
  }, []);
  console.log(tickets);

  return (
    <div>
      {tickets &&
        tickets?.map((ticket) => {
          return (
            <div className="flex border-2 p-5 my-[30px]">
              <div>
                <img
                  className="w-[370px] rounded-lg"
                  src={ticket?.movieImage}
                  alt=""
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
                      {ticket?.foods?.map((food, index) => {
                        if (food.quantity === 0) return <></>;
                        return (
                          <div
                            key={index}
                            className="w-full flex justify-between"
                          >
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
          );
        })}
    </div>
  );
};
