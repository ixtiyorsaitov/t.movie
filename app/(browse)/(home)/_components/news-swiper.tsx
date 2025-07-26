"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import NewsCard from "./news-card";

const NewsSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCards]} // <-- EffectCards ni qo‘shdik
      effect="cards"
      grabCursor={true} // cards effekt uchun tavsiya etiladi
      //   navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full max-w-md" // responsive qilish uchun optional
    >
      <SwiperSlide>
        <NewsCard />
      </SwiperSlide>
      <SwiperSlide>
        <NewsCard />
      </SwiperSlide>
      <SwiperSlide>
        <NewsCard />
      </SwiperSlide>
      <SwiperSlide>
        <NewsCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default NewsSwiper;
