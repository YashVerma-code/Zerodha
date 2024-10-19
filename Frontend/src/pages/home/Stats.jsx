import React from "react";

const Stats = () => {
  return (
    <div className="flex w-full h-screen mt-32 mb-32">
      <div className="flex w-1/2 h-full justify-center">
        <div className="flex flex-wrap w-4/6 ">
          <h1 className="w-full h-fit text-3xl font-medium p-4">
            Trust with confidence
          </h1>
          <div className="flex flex-wrap w-full">
            <h2 className="w-full p-2 text-xl font-medium">
              Customer-first always
            </h2>
            <div className="flex w-full p-2">
              That's why 1.3+crore customers trust Zerodha with ₹4.5+ lakh crores
              worth of equity investments.
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <h2 className="w-full p-2 text-xl font-medium">
              No spam or gimmicks
            </h2>
            <div className="flex  w-full p-2">
              No gimmicks, spam, "gamification",or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <h2 className="w-full p-2 text-xl font-medium">
              The Zerodha universe
            </h2>
            <div className="flex  w-full p-2">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <h2 className="w-full p-2 text-xl font-medium">
              Do better with money
            </h2>
            <div className="flex  w-full p-2">
              With initiatives like Nudge and kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 h-full ">
        <div className="flex justify-center items-center w-5/6 h-3/4">
          <img src="media/images/ecosystem.png" alt="" />
        </div> 
      </div>
    </div>
  );
};

export default Stats;
