/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import { swiperData } from "./data";

function Showcase() {
  return (
    <main className="w-full items-center justify-center flex flex-col mt-24">
      <h1 className="text-2xl md:text-5xl font-semibold mb-4">
        Available on iOS.
      </h1>
      <p className="md:w-[40%] w-full text-black/70 text-center mb-6">
        Open a beautiful store, increase your conversion rates and boost your
        sales in minutes with object-oriented UX.
      </p>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        className="mt-12 w-full items-center justify-center flex flex-col p-0 m-0 min-w-[200vw] overflow-hidden cursor-grab active:cursor-grabbing"
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={slide}>
            <img
              src={slide}
              alt={"swiper-slide-image"}
              key={slide}
              className="object-cover object-center h-full w-full"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Showcase;
