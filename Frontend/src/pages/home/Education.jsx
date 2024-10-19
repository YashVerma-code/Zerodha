import React from 'react';

const Education = () => {
  return (
    <div className="flex flex-wrap overflow-x-hidden mt-32 ">
      <div className="flex w-1/2 ">
        <img src="media/images/education.svg" alt="" />
      </div>
      <div className="flex justify-center items-start w-1/2">
        <div className="flex flex-wrap w-3/5 h-4/5">
          <h2 className="w-full text-3xl ">Free and open market education</h2>
          <p className="w-full text-base mt-5">
           Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" className='text-blue-600'>Versity →</a>
          <p className="w-full text-base mt-10">
           Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="#" className='text-blue-600'>Versity →</a>
          
        </div>
      </div>
    </div>
  );
};

export default Education;