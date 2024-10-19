import React from "react";

const Summary = () => {
  return (
    <div className="w-screen h-full min-h-full flex flex-wrap justify-center overflow-x-hidden text-gray-600 text-sm">
      <div className="w-full h-2/6 flex flex-wrap justify-start">
        <h6 className="w-full h-2/3 flex flex-wrap justify-start items-end text-3xl font-normal">
          <span className="ml-10">Hi, User!</span>
        </h6>
        <hr className="mt-6 w-5/6 ml-10 border-2" />
      </div>

      <div className="flex flex-wrap justify-center items-center w-full h-2/5">
        <h1 className="w-full h-1/6 text-2xl pl-10">Equity</h1>

        <div className="flex flex-wrap justify-between w-full h-2/6 pl-10">
          <div className="w-1/3 h-full border-r-2">
            <h3 className="w-full h-2/3 text-4xl font-normal">3.74k</h3>
            <p>Margin available</p>
          </div>

          <div className="w-1/2 h-full  text-gray-600">
            <p className="w-full h-1/3 ">
              Margins used <span className="text-black">0</span>{" "}
            </p>
            <p>
              Opening balance <span className="text-black">3.74k</span>{" "}
            </p>
          </div>
        </div>
        <div className="w-full">
          <hr className="w-5/6 ml-10 border-2 " />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full h-2/5">
        <h1 className="w-full h-1/6 text-2xl pl-10">Holdings (13)</h1>

        <div className="flex flex-wrap justify-between w-full h-2/6 pl-10">
          <div className="w-1/3 h-full border-r-2">
            <h3 className="w-full h-2/3 text-4xl font-normal text-green-400">1.55k <small className="text-sm">+5.20%</small>{" "}</h3>
            <p>P&L</p>
          </div>

          <div className="w-1/2 h-full  text-gray-600">
            <p className="w-full h-1/3 ">
              Current Value <span className="text-black">31.43k</span>{" "}
            </p>
            <p>
              Investment <span className="text-black">29.88k</span>{" "}
            </p>
          </div>
        </div>
        <div className="w-full">
          <hr className="w-5/6 ml-10 border-2 " />
        </div>
      </div>
    </div>
  );
};

export default Summary;
