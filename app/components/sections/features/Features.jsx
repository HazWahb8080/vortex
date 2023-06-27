"use client";
import React, { useRef } from "react";
import { FeaturesData } from "./data";
import { motion, useInView } from "framer-motion";
import { childVariants, staggerVariants } from "@/app/utils/utils";

function Features() {
  return (
    <main className="w-full px-6 md:px-12 items-center justify-center flex py-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {FeaturesData.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </main>
  );
}

export default Features;

export const FeatureItem = ({ feature }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-end space-y-4"
      variants={staggerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.img
        src={feature.image}
        alt={feature.title}
        height={100}
        width={150}
        className="object-center object-cover mb-4"
        variants={childVariants}
      />
      <motion.h1
        variants={childVariants}
        className="text-[#01213A] text-lg font-semibold"
      >
        {feature.title}
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="text-sm font-semibold text-black/60 text-center leading-5"
      >
        {feature.desc}
      </motion.p>
    </motion.div>
  );
};
