import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="h-auto w-full bg-green">
      <div className="container mx-auto w-full px-5">
        <div className="my-16 flex flex-col items-center justify-center md:my-20 lg:my-24">
          <h2 className="w-full text-center font-efrra text-3xl font-bold md:text-5xl lg:text-7xl">
            Open new tabs is sh*t
          </h2>
          <div className=" relative mt-24 flex w-11/12 items-center justify-center rounded-2xl bg-white px-28 py-20 shadow-md md:w-7/12 lg:mt-16 lg:w-4/12 lg:px-32 lg:py-28">
            <Image
              src="/img/arrow-2.png"
              alt="arrow"
              width={95}
              height={72}
              className="absolute -bottom-16 left-0 h-auto w-auto -rotate-45 lg:-left-28 lg:top-20 lg:rotate-0"
            />
            <div className="shadow-card-sosmed card-gradient absolute flex items-center gap-2 bg-[#181818] px-9 py-4 md:px-11">
              <Image src="/icon/find-trend.svg" alt="basket" width={32} height={32} />
              <p className="ml-2 text-white">Elon Musk - Search</p>
              <Image src="/icon/cancel.svg" alt="cancel" className="absolute right-3 z-10" width={15} height={15} />
            </div>
            <Image
              src="/img/arrow-3.png"
              alt="arrow"
              width={95}
              height={73}
              className="absolute -top-16 right-0 h-auto w-auto -rotate-[60deg] lg:-right-28 lg:top-14 lg:rotate-0"
            />
          </div>
          <p className="mt-28 w-full text-center font-efrra text-sm md:w-8/12 md:text-lg lg:mt-10 lg:w-6/12 lg:text-lg">
            A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to
            discover a trend with just one tab.
          </p>
        </div>
      </div>
    </div>
  );
}
