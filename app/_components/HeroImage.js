import Image from "next/image";
import React from "react";

import hero from "@/public/hero.webp";

export default function HeroImage() {
  return (
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
    </div>
  );
}
