import React from "react";

const Orders = () => {
  return (
    <div className="w-screen h-full min-h-full  flex flex-wrap justify-center overflow-x-hidden text-gray-600">
      <div className="flex flex-wrap w-full h-2/3  items-center">
      <div className="flex flex-wrap w-full h-2/6 ">

        <h1 className="w-full h-3/6 text-center text-xl ">
          You haven't placed any orders today
        </h1>
        <div className="w-full h-3/6 flex flex-wrap justify-center items-center ">
          <button className="bg-blue-500 text-white rounded hover:bg-black ">
            Get Started
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Orders;
