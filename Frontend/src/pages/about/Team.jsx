import React from "react";
import {Link} from "react-router-dom"
const Team = () => {
  return (
    <>
    <div className="flex flex-wrap w-full mt-28 justify-center items-center">
      <h1 className="w-full text-center text-5xl font-medium  p-5 text-gray-800">
        Founder
      </h1>
      <div className="flex flex-wrap w-full justify-center items-center  h-full">
        <div className="flex flex-wrap w-1/5 ">
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithinKamath"
            className="rounded-full grayscale"
          />
          <h1 className="w-full text-center p-5 text-xl">Nithin Kamath</h1>
          <h1 className="w-full text-center text-base p-2">Founder, CEO</h1>
        </div>
        <div className="flex flex-wrap w-2/5 h-full p-3 ml-10 justify-center ">
          <p className="w-full h-full">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            <br />
            Playing basketball is his zen.
            <br /><br />
            Connect on <Link to={"/"} className="text-blue-600"> Homepage </Link> / 
            <Link to={"*"} className="text-blue-600"> TradingQnA </Link>/<Link to={"*"} className="text-blue-600"> Twitter</Link>


          </p>
        </div>
      </div>
    </div>
    
    <div className="flex flex-wrap w-full mt-28 justify-center items-center">
      <h1 className="w-full text-center text-5xl font-medium  p-5 text-gray-800">
        Developer
      </h1>
      <div className="flex flex-wrap w-full justify-center items-center  h-full">
        <div className="flex flex-wrap w-1/5 ">
          <img
            src="media/images/yashVerma.jpg"
            alt="nithinKamath"
            className="rounded-full "
          />
          <h1 className="w-full text-center p-5 text-xl">Yash Verma</h1>
          <h1 className="w-full text-center text-base p-2">Web Developer</h1>
        </div>
        <div className="flex flex-wrap w-2/5 h-full p-3 ml-10 justify-center ">
          <p className="w-full h-full">
          Hi, I'm Yash Verma, a Computer Science and Engineering sophomore at the Indian Institute of Information Technology, Nagpur. I have skills in web development, with expertise in the MERN stack, Next.js, React, Node.js , HTML, CSS and JavaScript. I also know programming languages like C, C++, and Python.
            
            <br />
            <br />
            I'm passionate about creating websites and applications that are easy to use and efficient.
            <br /><br />
            Connect on <Link to={"/"} className="text-blue-600"> Homepage </Link> / 
            <Link to={"https://www.linkedin.com/in/yash-verma/"} className="text-blue-600"> Linkedin </Link>/<Link to={"*"} className="text-blue-600"> Instagram</Link>


          </p>
        </div>
      </div>
    </div>
    
    </>
    
  );
};

export default Team;
Team;
