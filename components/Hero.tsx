import Image from 'next/image';
import React from 'react';
import Container from './Container';

export default function Hero() {
  return (
    <Container>
      <div className="relative flex h-auto w-full flex-col items-center gap-7 bg-black bg-hero bg-cover text-white">
        <div className="mt-32 flex flex-col gap-3 lg:mt-52">
          <p className="text-center font-efrra text-4xl font-extrabold md:text-5xl lg:text-7xl">Minimize your tabs.</p>
          <p className="text-center font-efrra text-4xl font-extrabold md:text-5xl lg:text-7xl">Find the trends!</p>
        </div>
        <div className="flex w-10/12 justify-center md:w-6/12 lg:w-6/12">
          <p className="text-center font-efrra text-sm md:text-base lg:text-lg">
            Don’t let your computer memories consumes all of those browser tabs. Findtrend let you gathers all of your
            favorite website into one place.
          </p>
        </div>
        <div className="ml-0 flex w-10/12 items-center justify-center gap-4 md:ml-32">
          <button className="rounded-full bg-green px-8 py-4 font-efrra text-xs font-bold text-black hover:bg-green/80 lg:text-lg">
            Get Started 🔥
          </button>
          <Image src="/img/arrow-img-hero.png" className="hidden md:block" alt="hero-img" width={100} height={70} />
        </div>

        <div className="relative mt-12 flex h-auto w-full flex-wrap justify-center pb-52 md:w-11/12 lg:mt-24 lg:w-8/12 lg:flex-nowrap lg:justify-start">
          <div className="shadow-card-sosmed card-gradient static z-[4] flex h-16 -rotate-[4deg] items-center gap-2 bg-[#181818] px-14 lg:absolute">
            <Image src="/icon/twitter.svg" alt="twitter" width={32} height={32} />
            <p>Cryptopunk - Search</p>
            <Image src="/icon/cancel.svg" alt="cancel" className="absolute right-3 z-10" width={15} height={15} />
          </div>
          <div className="shadow-card-sosmed card-gradient static left-40 top-11 z-[3] flex rotate-2 items-center gap-2 bg-[#181818] px-10 py-4 lg:absolute">
            <Image src="/icon/pinterest.svg" alt="pinterest" width={32} height={32} />
            <p>Popular Design - Search</p>
            <Image src="/icon/cancel.svg" alt="cancel" className="absolute right-3 z-10" width={15} height={15} />
          </div>
          <div className="shadow-card-sosmed card-gradient static right-48 z-[2] flex -rotate-2 items-center gap-2 bg-[#181818] px-10 py-4 lg:absolute">
            <Image src="/icon/facebook.svg" alt="facebook" width={30} height={30} className="h-auto w-auto" />
            <p>Product Design - Search</p>
            <Image src="/icon/cancel.svg" alt="cancel" className="absolute right-3 z-10" width={15} height={15} />
          </div>
          <div className="shadow-card-sosmed card-gradient static right-0 top-10 flex rotate-[4deg] items-center gap-2 bg-[#181818] px-14 py-4 lg:absolute">
            <Image src="/icon/basket.svg" alt="basket" width={32} height={32} />
            <p>Elon Musk - Search</p>
            <Image src="/icon/cancel.svg" alt="cancel" className="absolute right-3 z-10" width={15} height={15} />
          </div>
        </div>
      </div>
    </Container>
  );
}
