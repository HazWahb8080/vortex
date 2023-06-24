import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function Clients() {
  return (
    <main className="w-full items-center justify-center flex flex-col mt-36">
      <h2 className="mb-12 font-bold text-sm text-[#043C39]">
        Transforming the Remote Working
      </h2>
      <Marquee className="w-full space-x-20 py-2">
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/nike.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/marvel.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/amd.svg"
          className="marquee__item"
        />

        <Image
          alt="logo"
          height={100}
          width={100}
          src="/amazon.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/nike.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/dropcam.svg"
          className="marquee__item"
        />

        <Image
          alt="logo"
          height={100}
          width={100}
          src="/nike.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/marvel.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/amazon.svg"
          className="marquee__item"
        />

        <Image
          alt="logo"
          height={100}
          width={100}
          src="/amd.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/nike.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/marvel.svg"
          className="marquee__item"
        />

        <Image
          alt="logo"
          height={100}
          width={100}
          src="/amd.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/nike.svg"
          className="marquee__item"
        />
        <Image
          alt="logo"
          height={100}
          width={100}
          src="/amazon.svg"
          className="marquee__item"
        />
      </Marquee>
    </main>
  );
}

export default Clients;
