"use client";
import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButtonComponent = (): React.JSX.Element => {
  const swiper = useSwiper();

  return (
    <div className="absolute top-0 z-10 w-full h-full  flex justify-between text-secondary">
      <button
        title="previous"
        className="h-full"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <div className="w-5 h-[1px] bg-primary" />
      </button>
      <button
        title="next"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <div className="w-5 h-[1px] bg-primary" />
      </button>
    </div>
  );
};

export default SwiperButtonComponent;
