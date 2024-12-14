import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./App";
import { Footer } from "./App";

const TotalApp = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TotalApp />);
