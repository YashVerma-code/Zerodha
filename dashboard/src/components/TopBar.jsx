import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="flex flex-wrap w-screen fixed top-0 h-16 border-b-2 text-gray-600">
      <div className="flex flex-wrap w-2/6 h-full text-sm font-medium border-r-slate-600 ">
        <div className="flex flex-wrap w-1/2  justify-around items-center ">
          <p className="index">NIFTY 50</p>
          <p className="text-red-600">{100.2} </p>
          <p className="percent"></p>
        </div>
        <div className="flex flex-wrap w-1/2  justify-around items-center">
          <p className="">SENSEX</p>
          <p className="text-red-500">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
