import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  
  const handleBuyClick = () => {
    axios.post("https://zerodha-y7jk.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
    .then(response => console.log(response.data))
    .catch(error => console.error("There was an error!", error));

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="w-2/6 h-2/5 absolute left-1/3 top-2/4 bg-yellow-100  flex flex-wrap justify-center items-center rounded-lg" id="buy-window" draggable="true">
      <div className="w-full h-2/4">
        <div className="w-full h-full min-h-fit">
          <fieldset className="w-full h-1/2  flex flex-wrap items-center justify-center">
            <p className="w-1/6">Quantity</p>
            <input
              type="number"
              name="qty"
              id="qty"
              className="w-2/3 pl-3"
              onChange={(e) => setStockQuantity(Number(e.target.value))} 
              value={stockQuantity}
            />
          </fieldset>
          <fieldset className="w-full h-1/2 flex flex-wrap items-center justify-center">
          <p className="w-1/6">Price</p>
          <input
            type="number"
            name="price"
            id="price"
            className="w-2/3 pl-3"
            step="0.05"
            onChange={(e) => setStockPrice(Number(e.target.value))} 
            value={stockPrice}
          />
          </fieldset>
          <h1 className="text-xl text-center">Margin required ₹140.65</h1>
        </div>
      </div>

      <div className="w-full h-1/3  flex flex-wrap items-center justify-between">
        <div className="w-full h-2/5  flex flex-wrap justify-center">
          <Link to="" className="w-1/5 rounded-lg bg-blue-400 text-center text-white hover:text-black mr-9 pt-1" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="w-1/5 rounded-lg bg-red-600 text-center text-white hover:text-black pt-1" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
