/* eslint-disable @next/next/no-img-element */
"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import { testimonialData } from "./data";

function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <main className="w-full flex items-start justify-start mt-[30vh] px-6 md:px-20 bg-[#E3F0FF] py-12 md:py-24 md:space-x-6">
      <div className="items-start justify-start flex flex-col h-full lg:mb-0 mb-12">
        <span className="py-6 flex space-x-1 items-center justify-center mb-2">
          <p className="px-2 py-[2px] rounded-full bg-black text-white text-xs font-semibold capitalize">
            vortex solutions
          </p>
          <p className="text-xs font-semibold capitalize">TIME SAVING</p>
        </span>
        <h1 className="font-bold text-2xl md:text-5xl xl:text-6xl w-full md:w-2/3 xl:w-full pb-8">
          Trusted by global companies.
        </h1>
        <p className="w-full md:w-[80%] text-black/50 font-semibold leading-7 text-lg">
          The latest design trends meet hand-crafted templates in Hub
          Collection. Use pre-built sections to speed up your design process.
        </p>
        <div ref={ref} className="flex items-end justify-start space-x-12">
          <span className="py-12 space-y-4 items-start justify-end flex flex-col">
            <CountUp
              className="text-2xl lg:text-5xl font-bold tracking-wider"
              start={inView}
              end={4}
              suffix=".58"
              duration={5}
            />
            <Image
              width={120}
              height={100}
              src="/images/testimonials/stars.svg"
              alt="stars-image"
            />
            <p className="text-xs font-semibold text-left">
              The Best Rated App
            </p>
          </span>
          <span className="py-12 space-y-4 items-start justify-end flex flex-col">
            <CountUp
              className="text-3xl lg:text-7xl font-bold tracking-wider"
              start={inView}
              prefix="+"
              end={10}
              duration={5}
            />
            <p className="text-lg font-semibold text-left tracking-widest text-black/90">
              Million Installations
            </p>
          </span>
        </div>
      </div>
      {/* slider */}
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        className="mt-[10vh] w-full items-center justify-center flex p-0 m-0 cursor-grab active:cursor-grabbing"
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id + index}>
            <div className="w-full items-end justify-end space-y-10">
              <div className="items-center justify-start flex space-x-2">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="rounded-full object-center object-cover h-[70px] w-[70px]"
                />
                <p className="py-2 text-black/70 italic text-xs">
                  {testimonial.name}
                </p>
              </div>
              <h2 className="my-4 w-full break-words leading-10 tracking-tight text-xl font-semibold text-[#060511]">
                {testimonial.content}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Testimonials;
