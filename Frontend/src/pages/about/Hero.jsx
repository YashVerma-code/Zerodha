import React from "react";

const Hero = () => {
  return (
    <div className="mt-40 flex flex-wrap min-h-screen  text-gray-600 justify-center">
      <h1 className="w-4/5 text-center h-fit text-4xl p-4 leading-relaxed font-normal border-b-2 pb-16">
        We pioneered the discount broking model in India . Now, we are breaking
        ground with our technology.
      </h1>
      <div className="flex flex-wrap w-4/5 h-full mt-24">
        <div className="flex w-1/2 justify-center items-center  ">
          <p className="w-2/4 text-base leading-6 p-2">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            <br />
            <br />
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
            <br />
            <br />
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="flex w-1/2 justify-center items-center  ">
          <p className="w-2/4 h-full text-base leading-6 p-2">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br />
            <br />
            <span className="text-blue-400">Rainmatter</span>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
            <br />
            <br />
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <span className="text-blue-500">blog</span>or see what the media is<span className="text-blue-500">saying about
            us.</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
