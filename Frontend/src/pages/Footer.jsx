import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 w-full min-h-screen h-fit flex flex-wrap justify-center pb-24 border-t-2"
      style={{ height: "35rem" }}
    >
      <div className="flex flex-wrap w-2/12 h-3/6 items-baseline m-10">
        <div className="flex justify-center p-3 w-full h-12">
          <img src="media/images/logo.svg" alt="logo" />
        </div>
        <p className="w-full text-sm">
          © 2010 - 2024, Zerodha Broking Ltd. All rights reserved
        </p>

        <div className="w-full flex flex-wrap justify-between  border-b-2 border-gray-300">
          <div className="flex flex-wrap justify-between w-2/4">
            <span className="w-2/12 h-10 text-2xl text-center hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="w-2/12 h-10 text-2xl text-center hover:text-blue-700">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="w-2/12 h-10 text-2xl text-center hover:text-pink-600">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="w-2/12 h-10 text-2xl text-center hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between ">
          <div className="flex flex-wrap justify-between w-2/5">
            <span className="w-2/12 h-10 text-2xl text-center hover:text-red-600">
              <FontAwesomeIcon icon={faYoutube} />
            </span>
            <span className="w-2/12 h-10 text-2xl text-center hover:text-green-700">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <span className="w-2/12 h-10 text-2xl text-center hover:text-blue-600">
              <FontAwesomeIcon icon={faTelegram} />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-2/12 h-4/6 m-10">
        <h1 className="w-full h-12 text-xl font-medium text-gray-500">
          Company
        </h1>
        <ul>
          {[
            "About",
            "Products",
            "Pricing",
            "Referral programme",
            "Careers",
            "Zerodha.tech",
            "Press & media",
            "Zerodha Cares",
          ].map((item) => (
            <li
              key={item}
              className="p-2 font-medium text-gray-500  hover:text-blue-400 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap w-2/12 h-4/6 m-10">
        <h1 className="w-full h-12 text-xl font-medium text-gray-500">
          Support
        </h1>
        <ul>
          {[
            "Contact us",
            "Support portal",
            "Z-Connect blog",
            "List of charges",
            "Downloads & resources",
            "Videos",
            "Market overview",
            "How to file a complaint?",
            "Status of your complaints",
          ].map((item) => (
            <li
              key={item}
              className="p-2 font-medium text-gray-500  hover:text-blue-400  cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap w-2/12 h-1/6 m-10">
        <h1 className="w-full h-12 text-xl font-medium text-gray-500">
          Account
        </h1>
        <ul>
          {["Open an Account", "Fund transfer"].map((item) => (
            <li
              key={item}
              className="p-2 font-medium text-gray-500  hover:text-blue-400  cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap justify-center w-full min-h-fit">
        <div className="w-4/5 min-h-fit">
          <p className="text-xs w-full mb-10">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            <br />
            <br />
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
            <br />
            <br />
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
            <br />
            <br />
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
