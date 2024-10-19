import React from "react";

const Awards = () => {
  return (
    <div className="flex flex-wrap overflow-x-hidden mt-28 ">
      <div className="flex w-1/2 ">
        <img src="media/images/largestBroker.svg" alt="" />
      </div>
      <div className="flex justify-center items-start w-1/2">
        <div className="flex flex-wrap text-center h-4/5">
          <h2 className="w-full text-3xl ">Largest stock broker in India</h2>
          <p className="w-full text-center text-base">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="flex justify-center items-center leading-relaxed w-1/2">
            <ul className="list-disc">
              <li>Futures and Options </li>
              <li>Commodity derivatives</li>
              <li>currency derivatives</li>
            </ul>
          </div>
          <div className="flex justify-center items-center w-1/2 leading-relaxed">
            <ul className="list-disc">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
          <div className="w-full flex justify-center items-center">
            <img src="media/images/pressLogos.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
