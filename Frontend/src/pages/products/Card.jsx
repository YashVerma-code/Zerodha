import React from "react";

const Card = ({ imageUrl, description }) => {
  return (
    <div className="w-1/3 h-2/5 p-2 flex flex-wrap justify-center items-center ">
      <div className="w-3/5 h-2/6">
        <img src={imageUrl} alt="No image" className="h-full w-full "/>
      </div>
      <p className="w-full h-1/2 text-center p-2">{description}</p>
    </div>
  );
};

export default Card;
