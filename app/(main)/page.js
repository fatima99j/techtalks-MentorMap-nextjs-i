import BeMentor from "../_components/sections/BeMentor";
import CTASection from "../_components/sections/CTASection";
import FeaturedIn from "../_components/sections/FeaturedIn";
import Hero from "../_components/sections/Hero";
import HowItWorks from "../_components/sections/HowItWorks";
import ProblemSolution from "../_components/sections/ProblemSolution";
import SessionTypes from "../_components/sections/SessionTypes";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <ProblemSolution />
      <HowItWorks />
      <SessionTypes />
      <BeMentor />
      <CTASection />
    </>
  );
}
