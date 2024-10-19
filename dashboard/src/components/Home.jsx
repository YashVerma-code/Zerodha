import React from "react";
import TopBar from "./TopBar";
import DashBoard from "./Dashboard";


const Home = () => {
  return (
    <div className="w-screen h-screen">
      <TopBar />
      <DashBoard />
    </div>
  );
};

export default Home;