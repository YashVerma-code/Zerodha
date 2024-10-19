// App.js
import React from "react";
import { Link } from "react-router-dom";

const Section = ({ title, items }) => (
  <div className="space-y-2">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <Link to={"/error"}> <li key={index} className="text-blue-600 hover:underline cursor-pointer">
          {item}
        </li>
        </Link>
      ))}
    </ul>
  </div>
);

const App = () => {
  const sections = [
    {
      title: "Account Opening",
      items: ["Getting started", "Online", "Offline", "Charges", "Company, Partnership and HUF", "Non Resident Indian (NRI)"]
    },
    {
      title: "Funds",
      items: ["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"]
    },
    {
      title: "Your Zerodha Account",
      items: ["Login credentials", "Your Profile", "Account modification and segment addition", "CMR & DP ID", "Nomination", "Transfer and conversion of shares"]
    },
    {
      title: "Console",
      items: ["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"]
    },
    {
      title: "Trading and Markets",
      items: ["Trading FAQs", "Kite", "Margins", "Product and order types", "Corporate actions", "Kite features"]
    },
    {
      title: "Coin",
      items: ["Understanding mutual funds and Coin", "Coin app", "Coin web", "Transactions and reports", "National Pension Scheme (NPS)"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 h-full w-full text-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} items={section.items} />
        ))}
      </div>
    </div>
  );
};

export default App;
