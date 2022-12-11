import { Button, Space } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { BookingHeader } from "./BookingHeader";
import { Food } from "./Food";
import { foodItems } from "./foodItems";
import { Ticket } from "./Ticket";
import { seatMap } from "./seats";
import { Seat } from "./Seat";
import { useParams, useNavigate } from "react-router-dom";
import { useGet, usePost } from "../../api";
import { useEffect } from "react";
import { openNotificationWithIcon } from "../Auth/Login";
import { Payment } from "../Payment/Payment";

export const BookTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchGet: fetchShowtime, result: ShowTimeResult } = useGet();
  const { fetchPost: fetchBook, result: booked, isError } = usePost();
  const [bookingSeats, setBookingSeats] = React.useState([]);
  const [bookedSeats, setBookedSeat] = React.useState([]);
  const [step, setStep] = React.useState(1);
  const [foods, setFoods] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    sessionStorage.setItem("showtime", id);
    navigate("/login");
  }
  const status = (seatId) => {
    if (bookedSeats.includes(seatId)) return 2;
    if (bookingSeats.includes(seatId)) return 1;
    return 0;
  };

  const pickSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;
    if (bookingSeats.includes(seatId)) {
      setBookingSeats(bookingSeats.filter((seat) => seat !== Number(seatId)));
    } else setBookingSeats([...bookingSeats, seatId]);
  };

  React.useEffect(() => {
    fetchShowtime("showtime/" + id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (ShowTimeResult?.showtime.seats)
      setBookedSeat(ShowTimeResult.showtime.seats);
  }, [ShowTimeResult]);
  const bookTicket = () => {
    fetchBook("ticket", {
      showtime: id,
      user: user._id,
      seat: bookingSeats,
      foods: foods,
      paymentMethod: "momo",
    });
  };
  React.useEffect(() => {
    if (isError)
      openNotificationWithIcon(
        "error",
        "Vé bạn chọn đã có người đặt, vui lòng đặt lại"
      );

    if (booked.Showtime)
      openNotificationWithIcon("success", "Đặt vé thành công");
  }, [isError, booked]);
  return (
    <Layout>
      <div
        className="p-[24px] min-h-[360px] max-w-[90vw] bg-[#F2F7FF] m-[24px] "
        style={{ margin: "auto" }}
      >
        <BookingHeader step={step} showtime={ShowTimeResult} />
        {step === 1 && (
          <div>
            <div className="w-full">
              <img
                alt=""
                className="h-[100px]"
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png"
              />
            </div>
            <Space direction="vertical" align="center" className="w-full my-15">
              <Space>
                {seatMap.firstRow.map((seat) => (
                  <Seat
                    key={seat.id}
                    status={status(seat.id)}
                    seat={seat}
                    pickSeat={pickSeat}
                  />
                ))}
              </Space>
              <Space direction="vertical">
                {seatMap.insideRows.map((insideRow, index) => (
                  <Space key={index}>
                    {insideRow.map((seat) => (
                      <Seat
                        key={seat.id}
                        pickSeat={pickSeat}
                        status={status(seat.id)}
                        seat={seat}
                      />
                    ))}
                  </Space>
                ))}
              </Space>
              <Space>
                {seatMap.lastRow.map((seat) => (
                  <Seat
                    key={seat.id}
                    pickSeat={pickSeat}
                    status={status(seat.id)}
                    seat={seat}
                  />
                ))}
              </Space>
            </Space>
          </div>
        )}
        {step === 2 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30rem 30rem",
              gap: "50px",
              width: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {foodItems.map((item) => (
              <Food foods={foods} setFoods={setFoods} foodItem={item} />
            ))}
            <Button onClick={bookTicket}> book</Button>
          </div>
        )}
        {step === 3 && <Payment />}
        <Ticket
          seats={bookingSeats}
          showtime={ShowTimeResult}
          setStep={setStep}
          step={step}
          foods={foods}
        />
      </div>
    </Layout>
  );
};
