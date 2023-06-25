import React from "react";
import { FeaturesData } from "./data";
import Image from "next/image";

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
  return (
    <div className="flex flex-col items-center justify-end space-y-4">
      <Image
        src={feature.image}
        alt={feature.title}
        height={100}
        width={150}
        className="object-center object-cover mb-4"
      />
      <h1 className="text-[#01213A] text-lg font-semibold">{feature.title}</h1>
      <p className="text-sm font-semibold text-black/60 text-center leading-5">
        {feature.desc}
      </p>
    </div>
  );
};
