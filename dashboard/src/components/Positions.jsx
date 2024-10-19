import React, { useEffect,useState } from "react";
// import { positions } from "../data/data";
import axios from "axios";


const positions=[];
const Positions = () => {
  const [positions,setPositions]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allPositions").then((data)=>{
      setPositions(data.data);
    }).catch((err)=>{
      console.log("Error while Fetching data for positions",err);
    })
  },
[])

  return (
    <div className="w-screen h-full min-h-fulloverflow-x-hidden text-gray-600 ">
      <h1 className="w-full h-1/6 text-3xl flex justify-start items-end pl-10 font-normal">
        Positions ({positions.length})
      </h1>
      <div className="flex flex-wrap w-full h-2/6 justify-center  mt-10">
        <table class="w-11/12 table-auto border-collapse ">
          <thead>
            <tr class="text-lg font-light border border-l-0 border-r-0">
              <th class="px-4 py-2">Product</th>
              <th class=" px-4 py-2">Instrument</th>
              <th class=" px-4 py-2">Qty.</th>
              <th class=" px-4 py-2">Avg.</th>
              <th class=" px-4 py-2">LTP</th>
              <th class=" px-4 py-2">P&L</th>
              <th class=" border-r-0  px-4 py-2">Chg.</th>
            </tr>
          </thead>
          <tbody>
           
          {positions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? true : false;
            const dayClass = stock.isLoss ? false : true;

            return (
              <tr key={index} className='h-10 border border-l-0 border-r-0 text-center'>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass? "text-green-500" : "text-red-500"}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass?"text-green-500":"text-red-600"}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
