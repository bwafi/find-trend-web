import React from 'react';
import SliderSosmed from './SliderSosmed';
import Tweet from './Tweet';

export default function ConnectSection() {
  return (
    <div className="bg-white w-full h-auto py-10">
      <div className="container w-full mx-auto px-5">
        <div className="w-full">
          <h2 className="font-efrra text-center font-bold lg:text-6xl text-4xl">All platform connect to Findtrend</h2>
        </div>
        <SliderSosmed />
        <Tweet />
        <div className="my-24 flex justify-center">
          <button className="font-efrra md:text-base lg:text-lg text-sm bg-black rounded-full py-2 px-5 text-white hover:bg-black/80 shadow-lg hover:shadow-2xl">
            View More Trend
          </button>
        </div>
      </div>
    </div>
  );
}
