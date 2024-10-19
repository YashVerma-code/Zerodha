import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-wrap w-screen justify-center items-center mt-32 mb-20 h-56">
      <div className="flex flex-wrap w-3/4 h-full text-center justify-center">
        <h1 className="w-full text-4xl font-semibold mt-4">
          404 Page Not Found
        </h1>
        <p className="w-full text-2xl">
          Sorry ,the page your looking for doesn't exsits
        </p>
        <Link to={"/"}>
          <button className="bg-blue-400 rounded-md p-2 text-lg text-white font-medium">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
