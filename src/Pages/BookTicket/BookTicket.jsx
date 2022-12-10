import { Breadcrumb, Button, Space, Spin } from "antd";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { BookingHeader } from "./BookingHeader";
import { Food } from "./Food";
import { foodItems } from "./foodItems";
import { Ticket } from "./Ticket";
import { seatMap } from "./seats";
import { Seat } from "./Seat";
import { useParams } from "react-router-dom";
import { useGet, usePost } from "../../api";

export const BookTicket = () => {
  const { id } = useParams();
  const { fetchGet: fetchShowtime, result: ShowTimeResult } = useGet();
  const { fetchPost: fetchBook, result: booked } = usePost();
  const [bookingSeats, setBookingSeats] = React.useState([]);
  const [bookedSeats, setBookedSeat] = React.useState([0, 1, 200, 50]);
  const [step, setStep] = React.useState(1);
  const [foods, setFoods] = React.useState([]);

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
  }, []);

  const bookTicket = () => {
    fetchBook("ticket", {
      showtime: id,
      user: "63945659e1908fbde745df3b",
      seat: bookingSeats,
      foods: foods,
      paymentMethod: "momo",
    });
  };
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Food</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="p-[24px] min-h-[360px] max-w-[90vw] bg-[#F2F7FF] m-[24px] "
        style={{ margin: "auto" }}
      >
        <BookingHeader step={step} showtime={ShowTimeResult} />
        {step === 1 && (
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
