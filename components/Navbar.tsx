import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex w-full lg:py-8 py-6 text-white items-center justify-between left-0 top-0 fixed">
      <div className="flex lg:ml-3 ml-0 cursor-pointer justify-center items-center lg:w-2/12 w-1/4">
        <Image src="./icon/find-trend.svg" alt="Fint Trend" width={40} height={40} />
        <h1 className="font-efrra font-bold text-2xl ml-2 hidden md:block">Findtrend</h1>
      </div>
      <button onClick={() => setMenu(!menu)} className="flex flex-col gap-4 absolute right-5 lg:hidden">
        <span
          className={`w-6 h-[2px] bg-white origin-top-left ${
            menu ? 'rotate-45 translate-x-[1px]' : ''
          } transition-all`}></span>
        <span
          className={`w-6 h-[2px] bg-white origin-top-left ${
            menu ? '-rotate-45 -translate-y-[1px]' : ''
          } transition-all`}></span>
      </button>

      <div
        className={`flex items-center lg:justify-between lg:space-y-0 space-y-8 lg:10/12 w-full flex-wrap lg:flex-nowrap absolute lg:static bg-black lg:bg-transparent lg:ml-32 left-0 top-24 h-screen lg:h-auto flex-col lg:flex-row transition-transform duration-500 lg:-translate-x-0 ${
          menu ? '' : '-translate-x-full'
        } `}>
        <ul className="flex font-effra items-center flex-wrap lg:flex-nowrap lg:space-x-7 space-x-0 lg:w-7/12 lg:flex-row flex-col justify-center lg:space-y-0 space-y-9">
          <li className="text-lg text-center cursor-pointer">About</li>
          <li className="text-lg text-center cursor-pointer">How it work</li>
          <li className="text-lg text-center cursor-pointer">Pricing</li>
          <li className="text-lg text-center cursor-pointer">Solution </li>
          <li className="text-lg text-center cursor-pointer">Features </li>
        </ul>

        <div className="flex space-y-8 lg:space-y-0 items-center font-efrra lg:space-x-7 lg:w-3/12 flex-wrap lg:flex-nowrap justify-center flex-col lg:flex-row">
          <button className="text-lg">Login</button>
          <button className="text-lg bg-white py-1 px-6 rounded-full text-black hover:bg-white/80">Register</button>
        </div>
      </div>
    </nav>
  );
}
