import React from "react";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { NotFound } from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
