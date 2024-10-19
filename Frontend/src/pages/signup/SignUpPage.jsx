import React from 'react';
import Signup from './Signup';

const SignUpPage = () => {
  return (
    <div className=" mt-28 h-screen min-h-screen w-full">
    <div className="h-3/4 w-full flex flex-wrap justify-center items-center">
      <div className=" flex flex-wrap justify-end items-center h-full w-2/4 ">
        <div className="flex flex-wrap justify-center items-center h-2/3 w2/3 ">
          <img
            src="media/images/signup.png"
            alt="Sign up"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center h-full w-2/4">
        <Signup/>
      </div>
    </div>
  </div>
  );
};

export default SignUpPage;