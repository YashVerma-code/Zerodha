import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(true);
  const [selectedMenu,setSelectedMenu]=useState(0);
  useEffect(() => {});

  return (
    <nav className="h-16 border-b-2 flex justify-center items-center overflow-x-hidden fixed w-full overflow-hidden top-0 bg-white z-50">
      <div className="ml-5 flex flex-wrap justify-center items-center w-1/6 h-full">
        <Link to={"/"}>
          <img src="media/images/logo.svg" alt="" />
        </Link>
      </div>
      <div className="flex w-full h-full flex-wrap   justify-end">
        <div className="flex h-full lg:w-4/6 sm:w-5/6 flex-wrap ">
          <div
            className={`flex w-full h-full flex-wrap items-center justify-end mr-10 space-x-3 text-center  ${
              isNavOpen ? "block" : "hidden relative"
            }`}
          >
            <Link
              to={"/"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center  ${selectedMenu==0?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} onClick={()=>setSelectedMenu(0)}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`hover:text-blue-400  w-1/12 h-full flex items-center justify-center ${selectedMenu==1?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} onClick={()=>setSelectedMenu(1)}
            >
              About
            </Link>
            <Link
              to={"/products"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${selectedMenu==2?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} onClick={()=>setSelectedMenu(2)}
            >
              Products
            </Link>
            <Link
              to={"/pricing"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${selectedMenu==3?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} onClick={()=>setSelectedMenu(3)}
            >
              Pricing
            </Link>
            <Link
              to={"/support"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${selectedMenu==4?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} onClick={()=>setSelectedMenu(4)}
            >
              Support
            </Link>
             <Link
              to={"/signup"}
              className={`hover:text-blue-400 w-1/12 h-full flex items-center justify-center ${selectedMenu==5?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} onClick={()=>setSelectedMenu(5)}
            >
              Signup
            </Link>
            <Link
              to={"/login"}
              className={`hover:text-blue-400 w-1/612h-full flex items-center justify-center ${selectedMenu==6?`text-blue-500 hover:text-blue-500`:`text-black hover:text-blue-500`}`} onClick={()=>setSelectedMenu(6)}
            >
              Login
            </Link>
          </div>
        </div>
        <button
          className="lg:hidden md:hidden focus:outline-none hover:text-blue-400 w-8 flex justify-center items-center"
          onClick={() => setNavOpen(!isNavOpen)}
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
