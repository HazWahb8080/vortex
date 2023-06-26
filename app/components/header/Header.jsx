"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Dropdown } from "@nextui-org/react";

function Header() {
  const [activeNavLink, setActiveNavLink] = useState(navLinks[0]);
  return (
    <header className="px-2 w-full lg:w-[85%] pb-2 pt-4 items-center justify-between flex border-b border-b-black/5">
      <Image
        height={30}
        width={100}
        alt="vortex-logo"
        className="object-cover object-center"
        src="/vortex.png"
      />
      <div className="w-full space-x-6 md:space-x-8 lg:space-x-24 hidden lg:flex items-center justify-center">
        {navLinks.map((link) => (
          <p
            onClick={() => setActiveNavLink(link)}
            key={link}
            className={`text-sm font-semibold  hover:text-black smooth cursor-pointer ${
              activeNavLink === link ? "text-black" : "text-black/60"
            }`}
          >
            {link}
          </p>
        ))}
      </div>
      {/* on small screens */}
      <div className="flex lg:hidden w-full px-2 items-end justify-end">
        <Dropdown>
          <Dropdown.Button flat>Home</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            {navLinks.map((link) => (
              <Dropdown.Item
                className={`text-sm font-semibold  hover:text-black smooth cursor-pointer ${
                  activeNavLink === link ? "text-black" : "text-black/60"
                }`}
                onClick={() => setActiveNavLink(link)}
                key={link}
              >
                {link}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <span className="min-w-[30vw] lg:min-w-[10vw] space-x-4 flex items-center justify-end">
        <button
          className="flex w-full space-x-2 items-center bg-[#EDF2F6]
         justify-center rounded-3xl py-4 smooth hover:bg-black hover:text-white hover:shadow-xl group  "
        >
          <p className="text-xs">Join Vortex</p>
          <ArrowRightIcon
            className="h-4 w-4 group-hover:translate-x-1 smooth
           group-hover:stroke-white"
          />
        </button>
      </span>
    </header>
  );
}

export default Header;

export const navLinks = ["Home", "Overview", "Testimonials", "pricing", "Help"];
