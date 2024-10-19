import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";
import { Link } from "react-router-dom";
const ProductPage = () => {
  return (
    <div className="min-h-screen mt-24">
      <Hero />
      <LeftSection
        imageUrl={"media/images/kite.png"}
        productName={"Kite"}
        productDescription={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"Try Demo"}
        learnMore={"Learn more"}
        googlePlay={"media/images/googlePlayBadge.svg"}
        appStore={"media/images/appstoreBadge.svg"}
      />

      <RightSection
        imageUrl={"media/images/console.png"}
        productName={"Console"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        tryDemo={"Learn more"}
      />

      <LeftSection
        imageUrl={"media/images/coin.png"}
        productName={"Coin"}
        productDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={"Coin"}
        googlePlay={"media/images/googlePlayBadge.svg"}
        appStore={"media/images/appstoreBadge.svg"}
      />
      <RightSection
        imageUrl={"media/images/kiteconnect.png"}
        productName={"Kite Connect API"}
        productDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        tryDemo={"http://localhost:5173/"}
      />

      <LeftSection
        imageUrl={"media/images/varsity.png"}
        productName={"Varsity mobile"}
        productDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlePlay={"media/images/googlePlayBadge.svg"}
        appStore={"media/images/appstoreBadge.svg"}
      />
      <p className="w-full text-center text-xl  p-4">
        Want to know more about our technology stack? Check out the{" "}
        <Link to={"https://zerodha.tech/"} className="text-blue-500">
          Zerodha.tech
        </Link>{" "}
        blog.
      </p>
      <Universe />
      <div className="flex felx-wrap w-full h-14 justify-center mb-20">
        <button className="bg-blue-500 text-white text-2xl p-4 rounded-lg hover:bg-black text-center">
          <Link to={"/signup"}>  Signup for free</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
