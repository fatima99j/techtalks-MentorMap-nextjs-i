import React from "react";
import hero from "@/public/hero.webp";

import Image from "next/image";
import HeroText from "./HeroText";
import HeroCurveBackground from "./HeroCurveBackground";

export default function Hero() {
  return (
    <section className="relative gradient-section min-h-screen">
      <HeroCurveBackground />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 xl:gap-6 max-w-400 mx-auto px-8">
        {/* Left Side */}
        <HeroText />

        {/*Right  Side */}
        <div className="w-full aspect-square relative overflow-hidden shrink-0">
          <Image
            src={hero}
            alt="Two professionals collaborating on a laptop – representing mentorship and career guidance"
            fill
            priority
            placeholder="blur"
            quality={100}
            className="object-cover clip-diagonal rounded-lg lg:rounded-none"
          />
          {/* Hay la ta3mel fade s8er lal sora 3al yamen */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/100 pointer-events-none bg-gradient-to-r from-transparent to-[#f7f7f7]  "></div>
        </div>
      </div>
    </section>
  );
}
