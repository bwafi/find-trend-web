import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className="w-full relative flex bg-cover h-auto bg-hero text-white flex-col items-center gap-7">
      <div className="flex lg:mt-52 mt-32 flex-col gap-3">
        <p className="text-center lg:text-7xl md:text-5xl text-4xl font-efrra font-extrabold">Minimize your tabs.</p>
        <p className="text-center lg:text-7xl md:text-5xl text-4xl font-efrra font-extrabold">Find the trends!</p>
      </div>
      <div className="lg:w-6/12 md:w-6/12 w-10/12 flex justify-center">
        <p className="text-center font-efrra lg:text-lg md:text-base text-sm">
          Don’t let your computer memories consumes all of those browser tabs. Findtrend let you gathers all of your
          favorite website into one place.
        </p>
      </div>
      <div className="flex justify-center md:ml-32 ml-0 gap-4 items-center w-10/12">
        <button className="bg-green px-8 py-4 font-efrra lg:text-lg text-xs font-bold rounded-full text-black">
          Get Started 🔥
        </button>
        <Image src="/img/arrow-img-hero.png" className="hidden md:block" alt="hero-img" width={100} height={70} />
      </div>

      <div className="lg:w-8/12 md:w-7/12 relative lg:flex-nowrap lg:justify-start justify-center flex h-auto lg:mt-24 mt-12 pb-52 flex-wrap w-full">
        <div className="bg-[#181818] static z-[4] -rotate-[4deg] flex items-center gap-2 h-16 shadow-card-sosmed px-14 lg:absolute card-gradient">
          <Image src="/icon/twitter.svg" alt="twitter" width={32} height={32} />
          <p>Cryptopunk - Search</p>
          <Image src="/icon/cancel.svg" alt="cancel" className="z-10 absolute right-3" width={15} height={15} />
        </div>
        <div className="bg-[#181818] rotate-2 top-11 left-40 flex items-center gap-2 py-4 z-[3] shadow-card-sosmed px-10 static lg:absolute card-gradient">
          <Image src="/icon/pinterest.svg" alt="pinterest" width={32} height={32} />
          <p>Popular Design - Search</p>
          <Image src="/icon/cancel.svg" alt="cancel" className="z-10 absolute right-3" width={15} height={15} />
        </div>
        <div className="bg-[#181818] -rotate-2 z-[2] right-48 flex items-center gap-2 py-4 shadow-card-sosmed px-10 static lg:absolute card-gradient">
          <Image src="/icon/facebook.svg" alt="facebook" width={30} height={30} />
          <p>Product Design - Search</p>
          <Image src="/icon/cancel.svg" alt="cancel" className="z-10 absolute right-3" width={15} height={15} />
        </div>
        <div className="bg-[#181818] rotate-[4deg] top-10 right-0 flex items-center gap-2 py-4 shadow-card-sosmed px-14 static lg:absolute card-gradient">
          <Image src="/icon/basket.svg" alt="basket" width={32} height={32} />
          <p>Elon Musk - Search</p>
          <Image src="/icon/cancel.svg" alt="cancel" className="z-10 absolute right-3" width={15} height={15} />
        </div>
      </div>
    </div>
  );
}
