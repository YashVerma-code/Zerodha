import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  
  useEffect(() => {
    const savedMenu = localStorage.getItem("selectedMenu");
    if (savedMenu) {
      setSelectedMenu(parseInt(savedMenu, 10));
    } 
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    localStorage.setItem("selectedMenu", index);
  };

  const getMenuClass = (index) =>
    selectedMenu === index
      ? "text-red-500 hover:text-red-500"
      : "text-black hover:text-red-500";

  return (
    <div className="flex flex-wrap w-4/6 h-full text-sm font-medium justify-between items-center">
      {/* Logo Section */}
      <div className="flex justify-center items-center h-full w-1/12">
        <img
          src="logo.png"
          alt="Logo"
          className="h-3/5 w-2/3 m-0 flex justify-center items-center"
        />
      </div>

      {/* Menu Section */}
      <div className="flex justify-between items-center h-full w-8/12">
        <ul className="w-full h-full flex justify-between items-center">
          <li>
            <Link
              to="/"
              className={getMenuClass(0)}
              onClick={() => handleMenuClick(0)}
            >
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className={getMenuClass(1)}
              onClick={() => handleMenuClick(1)}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              className={getMenuClass(2)}
              onClick={() => handleMenuClick(2)}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              className={getMenuClass(3)}
              onClick={() => handleMenuClick(3)}
            >
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              className={getMenuClass(4)}
              onClick={() => handleMenuClick(4)}
            >
              <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              className={getMenuClass(5)}
              onClick={() => handleMenuClick(5)}
            >
              <p>Apps</p>
            </Link>
          </li>

          {/* Profile Section */}
          <li className="w-2/12">
            <div className="h-full w-full flex items-center">
              <div className="w-[30px] h-[30px] text-center relative text-[0.7rem] font-normal text-[rgb(221,139,221)] flex justify-center items-center rounded-full bg-[rgb(252,229,252)] mr-2">
                ZU
              </div>
              <p className="username">USERID</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
