import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Footer, HomeBodyApp } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TotalApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeBodyApp />} />
          <Route path="/product" element={""} />
          <Route path="/collection" element={""} />
          <Route path="/blog" element={""} />
          <Route path="/pages" element={""} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TotalApp />);
