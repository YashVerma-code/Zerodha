import React, { useEffect, useState } from "react";
import "./about/about.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(true);
  const location=useLocation();
  useEffect(() => {});

  return (
    <nav className="h-16 border-b-2 flex justify-center items-center overflow-x-hidden fixed w-full overflow-hidden top-0 bg-white z-50">
      <div className="ml-5 flex flex-wrap justify-center items-center w-1/6 h-full">
        <Link to={"/"}>
          <img src="media/images/logo.svg" alt="" className="logoImg"/>
        </Link>
      </div>
      <div className="flex w-full h-full flex-wrap justify-end">
        <div className="flex h-full lg:w-5/6 sm:w-5/6 flex-wrap ">
          <div
            className={`flex w-full h-full flex-wrap items-center justify-end mr-10 space-x-3 text-center optionside ${
              isNavOpen ? "block" : "hidden relative"
            }`}
          >
            <Link
              to={"/"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center  ${location.pathname===`/`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`hover:text-blue-400  w-1/12 h-full flex items-center justify-center ${location.pathname===`/about`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              About
            </Link>
            <Link
              to={"/products"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${location.pathname===`/products`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              Products
            </Link>
            <Link
              to={"/pricing"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${location.pathname===`/pricing`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              Pricing
            </Link>
            <Link
              to={"/support"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${location.pathname===`/support`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              Support
            </Link>
            <Link
              to={"https://zdashboard.netlify.app/"}
              className={`hover:text-blue-400  w-1/12 h-full flex items-center justify-center ${location.pathname===`/about`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              Dashboard
            </Link>
             <Link
              to={"/signup"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${location.pathname===`/sihnup`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              Signup
            </Link>
            <Link
              to={"/login"}
              className={`hover:text-blue-400 w-1/612h-full flex items-center justify-center ${location.pathname===`/login`?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} 
            >
              Login
            </Link>
           
          </div>
        </div>
        <button
          className="lg:hidden md:hidden focus:outline-none hover:text-blue-400 w-8 flex justify-center items-center"
          
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
