import Image from "next/image";

import TechTalksLogo from "@/public/techtalks.webp";

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
            className="flex items-center justify-center gap-0.5"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
              <Image
                alt="TechTalks Logo"
                fill
                src={TechTalksLogo}
                placeholder="blur"
                className="object-contain brightness-0 opacity-25"
              />
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl tracking-tight text-[#b9b9b9] mr-5 sm:mr-6 ">
              TechTalks
            </h2>
          </a>
        </div>
      </div>
    </section>
  );
}
