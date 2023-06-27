"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { stepsData } from "./data";
import { useInView, motion } from "framer-motion";
import { childVariants, staggerVariants } from "@/app/utils/utils";

function Process() {
  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <main ref={ref} className="w-full px-6 lg:px-16 mt-24">
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full items-center justify-center flex-col-1 lg:flex"
      >
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full items-start justify-start flex flex-col h-full lg:mb-0 mb-12"
        >
          {/* badge */}
          <motion.span
            variants={childVariants}
            className="py-6 flex space-x-1 items-center justify-center mb-2"
          >
            <p className="px-2 py-[2px] rounded-full bg-black text-white text-xs font-semibold capitalize">
              vortex solutions
            </p>
            <p className="text-xs font-semibold capitalize">TIME SAVING</p>
          </motion.span>
          <motion.h1
            variants={childVariants}
            className="font-bold text-2xl md:text-5xl xl:text-6xl w-full md:w-2/3 xl:w-full pb-8"
          >
            Track your daily activity.
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="w-full md:w-[80%] text-black/50 font-semibold leading-7 text-sm md:text-lg"
          >
            The latest design trends meet hand-crafted templates in Hub
            Collection. Use pre-built sections to speed up your design process.
          </motion.p>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="w-full items-center justify-center flex"
        >
          <span className="md:w-[650px] md:h-[650px] items-center justify-center flex">
            <Image
              src="/images/process/process-image.jpg"
              alt="process-image"
              height={650}
              width={650}
            />
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        variants={childVariants}
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
      </motion.div>
    </main>
  );
}

export default Process;
