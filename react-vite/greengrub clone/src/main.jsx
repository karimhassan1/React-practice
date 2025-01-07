import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Footer, HomeBodyApp } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userContext from "./components/Share/userContext";
const DynamicHome2Body = lazy(() => import("./components/Body/Home2Body"));
const GitHub = lazy(() => import("./components/Share/GitHub"));
const Accodion = lazy(() => import("./components/Share/Accodion"));
const NotFound = lazy(() => import("./components/Share/NotFound"));
const CreateContext = lazy(() => import("./components/Share/createContext"));

const TotalApp = () => {
  const [user, setUser] = useState({
    name: "check",
    email: "check@gmail.com",
  });
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
          <Route
            path="/occodion"
            element={
              <Suspense>
                <Accodion />
              </Suspense>
            }
          />
          <Route
            path="/context"
            element={
              <Suspense>
                <userContext.Provider value={{ user: user, setUser: setUser }}>
                  <CreateContext />
                </userContext.Provider>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TotalApp />);
