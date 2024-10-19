import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='flex flex-wrap justify-center items-centerw-full h-56'>
      <h1 className='w-full text-5xl text-center p-3 font-normal text-gray-700'>Technology</h1>
      <p className='w-full text-center text-2xl text-gray-600'>Sleek, modern, and intuitive trading platforms</p>
      <p className='text-center text-xl text-gray-600 '>Check out our <Link to="*" className="text-blue-500">investment offering  →</Link></p>
    </div>
  );
};

export default Hero;