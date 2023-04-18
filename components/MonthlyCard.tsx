import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import morkCard from '../public/utils/pricingData.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MonthlyCard() {
  const [datas, setDatas] = useState(morkCard);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        380: {
          slidesPerView: 1,
        },
      }}
      navigation
      pagination={{ clickable: true }}>
      {datas.month.map((data) => (
        <SwiperSlide key={data.type}>
          <div
            className={`lg:w-10/12 w-9/12 mx-auto ${
              data.type === 'Regular' ? 'bg-green' : 'bg-white '
            } lg:px-5 px-3 py-5 rounded-2xl`}>
            <div className="w-full flex flex-col">
              <h2 className="font-efrra lg:text-4xl md:text-3xl text-2xl font-bold">{data.type}</h2>
              <p className="font-efrra lg:text-lg md:text-base text-sm">{data.description}</p>
            </div>
            <hr className="border-t border-t-black/40 my-2" />
            <div className="lg:w-8/12 md:w-8/12 w-7/12 flex relative">
              <h3 className="font-efrra font-bold text-4xl md:text-5xl lg:text-6xl">
                {Intl.NumberFormat('id-ID', {
                  notation: 'compact',
                }).format(data.price)}
              </h3>
              <p className="font-efrra md:text-base lg:text-lg text-sm absolute right-0 lg:right-0 md:right-0 lg:bottom-2 bottom-0">
                /{data.long}
              </p>
            </div>
            <div className="w-full mt-5 h-[205px] flex flex-col space-y-2">
              {Object.values(data.option).map((option, index) => (
                <p key={index} className="flex items-center">
                  &#10003; <span className="ml-2 font-efrra md:text-base text-sm">{option}</span>
                </p>
              ))}
            </div>
            <div className="flex justify-center mt-2 lg:mt-10">
              <button
                className={`font-efrra md:text-base text-sm rounded-full py-2 px-5 ${
                  data.type === 'Regular' ? 'bg-black text-white hover:bg-black/80' : 'bg-green hover:bg-green/80'
                } `}>
                Start Free Trial
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
