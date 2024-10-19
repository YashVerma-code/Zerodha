import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full min-h-screen h-screen text-black top-16 relative flex flex-wrap justify-center">
        <div className="w-full h-1/5 flex flex-wrap justify-center items-center">
          <h1 className="text-center w-full h-1/3 bg-slate-30 text-5xl font-normal">
            Charges
          </h1>
          <p className="text-center text-2xl w-full">
            List of all charges and taxes
          </p>
        </div>

        <div className="w-5/6 h-2/3 flex min-h-fit flex-wrap text-gray-700">
          <div className="flex flex-wrap items-center justify-center w-1/3 h-full min-h-fit">
            <img
              src="media/images/pricing0.svg"
              alt="0pricing"
              className="w-2/3 h-1/3"
            />
            <h1 className="w-2/3 text-3xl text-center">Free equity delivery</h1>
            <p className="w-4/5 h-1/3 text-center text-lg p-2">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center w-1/3 h-full min-h-fit">
            <img
              src="media/images/pricing20.svg"
              alt="0pricing"
              className="w-2/3 h-1/3"
            />
            <h1 className="w-2/3 text-3xl text-center">
              Intraday and F&O trades
            </h1>
            <p className="w-4/5 h-1/3 text-center text-lg p-2">
              Intraday and F&O trades Flat ₹ 20 or 0.03% (whichever is lower)
              per executed order on intraday trades across equity, currency, and
              commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center w-1/3 h-full min-h-fit">
            <img
              src="media/images/pricing0.svg"
              alt="0pricing"
              className="w-2/3 h-1/3"
            />
            <h1 className="w-2/3 text-3xl text-center">Free direct MF</h1>
            <p className="w-4/5 h-1/3 text-center text-lg p-2">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full mt-48 flex flex-wrap justify-center ">
        <h1 className="h-1/6 w-9/12  text-3xl tex flex  flex-wrap items-center px-2">
          Charges explained
        </h1>
        <p className="w-9/12 h-5/6 min-h-fit p-4 font-normal mt-14">
          <b>Securities/Commodities transaction tax</b>
          <br />
          <br />
          Tax by the government when transacting on the exchanges. Charged as
          above on both buy and sell sides when trading equity delivery. Charged
          only on selling side when trading intraday or on F&O.
          <br />
          <br />
          When trading at Zerodha, STT/CTT can be a lot more than the brokerage
          we charge. Important to keep a tab.
          <br />
          <br />
          <b>
            Transaction/Turnover Charges
            <br />
            <br />
          </b>
          Charged by exchanges (NSE, BSE, MCX) on the value of your
          transactions.
          <br />
          <br />
          BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
          ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged
          into a new group X w.e.f 01.12.2017)
          <br />
          <br />
          BSE has revised transaction charges in SS and ST groups to ₹1,00,000
          per crore of gross turnover.
          <br />
          <br />
          BSE has revised transaction charges for group A, B and other non
          exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W,
          T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1,
          2022.
          <br />
          <br />
          BSE has revised transaction charges in M, MT, TS and MS groups to ₹275
          per crore of gross turnover.
          <br />
          <br />
          <b>
            Call & trade
            <br />
            <br />
          </b>
          Additional charges of ₹50 per order for orders placed through a dealer
          at Zerodha including auto square off orders.
          <br />
          <br />
          <b>
            Stamp charges
            <br />
            <br />
          </b>
          Stamp charges by the Government of India as per the Indian Stamp Act
          of 1899 for transacting in instruments on the stock exchanges and
          depositories.
          <br />
          <br />
          <b>
            NRI brokerage charges
            <br />
            <br />
          </b>
          ₹100 per order for futures and options. For a non-PIS account, 0.5% or
          ₹100 per executed order for equity (whichever is lower). For a PIS
          account, 0.5% or ₹200 per executed order for equity (whichever is
          lower). ₹500 + GST as yearly account maintenance charges (AMC)
          charges. Account with debit balance
          <br />
          <br />
          If the account is in debit balance, any order placed will be charged
          ₹40 per executed order instead of ₹20 per executed order.
          <br />
          <br />
          Charges for Investor's Protection Fund Trust (IPFT) by NSE
          <br />
          <br />
          Equity and Futures - ₹10 per crore + GST of the traded value. Options
          - ₹50 per crore + GST traded value (premium value). Currency - ₹0.05
          per lakh + GST of turnover for Futures and ₹2 per lakh + GST of
          premium for Options. GST
          <br />
          <br />
          Tax levied by the government on the services rendered. 18% of (
          brokerage + SEBI charges + transaction charges)
          <br />
          <br />
          <b>
            SEBI Charges
            <br />
            <br />
          </b>
          Charged at ₹10 per crore + GST by Securities and Exchange Board of
          India for regulating the markets.
          <br />
          <br />
          <b>
            DP (Depository participant) charges
            <br />
            <br />
          </b>
          ₹13 + GST per scrip (irrespective of quantity), on the day, is debited
          from the trading account when stocks are sold. This is charged by the
          depository (CDSL) and depository participant (Zerodha).
          <br />
          <br />
          Female demat account holders (as first holder) will enjoy a discount
          of ₹0.25 per transaction.
          <br />
          <br />
          Debit transactions of mutual funds & bonds get an additional discount
          of ₹0.25.
          <br />
          <br />
          Pledging charges
          <br />
          <br />
          ₹30 + GST per pledge request per ISIN.
          <br />
          <br />
          <b>
            AMC (Account maintenance charges)
            <br />
            <br />
          </b>
          For BSDA demat account: Zero charges if the holding value is less than
          ₹4,00,000. To learn more about BSDA, Click here
          <br />
          <br />
          For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90
          days). To learn more about AMC, Click here
          <br />
          <br />
          <b>
            Corporate action order charges
            <br />
            <br />
          </b>
          ₹20 plus GST will be charged for OFS / buyback / takeover / delisting
          orders placed through Console.
          <br />
          <br />
          <b>
            Off-market transfer charges
            <br />
            <br />
          </b>
          ₹25 or 0.03% of the transfer value (whichever is higher).
          <br />
          <br />
          <b>
            Physical CMR request
            <br />
            <br />
          </b>
          First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
          subsequent requests.
          <br />
          <br />
          <b>
            Payment gateway charges
            <br />
            <br />
          </b>
          ₹9 + GST (Not levied on transfers done via UPI)
          <br />
          <br />
          <b>
            Delayed Payment Charges
            <br />
            <br />
          </b>
          Interest is levied at 18% a year or 0.05% per day on the debit balance
          in your trading account. Learn more.
          <br />
          <br />
          <b>
            Disclaimer
            <br />
            <br />
          </b>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
          <br />
        </p>
      </div>
    </>
  );
};

export default Hero;
