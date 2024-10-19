import React from "react";
import { Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "./App";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
const DashBoard = () => {
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="flex flex-wrap w-1/3 h-full pt-16">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      </div>
      <div className="flex flex-wrap w-2/3 h-full border border-violet-900-300 pt-16">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
