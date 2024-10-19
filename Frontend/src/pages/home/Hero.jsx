import React from "react";
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <div className="w-full text-center mb-40">
      <div className="  min-h-screen">
        <div className="flex w-full mt-16 mb-16">
          <img src="media/images/homeHero.png" alt="HomeHero" />
        </div>
        <div className="flex flex-wrap justify-center items-center mb-5">
          <h1 className="mt-10 text-5xl font-bold">Invest in everything</h1>
          <p className="m-5 w-full text-3xl">
            Online platform to invest in stocks, derivatives, mutual funds
          </p>
          <Link
              to={"/signup"}>
                <button className="bg-blue-400 font-bold text-white p-3 rounded-xl hover:bg-black">Signup Now for free </button>
                </Link>
        </div>
      </div>
    </div>  
  );
};

export default Hero;
