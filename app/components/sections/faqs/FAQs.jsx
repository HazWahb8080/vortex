"use client";
import React, { useState } from "react";
import { Collapse } from "@nextui-org/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Data } from "./data";
import classNames from "classnames";
import Image from "next/image";

export default function FAQs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main
      className=" bg-transparent min-h-screen flex flex-col 
    w-full items-start justify-start pt-36 pb-20 px-6 md:px-12 lg:px-20 font-inter "
    >
      <div className="items-start justify-start flex flex-col w-full ">
        <span className="w-full justify-between items-center flex-col-1 md:flex">
          <h1 className="text-[#0c114b] text-4xl lg:text-5xl font-bold self-center">
            Frequently Asked Questions.
          </h1>
          <span className="flex space-x-3 items-end justify-end self-center">
            <p> support team</p>
            <Image
              src="/images/faqs/team.jpg"
              alt="team.jpg"
              width={100}
              height={100}
            />
          </span>
        </span>

        <div className="pt-12 w-full items-start justify-start flex flex-col mt-6">
          <Collapse.Group>
            {Data.map((acc, i) => (
              <Collapse
                key={acc.id}
                onClick={() =>
                  activeTab === i ? setActiveTab(-1) : setActiveTab(i)
                }
                expanded={i === 0}
                title={
                  <h1
                    className={classNames(
                      activeTab === i ? "text-black" : "text-black/70",
                      "font-semibold text-xl smooth"
                    )}
                  >
                    {acc.title}
                  </h1>
                }
                style={{ borderBottom: "solid 1px #00000015", width: "90vw" }}
                className="py-4"
                showArrow={false}
                contentLeft={
                  <ArrowRightIcon
                    className={classNames(
                      "h-4 w-4 smooth stroke-2 -ml-2",
                      activeTab === i
                        ? "stroke-black rotate-[45deg]"
                        : "stroke-black/60"
                    )}
                  />
                }
              >
                <p className="text-black/70 py-2 text-md px-4 font-semibold">
                  {acc.content}
                </p>
              </Collapse>
            ))}
          </Collapse.Group>
        </div>
      </div>
    </main>
  );
}
