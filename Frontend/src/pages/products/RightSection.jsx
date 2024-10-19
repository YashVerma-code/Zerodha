import React from "react";
import { Link } from "react-router-dom";
const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="flex flex-wrap w-full h-screen min-h-screen justify-center items-center">
      <div className="flex flex-wrap w-1/3 h-3/6 justify-start">
        <h1 className="w-3/4 h-14 text-4xl font-normal text-gray-700">
          {productName}
        </h1>
        <p className="w-3/4 h-2/12">{productDescription}</p>
        <div className="flex w-3/4 h-1/6 flex-wrap justify-between text-blue-600 text-lg">
          <p className="w-1/2 h-full">
            <Link to={tryDemo}>
              {tryDemo} {tryDemo && " →"}
            </Link>
          </p>
          <p className="w-1/2 h-full ">
            <Link to={"*"}>
              {learnMore} {learnMore && "→"}
            </Link>
          </p>
        </div>
        <div className="w-3/4 h-1/6 flex flex-wrap justify-center ">
          <div className="flex w-1/2 h-full">
            <img
              src={googlePlay}
              
            />
          </div>
          <div className="flex w-1/2 h-full">
            <img src={appStore} alt="" className="h-3/4 " />
          </div>
        </div>
      </div>
      <div className="flex w-2/5 h-4/5 justify-center">
        <img src={imageUrl} alt="Kite" className="w-full"/>
      </div>
    </div>
  );
};

export default RightSection;
