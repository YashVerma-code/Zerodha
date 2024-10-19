import React from "react";
import MarginTable from "./MarginTable";

const Funds = () => {
  return (
    <div className="w-screen h-full min-h-full flex flex-wrap justify-center overflow-x-hidden text-gray-600 scrollbar-custom ">
      <div className="flex flex-wrap w-full h-1/5 justify-end items-end">
        <div className="flex flex-wrap justify-between h-2/3 w-3/5 items-center">
          <h1 className="h-full text-sm flex flex-wrap items-center w-3/6 ">
            <span className="h-full w-4/7 flex items-center">
              Instant, zero-cost fund transfers with
            </span>
            <span className="h-full w-1/5 flex items-center">
              <img src="upi.png" alt="upi" className="p-2" />
            </span>
          </h1>
          <div className="flex flex-wrap justify-around w-2/4 h-2/4 text-white">
            <button className="bg-green-600 w-2/6 h-full text-xs">
              Add Funds
            </button>
            <button className="bg-blue-600 w-1/3 text-xs">Withdraw</button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full h-4/5 justify-center items-center">
      <MarginTable/>
      </div>
    </div>
  );
};

export default Funds;
