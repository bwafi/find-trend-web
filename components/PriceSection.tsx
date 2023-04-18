import React, { useState } from 'react';
import MonthlyCard from './MonthlyCard';
import YearCard from './YearCard';

export default function PriceSection() {
  const [monthly, setMonthly] = useState(false);

  return (
    <div className="w-full bg-black py-20 h-auto">
      <div className="container px-5 w-full mx-auto">
        <div className="lg:w-7/12 w-full mx-auto">
          <h1 className="text-center text-white font-bold text-4xl lg:text-6xl md:text-5xl">Get your best deal</h1>
        </div>
        <div className="lg:w-4/12 w-10/12 mx-auto my-10">
          <button
            onClick={() => setMonthly(!monthly)}
            className="lg:w-6/12 md:w-4/12 w-8/12 mx-auto flex justify-center items-center space-x-3">
            <span
              className={`font-efrra md:text-base lg:text-lg text-sm transition-colors duration-300 ${
                monthly ? 'text-white/50' : 'text-white'
              }`}>
              Monthly
            </span>
            <div className="lg:w-14 lg:h-6 w-11 h-5 rounded-full bg-white flex items-center relative ">
              <div
                className={`lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] absolute bg-green rounded-full transition-transform ease-in-out duration-300  ${
                  monthly ? 'lg:translate-x-[34px] translate-x-[26px]' : ''
                }`}></div>
            </div>
            <span
              className={`font-efrra md:text-base lg:text-lg text-sm transition-colors duration-300 ${
                monthly ? 'text-white' : 'text-white/50'
              }`}>
              Yearly
            </span>
          </button>
        </div>
        {monthly ? (
          <div className="w-full mx-auto">
            <YearCard />
          </div>
        ) : (
          <div className="w-full mx-auto">
            <MonthlyCard />
          </div>
        )}
      </div>
    </div>
  );
}
