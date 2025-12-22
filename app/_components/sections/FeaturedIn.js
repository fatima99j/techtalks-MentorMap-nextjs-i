import React from "react";
import TechTalksLogo from "@/public/techtalks.webp";
import Image from "next/image";

export default function FeaturedIn() {
  return (
    <section className="py-12 sm:py-15">
      <div className="container--common">
        <p className="text-center text-gray-500 text-sm sm:text-base font-semibold tracking-wider uppercase mb-4 sm:mb-5">
          Featured In
        </p>

        <div className="flex items-center justify-center">
          <a
            href="https://techtalkslb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
              <Image
                alt="TechTalks Logo"
                fill
                src={TechTalksLogo}
                placeholder="blur"
                className="object-contain"
              />
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl tracking-tight text-[#8B9FAC] mr-7 sm:mr-8">
              TechTalks
            </h2>
          </a>
        </div>
      </div>
    </section>
  );
}
