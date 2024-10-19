import React,{useState,useEffect} from 'react';
import axios from "axios";
import { VerticalGraph } from './VerticalGraph';

const Holdings = () => {

  const [holdings,setHoldings]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allHoldings").then((res)=>{
      console.log(res); 
      setHoldings(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  const labels=holdings.map((subArray)=>subArray["name"]);
 
  const data = {
  labels,
  datasets: [
    {
      label: 'Stock price',
      data: holdings.map((stock) =>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   
  ],
};

  return (
    <>
    <div className="w-screen h-full min-h-full flex flex-wrap justify-center overflow-x-hidden text-gray-600">
      
      <h3 className="w-full text-2xl h-fit p-10 ">Holdings ({holdings.length})</h3>

      <div className="w-full flex flex-wrap justify-center">
        <table className='w-11/12 '>
          <tr className='h-12 border border-l-0 border-r-0'>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? true : false;
            const dayClass = stock.isLoss ? false : true;
            
            return (
              <tr key={index} className='h-10 border border-l-0 border-r-0 text-center'>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass? "text-green-500" : "text-red-500"}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass ? "text-green-500" : "text-red-500"}>{stock.net}</td>
                <td className={dayClass? "text-green-500" : "text-red-500"}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="w-full p-6">
        <div className="w-full text-center flex flex-wrap justify-ceneter items-center p-3">
          <p className='w-1/2'>Total investment</p>
          <h5 className='w-1/6'>
            29,875.<span>55</span>{" "}
          </h5>
        </div>
        <div className="w-full text-center flex flex-wrap justify-ceneter p-3">
          <p className='w-1/2'>Current value</p>
          <h5 className='w-1/6'>
            31,428.<span>95</span>{" "}
          </h5>
        </div>
        <div className="w-full text-center flex flex-wrap justify-ceneter p-3">
          <p className='w-1/2'>P&L</p>
          <h5 className='w-1/6'>1,553.40 (+5.20%)</h5>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </div>
    </>
  );
};

export default Holdings;