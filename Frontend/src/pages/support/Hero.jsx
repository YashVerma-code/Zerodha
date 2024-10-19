import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-96 bg-customBlue text-white text-lg ">
      <div className="flex flex-wrap w-4/5 h-4/5 ">
        <div className="flex flex-wrap justify-between w-full h-10  font-medium">
          <p className="p-2">
            <Link to={"/support"}>Support Portal</Link>
          </p>
          <p className="p-2 underline">
            <Link to={"/*"}>Track tickets</Link>
          </p>
        </div>
        <div className="flex flex-wrap  w-full h-5/6">
          <div className="flex flex-1 flex-wrap my-5">
            <h1 className="w-full p-2">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="flex flex-wrap justify-center items-center w-full h-14 bg-white rounded-sm">
              <input
                type="text"
                name="faq"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                className="p-2 placeholder-gray-700 h-3/4 w-5/6 border-none text-black text-sm focus:border-none focus:outline-none"
              />
              <div className="flex felx-wrap w-1/6 h-full justify-end pr-5 items-center">
                <i className="fa-solid fa-magnifying-glass text-gray-800"></i>
              </div>
              <div className="flex w-full flex-wrap ">
                <ul className="flex flex-wrap justify-between text-lg underline py-6">
                  <li className=" cursor-pointer">Track account opening</li>
                  <li className=" cursor-pointer">Track segment activation</li>
                  <li className=" cursor-pointer"> Intraday margins</li>
                  <li className=" cursor-pointer">Kite user manual</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-center items-center">
            <div className=" p-6">
              <h2 className="text-white text-xl font-semibold mb-4">
                Featured
              </h2>
              <ul className="text-white list-decimal list-inside space-y-2">
                <li>
                  <a
                    href="#"
                    className="underline text-white hover:text-blue-200"
                  >
                    Surveillance measure on scrips - September 2024
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline text-white hover:text-blue-200"
                  >
                    Rights Entitlements listing in September 2024
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
