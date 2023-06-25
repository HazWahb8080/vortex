"use client";
import React, { useState } from "react";
import { PlayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

function Hero() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setscrollProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setscrollProgress(latest);
  });

  return (
    <main className="mb-24 min-h-screen w-full items-center justify-start flex flex-col pt-12">
      <span className="w-full z-50 items-center justify-center flex flex-col space-y-2 text-[#01213A]">
        <h2 className="text-6xl lg:text-[70px] font-semibold tracking-tight">
          Track your daily
        </h2>
        <h2 className="text-6xl lg:text-[70px] font-semibold tracking-tight">
          work
          <b className="banner-bg text-transparent bg-clip-text p-2">
            activity
          </b>
        </h2>
      </span>
      <h3 className="w-full lg:w-[45%] text-center text-gray-500 mt-8 text-lg">
        No more complex codes or boring designs. Creating an attractive and
        functional site has never been easier.
      </h3>
      <span className="w-full z-50 lg:flex items-center justify-center flex-col-1 lg:space-x-12 space-y-4 lg:space-y-0 mt-6">
        <button
          className="bg-[#0044EB] px-6 py-3 rounded-3xl text-white
         overflow-hidden flex smooth hover:bg-black group hover:shadow-2xl hover:shadow-black/80
          hover:text-white max-h-[7vh] min-w-[170px] space-x-4 "
        >
          <div className="flex flex-col space-y-6">
            <span className="w-full flex group-hover:-translate-y-12 smooth duration-500">
              <p>sign up free</p>
            </span>
            <span className="w-full flex group-hover:-translate-y-12 smooth duration-500">
              <p>sign up free</p>
            </span>
          </div>
          <ArrowRightIcon className="h-4 w-4 self-center" />
        </button>
        <button
          className="bg-transparent border border-black/30 hover:border-transparent px-6 py-3 rounded-3xl text-black
         overflow-hidden flex smooth hover:bg-black group hover:shadow-2xl hover:shadow-black/80
          hover:text-white min-w-[180px] max-w-96"
        >
          <span
            className="w-full flex group-hover:-translate-x-36 smooth group-hover:text-white
           duration-700 ml-2 group-hover:ml-0 space-x-2"
          >
            <PlayIcon className="h-4 w-4 self-center " />
            <p>watch Demo</p>
          </span>
          <span
            className="w-full flex group-hover:-translate-x-[120px] smooth
           duration-700 -mr-96 ml-4 group-hover:ml-0 space-x-2 group-hover:text-white"
          >
            <p>watch Demo</p>
            <PlayIcon className="h-4 w-4 self-center fill-blue-800 stroke-black" />
          </span>
        </button>
      </span>
      <span className="w-full items-center justify-center flex relative">
        <motion.img
          initial={{ scale: 1 }}
          style={{
            scale: 1 + scrollProgress * 0.5,
          }}
          src="/hero.jpg"
          width={1000}
          height={800}
          alt="hero-img"
          className="mt-12 object-cover object-center z-50"
        />
        <Image
          src="/circles.svg"
          width={1920}
          height={1080}
          alt="hero-circles"
          className="object-cover object-center absolute z-0 -bottom-48"
        />
      </span>
    </main>
  );
}

export default Hero;
