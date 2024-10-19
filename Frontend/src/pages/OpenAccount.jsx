import React from 'react';
import {Link} from "react-router-dom";
const OpenAccount = () => {
  return (
    <div className='flex flex-wrap justify-center items-center w-full min-h-56 mt-20 mb-20 text-center'>
      <h1 className='w-full p-3 text-4xl font-bold'>Open a  Zerodha account</h1>
      <p className='w-full text-xl'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <Link
              to={"/signup"}>
      <button className="bg-blue-400 font-bold text-white p-3 rounded-xl hover:bg-black">Signup Now for free </button>

              </Link>
    </div>
  );
};

export default OpenAccount;