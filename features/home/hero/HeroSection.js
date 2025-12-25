import Image from "next/image";

import HeroImage from "@/public/hero.webp";
import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative">
      <HeroBackground>
        <div className="container--common">
          <HeroText />

          {/* Image */}
          <div className="flex justify-center mt-10 pb-15">
            <div className="w-full lg:max-w-6xl mx-auto lg:translate-y-4">
              <Image
                src={HeroImage}
                alt="Two professionals collaborating on a laptop – representing mentorship and career guidance"
                className="rounded-2xl shadow-2xl object-cover "
                priority
                quality={100}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </HeroBackground>
    </section>
  );
}
