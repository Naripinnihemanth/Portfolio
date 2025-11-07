import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Empty from "./Components/Empty/Empty.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={Empty}></Route>
        <Route path="/" Component={App}></Route>
        {/* <Route path="/QRcode" Component={QRcode}></Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
