import React from "react";
import App from "./App";

const CreateTicket = () => {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex flex-wrap w-3/4 h-full justify-center items-center">
        <h1 className="w-full h-14 p-2 text-3xl font-extralight m-2 ">
          To create a ticket, select a relevant topic
        </h1>
        <div className="flex flex-wrap justify-between w-full p-2 ">
          <App/>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
