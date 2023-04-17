import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SliderSosmed() {
  const slides = (path: number) => {
    return (
      <div className="lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 mx-auto rounded-xl hover:bg-green/70 py-3 px-3">
        <Image src={`/icon/sosmed-${path}.svg`} alt="sosmed" width={500} height={500} />
      </div>
    );
  };

  return (
    <div className="lg:w-8/12 h-auto w-10/12 my-10 mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        breakpoints={{
          380: {
            width: 380,
            slidesPerView: 3.6,
          },
          768: {
            width: 768,
            slidesPerView: 4.6,
          },
        }}
        navigation={{
          nextEl: '.swiper-navigation-next',
          prevEl: '.swiper-navigation-prev',
        }}>
        <SwiperSlide>{slides(1)}</SwiperSlide>
        <SwiperSlide>{slides(2)}</SwiperSlide>
        <SwiperSlide>{slides(3)}</SwiperSlide>
        <SwiperSlide>{slides(5)}</SwiperSlide>
        <SwiperSlide>{slides(6)}</SwiperSlide>
        <SwiperSlide>{slides(7)}</SwiperSlide>
      </Swiper>
      <button
        type="button"
        className="swiper-navigation-prev z-10 lg:h-20 lg:w-20 w-10 h-10 absolute top-3 lg:-left-16 md:-left-8 -left-10">
        <Image src="/icon/left-arrow.svg" alt="arrow" height={500} width={500} />
      </button>
      <button
        type="button"
        className="absolute z-10 lg:-right-16 -right-10 top-3 swiper-navigation-next lg:h-20 md:-right-8 lg:w-20 w-10 h-10">
        <Image src="/icon/right-arrow.svg" alt="arrow" height={500} width={500} />
      </button>
    </div>
  );
}
