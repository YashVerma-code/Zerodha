import React from 'react';
import Card from './Card';

const Universe = () => {
  return (
    <div className='h-screen w-full flex flex-wrap justify-center items-center mt-28 mb-11'>
      <h1 className='w-full text-3xl font-medium p-3 text-center'>The Zerodha Universe</h1>
      <p className='w-full text-xl font-normalp-3 text-center mt-10 mb-20'>Extend your trading and investment experience even further with our partner platforms</p>
      <div className="flex flex-wrap w-full h-3/4 justify-center items-center">
        <div className="flex flex-wrap justify-between w-3/4 h-full  ">

        <Card imageUrl={"media/images/zerodhaFundhouse.png"} description={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."}/>

        <Card imageUrl={"media/images/sensibullLogo.svg"} description={"Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."} />

        <Card imageUrl={"media/images/tijori.svg"} description={"Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."}/>

        <Card imageUrl={"media/images/streakLogo.png"} description={"Systematic trading platform that allows you to create and backtest strategies without coding."}/>
        
        <Card imageUrl={"media/images/smallcaseLogo.png"} description={"Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs,"}/>

        <Card imageUrl={"media/images/ditto-logo.png"} description={"Personalized advice on life and health insurance. No spam and no mis-selling."}/>
        </div>
      </div>
    </div>
  );
};

export default Universe;