/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { tabsData } from "./data";
import { motion } from "framer-motion";

function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0]);
  return (
    <main
      className="w-full bg-[#F4F7FF] items-center justify-start
     flex flex-col min-h-[50vh] py-12 px-6 my-12 smooth"
    >
      <h1 className="text-[#01213A] pt-10 font-bold text-2xl md:text-4xl ">
        Automate your notifications.
      </h1>
      <p className="w-full md:w-[40%] text-center text-black/40 font-semibold mt-5">
        Import a pre-built section block with a single click or save your own
        custom block to re-use on other pages.
      </p>
      {/* tabs */}
      <div className="flex-col-1 md:flex items-center justify-between md:px-12 mt-12">
        <span className="w-[600px] h-[600px] items-center justify-center flex">
          <Image
            src={activeTab.image}
            alt={activeTab.title}
            height={600}
            width={600}
          />
        </span>

        <div className="flex flex-col items-end justify-end h-full">
          {tabsData.map((tab) => (
            <Tab
              tab={tab}
              key={tab.id}
              active={activeTab.id}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default FeaturesTabs;

export const Tab = ({ tab, active, setActiveTab }) => {
  return (
    <div
      onClick={() => setActiveTab(tab)}
      className={`rounded-lg px-2 py-2 items-center justify-center flex flex-col w-[50%] smooth my-2 ${
        active === tab.id
          ? "bg-white"
          : "bg-transparent cursor-pointer hover:bg-white"
      }`}
    >
      <h1 className="py-4 w-full text-left font-semibold">{tab.title}</h1>
      {active === tab.id && <p className="w-full text-xs smooth">{tab.desc}</p>}
    </div>
  );
};
