import React from "react";

const Pricing = () => {
  return (
    <div className="flex w-full min-h-60 mt-10 mb-10">
      <div className="w-1/2  flex flex-wrap justify-center">
        <div className="flex flex-wrap w-3/5 ">
          <h1 className="w-full h-fit p-3 text-xl font-medium">
            Unbeatable pricing
          </h1>
          <p className="">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-blue-600">
            See pricing →
          </a>
        </div>
      </div>
      <div className="w-1/2 flex flex-wrap justify-center">
        <div className="w-2/6 border h-full ">
          <div className="text-5xl h-1/2 flex justify-center items-center w-full "> <span>₹0</span></div>
          <div className="h-1/2 flex justify-center items-center text-center">
          <p>Free equity delivery and direct mutual funds.</p>
          </div>
        </div>
        <div className="w-2/6 border h-full">
          <div className="text-5xl h-1/2 flex justify-center items-center w-full "> <span>₹20</span></div>
          <div className="h-1/2 flex justify-center items-center text-center">
          <p>Intraday and F&O.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
