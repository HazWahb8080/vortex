"use client";
import Image from "next/image";
import React from "react";
import { stepsData } from "./data";

function Process() {
  return (
    <main className="w-full px-6 lg:px-16 mt-24">
      <div className="w-full items-center justify-center flex-col-1 lg:flex">
        <div className="w-full items-start justify-start flex flex-col h-full lg:mb-0 mb-12">
          {/* badge */}
          <span className="py-6 flex space-x-1 items-center justify-center mb-2">
            <p className="px-2 py-[2px] rounded-full bg-black text-white text-xs font-semibold capitalize">
              vortex solutions
            </p>
            <p className="text-xs font-semibold capitalize">TIME SAVING</p>
          </span>
          <h1 className="font-bold text-2xl md:text-5xl xl:text-6xl w-full md:w-2/3 xl:w-full pb-8">
            Track your daily activity.
          </h1>
          <p className="w-full md:w-[80%] text-black/50 font-semibold leading-7 text-sm md:text-lg">
            The latest design trends meet hand-crafted templates in Hub
            Collection. Use pre-built sections to speed up your design process.
          </p>
        </div>
        <div className="w-full items-center justify-center flex">
          <span className="md:w-[650px] md:h-[650px] items-center justify-center flex">
            <Image
              src="/images/process/process-image.jpg"
              alt="process-image"
              height={650}
              width={650}
            />
          </span>
        </div>
      </div>
      <div
        className="w-full items-center justify-center 
      md:flex flex-col-1 space-y-4 md:space-y-0 md:space-x-6 space-x-0 lg:-mt-12 mt-12"
      >
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="flex space-x-10 items-start justify-start group"
          >
            <span
              className="py-[3px] px-[11px] border border-black/20 rounded-full
             group-hover:bg-blue-600 group-hover:text-white smooth group-hover:border-transparent"
            >
              <p>{step.number}</p>
            </span>
            <span className="space-y-2">
              <h2 className="font-semibold">{step.title}</h2>
              <p className="text-sm w-[80%]">{step.desc}</p>
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Process;
