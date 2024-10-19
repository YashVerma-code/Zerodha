import React from 'react';

const MarginTable = () => {
  return (
    <div className="flex flex-wrap justify-center p-4">
        <h1 className='w-full m-2 text-3xl  p-3'>Equity</h1>
      <div className=" border-gray-200 p-6 w-96 shadow-md mx-4">
        
        <div className="mb-4">
          <p className="text-gray-500">Available margin</p>
          <p className="text-blue-500 text-xl font-semibold">1,00,000.00</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Used margin</p>
          <p className="text-black text-xl font-semibold">0.00</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Available cash</p>
          <p className="text-black text-xl font-semibold">1,00,000.00</p>
        </div>
        <hr className="my-4" />
        <div className="space-y-2">
          {[
            { label: 'Opening balance', value: '1,00,000.00' },
            { label: 'Payin', value: '0.00' },
            { label: 'Payout', value: '0.00' },
            { label: 'SPAN', value: '0.00' },
            { label: 'Delivery margin', value: '0.00' },
            { label: 'Exposure', value: '0.00' },
            { label: 'Options premium', value: '0.00' },
            { label: 'Collateral (Liquid funds)', value: '0.00' },
            { label: 'Collateral (Equity)', value: '0.00' },
            { label: 'Total collateral', value: '0.00' },
          ].map((item) => (
            <div className="flex justify-between" key={item.label}>
              <p className="text-gray-500">{item.label}</p>
              <p className="text-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Column */}
      <div className="border border-gray-200 p-6 w-96 shadow-md mx-4">
        <div className="mb-4">
          <p className="text-gray-500">Available margin</p>
          <p className="text-blue-500 text-xl font-semibold">50,000.00</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Used margin</p>
          <p className="text-black text-xl font-semibold">0.00</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Available cash</p>
          <p className="text-black text-xl font-semibold">50,000.00</p>
        </div>
        <hr className="my-4" />
        <div className="space-y-2">
          {[
            { label: 'Opening balance', value: '50,000.00' },
            { label: 'Payin', value: '0.00' },
            { label: 'Payout', value: '0.00' },
            { label: 'SPAN', value: '0.00' },
            { label: 'Delivery margin', value: '0.00' },
            { label: 'Exposure', value: '0.00' },
            { label: 'Options premium', value: '0.00' },
            { label: 'Collateral (Liquid funds)', value: '0.00' },
            { label: 'Collateral (Equity)', value: '0.00' },
            { label: 'Total collateral', value: '0.00' },
          ].map((item) => (
            <div className="flex justify-between" key={item.label}>
              <p className="text-gray-500">{item.label}</p>
              <p className="text-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarginTable;
