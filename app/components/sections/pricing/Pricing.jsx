"use client";
import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { pricingData } from "./data";
import { CheckIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export default function Pricing() {
  const [annually, setAnnually] = useState(true);
  return (
    <main
      className="w-full min-h-screen items-center justify-start 
    flex flex-col pb-12 pt-24 px-12 lg:px-20 bg-white"
    >
      <h1 className=" text-2xl lg:text-5xl text-[#181B31] font-bold">
        Simple Pricing
      </h1>
      <p className="text-[#86888D] text-lg lg:w-[35%] text-center mt-6 font-medium">
        Explore flexible solutions for your needs. Free plan is available for
        all existing customers.
      </p>
      <span
        role="group"
        className="lg:w-[50%] items-center justify-center flex space-x-4 mt-8"
      >
        <p
          className={classNames(
            annually ? "pricing_title" : "pricing_title-active"
          )}
        >
          Monthly
        </p>
        <Switch
          animated
          checked={true}
          size="lg"
          color="success"
          onClick={(e) => setAnnually(e.target.checked)}
        />
        <p
          className={classNames(
            annually ? "pricing_title-active" : "pricing_title"
          )}
        >
          Annually - save 30%
        </p>
      </span>
      {/* pricingData */}
      <div
        role="list"
        className="grid grid-cols-1 lg:grid-cols-7 w-full mt-24 md:-gap-10 gap-10"
      >
        {pricingData.map((plan) => (
          <Plan key={plan.id} plan={plan} annually={annually} />
        ))}
      </div>
    </main>
  );
}
const Plan = ({ plan, annually }) => {
  return (
    <div
      role="listitem"
      className={classNames(
        plan.title === "Popular"
          ? "from-[#030343] to-black bg-gradient-to-b text-white shadow-2xl shadow-black lg:col-span-3"
          : "bg-[#FFFFFF] text-[#18163E] border lg:col-span-2",
        "py-12 w-full rounded-sm items-center flex flex-col h-full"
      )}
    >
      <p className="font-medium text-md mb-8">{plan.title}</p>
      <span className="flex space-x-1 items-end justify-center">
        <p className="text-3xl">$</p>
        <h1 className="text-7xl font-medium">
          {annually ? plan.price.annually : plan.price.monthly}
        </h1>
      </span>
      <h2
        className={classNames(
          "text-xl mt-4 border-b pb-12 w-full text-center ml-2",
          plan.title === "Popular" ? "border-white/20" : "border-black/10"
        )}
      >
        {annually ? "Annually" : "Monthly"}
      </h2>
      <span
        className={classNames(
          "py-12 space-y-4 text-md font-medium border-b w-full pl-12 min-h-[50%]",
          plan.title === "Popular" ? "border-white/20" : "border-black/10"
        )}
      >
        {plan.included.map((item) => (
          <span key={item} className="flex space-x-4">
            <CheckIcon className="h-4 w-4 stroke-green-700" />
            <p className="">{item}</p>
          </span>
        ))}
      </span>
      <span className="w-full py-12 items-center justify-center flex flex-col">
        <button
          className={classNames(
            "rounded-full px-6 py-3 smooth hover:bg-red-600 hover:text-white hover:shadow-sm hover:shadow-black/5 hover:-translate-y-1",
            plan.title === "Popular" ? "bg-white text-black" : "bg-[#F4F5F8]"
          )}
        >
          Join this plan
        </button>
        <p
          className={classNames(
            plan.title === "Popular" ? "text-gray-100" : "text-black/70",
            "text-xs font-medium py-2 italic"
          )}
        >
          Get your 7 days trial
        </p>
      </span>
    </div>
  );
};
