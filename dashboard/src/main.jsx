import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/*"} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);