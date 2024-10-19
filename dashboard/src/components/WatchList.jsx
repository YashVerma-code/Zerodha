import React, { useContext, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { DoughnoutChart } from "./DoughnoutChart";

const labels=watchlist.map((subArray)=>subArray["name"]);
const data = {
  labels,
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.59)',
        'rgba(54, 162, 235, 0.59)',
        'rgba(255, 206, 86, 0.59)',
        'rgba(75, 192, 192, 0.59)',
        'rgba(153, 102, 255, 0.59)',
        'rgba(255, 159, 64, 0.59)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const WatchList = () => {
  return (
    <div className="w-full h-full flex flex-wrap overflow-x-hidden overflow-y-scroll">
      <div className="w-full h-20 flex flex-wrap items-center p-2">
        <input
          type="text"
          name=""
          placeholder="Eg: NIFTY , TCS , SENSEX "
          className="h-2/3 w-5/6 bg-gray-200 p-4 text-black"
        />
        <div className="h-full w-1/6 text-center flex justify-center items-center">
          <h1 className="h-2/4 w-full text-lg text-center text-black ">
            {watchlist.length}/50
          </h1>
        </div>
      </div>

      <div className="w-full h-4/5 min-h-fit  ">
        <ul>
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
      </div>
      <DoughnoutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, closeBuyWindow,} = useContext(GeneralContext);
  
  return (
    <div className="w-full h-2/5">
      <div className="flex flex-wrap justify-around items-center w-full h-full ">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="bg-blue-500 text-white h-1/3 w-2/12 p-2" onClick={()=>openBuyWindow(uid)}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="bg-red-500 text-white h-1/3 w-2/12 p-2">Sell</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="bg-slate-300 text-black py-2"><BarChartOutlined/></button>
        </Tooltip> 
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="bg-slate-300 text-black py-2 m-2"><MoreHoriz /></button>
        </Tooltip>
        
      </div>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchListActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchListActions(false);
  };

  return (
    <li
      className="w-full h-4/6 border-b-2 p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-wrap w-full h-full items-center justify-between">
        <p
          className={`${
            stock.isDown ? "text-red-500" : "text-green-500"
          } w-1/2 h-full `}
        >
          {stock.name}
        </p>
        <div className="flex flex-wrap justify-center items-center w-1/3 h-full ">
          <span
            className={`w-1/3 h-full ${
              stock.isDown ? "text-red-500" : "text-green-500"
            }`}
          >
            {stock.percent}
          </span>
          <span className="w-1/6 h-full ">
            {stock.isDown ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </span>
          <span className={`w-1/2 h-full `}>{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};
