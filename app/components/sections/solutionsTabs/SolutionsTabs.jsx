"use client";
import React, { useState } from "react";
import { SolutionsData } from "./data";
import Image from "next/image";

function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState(SolutionsData[0]);
  return (
    <main className="w-full items-start justify-start flex flex-col px-4 lg:px-10 py-12 ">
      <div className="w-full items-center justify-center flex-col-1 lg:flex">
        <div className="w-full items-start justify-start flex flex-col h-full lg:mb-0 mb-12">
          {/* badge */}
          <span className="py-6 flex space-x-1 items-center justify-center mb-2">
            <p className="px-2 py-[2px] rounded-full bg-black text-white text-xs font-semibold capitalize">
              vortex solutions
            </p>
            <p className="text-xs font-semibold capitalize">TIME SAVING</p>
          </span>
          <h1 className="font-bold text-2xl md:text-5xl w-full md:w-2/3 pb-8">
            {activeTab.title}
          </h1>
          <p className="w-full md:w-[80%] text-black/50 font-semibold leading-6">
            {activeTab.desc}
          </p>
        </div>
        <div className="w-full items-center justify-center flex">
          <span className="md:w-[500px] md:h-[500px] items-center justify-center flex">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              height={500}
              width={500}
            />
          </span>
        </div>
      </div>
      <div className="lg:flex flex-col-1 items-center justify-between w-full space-y-8 lg:space-y-0 lg:space-x-8 mt-12 lg:mt-0">
        {SolutionsData.map((tab) => (
          <Tab
            tab={tab}
            key={tab.id}
            setActiveTab={setActiveTab}
            activeTab={activeTab.id}
          />
        ))}
      </div>
    </main>
  );
}

export default SolutionsTabs;

export const Tab = ({ tab, setActiveTab, activeTab }) => {
  return (
    <div
      onClick={() => setActiveTab(tab)}
      className="flex flex-col items-start justify-center w-full cursor-pointer"
    >
      <div className="flex space-x-5 py-6 px-4">
        <span className="rounded-lg bg-gray-100 p-6">
          <>{tab.icon}</>
        </span>
        <h1 className="self-center w-2/3 text-xl font-bold">{tab.title}</h1>
      </div>
      <div className="relative items-start justify-start flex flex-col h-3 rounded-full w-full">
        <span className="h-1 rounded-full w-full bg-gray-100 absolute" />
        <span
          className={`h-1 rounded-full bg-black/90 absolute smooth ${
            activeTab === tab.id ? "w-[100%]" : "w-[0%]"
          }`}
        />
      </div>
    </div>
  );
};
