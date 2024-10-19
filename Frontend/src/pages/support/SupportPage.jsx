import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';

const Support = () => {
  return (
    <div className='flex flex-wrap justify-center min-h-screen w-full mt-16 '>
      <Hero/>
      <CreateTicket/>
    </div>
  );
};

export default Support;