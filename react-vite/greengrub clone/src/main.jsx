import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Footer, HomeBodyApp } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePagesPathWithElements } from "./components/constant/HomeData";
import NotFound from "./components/Share/NotFound";
const DynamicHome2Body = lazy(() => import("./components/Body/Home2Body"));
const GitHub = lazy(() => import("./components/Share/GitHub"));

const TotalApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeBodyApp />} />
          <Route
            path="/home2"
            element={
              <Suspense>
                <DynamicHome2Body />
              </Suspense>
            }
          />
          <Route path="/product" element={"Product"} />
          <Route path="/collection" element={"Collection"} />
          <Route path="/blog" element={"Blog"} />
          <Route path="/pages" element={"Page"} />
          <Route
            path="/github"
            element={
              <Suspense>
                <GitHub />
              </Suspense>
            }
          />
          <Route Paht="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TotalApp />);
