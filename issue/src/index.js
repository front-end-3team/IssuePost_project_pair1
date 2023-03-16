import React from "react";
import ReactDOM from "react-dom/client";
import "./style/reset.css";
import App from "./App";
import Detail from "./pages/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Err404 from "./pages/error/err404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Detail/*" element={<Detail />}></Route>
      <Route path="*" element={<Err404 />}></Route>
    </Routes>
  </BrowserRouter>
);
