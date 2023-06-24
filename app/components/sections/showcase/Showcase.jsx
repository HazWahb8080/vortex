"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import { swiperData } from "./data";
import Image from "next/image";

function Showcase() {
  return (
    <main className="w-full items-center justify-center flex flex-col mt-24">
      <h1></h1>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        className="w-full items-center justify-center flex flex-col p-0 m-0"
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={slide}>
            <Image
              src={slide}
              alt={"swiper-slide-image"}
              key={slide}
              height={800}
              width={800}
              className="object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Showcase;
