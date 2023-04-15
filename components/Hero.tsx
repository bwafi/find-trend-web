import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className="w-full flex bg-cover h-screen bg-hero text-white flex-col items-center gap-7">
      <div className="flex mt-52 flex-col">
        <p className="text-center text-7xl font-efrra font-extrabold">Minimize your tabs.</p>
        <p className="text-center text-7xl font-efrra font-extrabold">Find the trends!</p>
      </div>
      <div className="w-6/12 flex justify-center">
        <p className="text-center font-efrra text-lg">
          Don’t let your computer memories consumes all of those browser tabs. Findtrend let you gathers all of your
          favorite website into one place.
        </p>
      </div>
      <div className="flex justify-end items-center w-4/12">
        <button className="bg-green px-8 py-4 font-efrra text-lg font-bold rounded-full text-black">
          Get Started 🔥
        </button>
        <Image src="/img/arrow-img-hero.png" alt="hero-img" width={100} height={70} />
      </div>
    </div>
  );
}
