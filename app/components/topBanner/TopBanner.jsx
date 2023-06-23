import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function TopBanner() {
  return (
    <div className="w-full pb-12 pt-4 mb-4 banner-bg">
      <span className="flex space-x-4 text-[11px] items-start justify-center text-white">
        <p className="">Sign up and receive 20% bonus discount on checkout.</p>
        <span className="flex space-x-2 cursor-pointer group opacity-70 hover:opacity-100 smooth">
          <p>learn more</p>
          <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-3 smooth" />
        </span>
      </span>
    </div>
  );
}

export default TopBanner;
