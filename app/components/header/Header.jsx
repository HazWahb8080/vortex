"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Header() {
  const [activeNavLink, setActiveNavLink] = useState(navLinks[0]);
  return (
    <header className="w-full pt-2 pb-4 items-center justify-between flex border-b border-b-black/5">
      <Image
        height={30}
        width={100}
        alt="vortex-logo"
        className="object-cover object-center"
        src="/vortex.png"
      />
      <div className="w-full space-x-6 md:space-x-8 lg:space-x-24 flex items-center justify-center">
        {navLinks.map((link) => (
          <p
            onClick={() => setActiveNavLink(link)}
            key={link}
            className={`text-sm font-semibold text-black/60 hover:text-black smooth cursor-pointer ${
              activeNavLink === link && "text-black"
            }`}
          >
            {link}
          </p>
        ))}
      </div>
      <span className="min-w-[10vw] space-x-4 flex items-center justify-end">
        <button
          className="flex w-full space-x-2 items-center bg-[#EDF2F6]
         justify-center rounded-3xl py-4 smooth hover:bg-black hover:text-white hover:shadow-xl group  "
        >
          <p className="text-xs">Join Vortex</p>
          <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 smooth group-hover:stroke-white" />
        </button>
      </span>
    </header>
  );
}

export default Header;

export const navLinks = ["Home", "Overview", "Testimonials", "pricing", "Help"];