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
          <Route
            path="/product"
            element={<h1 className="text-6xl">product</h1>}
          />
          <Route
            path="/collection"
            element={<h1 className="text-6xl">Collection</h1>}
          />
          <Route path="/blog" element={<h1 className="text-6xl">blog</h1>} />
          <Route path="/pages" element={<h1 className="text-6xl">pages</h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TotalApp />);
