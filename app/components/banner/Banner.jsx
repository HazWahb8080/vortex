"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function Banner() {
  return (
    <main className="w-full items-center justify-center flex my-24 px-12 md:px-20">
      <div
        className="rounded-2xl px-6 md:px-12 md:py-16 py-12 items-center justify-between 
      md:flex flex-col-1 bg-[#030343] shadow-2xl space-y-4 md:space-y-0 w-full"
      >
        <h1 className="text-white text-4xl md:text-5xl break-words font-semibold tracking-tighter w-full">
          Join Hub and increase your <br /> productivity.
        </h1>
        <button
          className="bg-white px-8 rounded-full text-[#030343]
         overflow-hidden flex smooth hover:bg-black group hover:shadow-2xl hover:shadow-black/80
          hover:text-white h-[70px] md:min-w-[200px] space-x-4 items-center justify-center"
        >
          <div className="flex flex-col space-y-2 items-center justify-center relative h-full">
            <span className="w-full flex group-hover:-translate-y-12 smooth duration-500">
              <p className="group-hover:text-black smooth duration-500">
                sign up free
              </p>
            </span>
            <span className="absolute -bottom-[70px] w-full group-hover:-translate-y-[95px] smooth duration-500">
              <p className="group-hover:text-white smooth duration-500">
                sign up free
              </p>
            </span>
          </div>
          <ArrowRightIcon className="h-4 w-4 self-center" />
        </button>
      </div>
    </main>
  );
}

export default Banner;
