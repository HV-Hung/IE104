import React from "react";
import "antd/dist/antd.min.css";
import { Home } from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Auth/Login";
import { NotFound } from "./Pages/NotFound";
import { Payment } from "./Pages/Payment/Payment";
import { Cinema } from "./Pages/Cinemas/Cinema";
import { Movie } from "./Pages/Movies/Movie";
import { MovieDetail } from "./Pages/Movies/MovieDetail";
import { CinemaDetail } from "./Pages/Cinemas/CinemaDetail";
import { BookTicket } from "./Pages/BookTicket/BookTicket";
import { News } from "./Pages/News/News";
import { Profile } from "./Pages/Auth/Profile";
import { PaymentMoMo } from "./Pages/Payment/PaymentMoMo";
import { PaymentVisa } from "./Pages/Payment/PaymentVisa";
import { PaymentZaloPay } from "./Pages/Payment/PaymentZaloPay";
import { PaymentShopeePay } from "./Pages/Payment/PaymentShopeePay";
import { NewsDetail } from "./Pages/News/NewsDetail";
import { Ticket } from "./Pages/Ticket/Ticket";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Register } from "./Pages/Auth/Register";
import { PrivatePage } from "./Pages/PrivatePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment/momo" element={<PaymentMoMo />} />
      <Route path="/payment/visa" element={<PaymentVisa />} />
      <Route path="/payment/zalopay" element={<PaymentZaloPay />} />
      <Route path="/payment/shopeepay" element={<PaymentShopeePay />} />
      <Route path="/cinema" element={<Cinema />} />
      <Route path="/cinema/:id" element={<CinemaDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie" element={<Movie />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/bookticket/:id" element={<BookTicket />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route
        path="/profile"
        element={
          <PrivatePage>
            <Profile />
          </PrivatePage>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
