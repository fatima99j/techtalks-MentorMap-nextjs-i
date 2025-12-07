import React from "react";

import HeroText from "../HeroText";
import HeroCurveBackground from "../HeroCurveBackground";
import HeroImage from "../HeroImage";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#e0e7ff] via-[#f7f7f7] to-[#ecfeff] min-h-screen">
      <div className="container--common !pr-0">
        <HeroCurveBackground />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 xl:gap-6">
          {/* Left Side */}
          <HeroText />

          {/*Right  Side */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
