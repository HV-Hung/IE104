import React from "react";
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
import { Food } from "./Pages/BookTicket/Food";
import { News } from "./Pages/News/News";
import { Profile } from "./Pages/Auth/Profile";
import { Payment_MoMo } from "./Pages/Payment/Payment_MoMo";
import { Payment_Visa } from "./Pages/Payment/Payment_Visa";
import "./App.less";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment/momo" element={<Payment_MoMo />} />
      <Route path="/payment/zalo" element={<Payment_Visa />} />
      <Route path="/cinema" element={<Cinema />} />
      <Route path="/cinema/:id" element={<CinemaDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie" element={<Movie />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/bookticket" element={<BookTicket />} />
      <Route path="/bookticket/food" element={<Food />} />
      <Route path="/news" element={<News />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
