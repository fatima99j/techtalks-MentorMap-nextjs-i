import CTASection from "./_components/sections/CTASection";
import Features from "./_components/sections/Features";
import Hero from "./_components/sections/Hero";
import HowItWorks from "./_components/sections/HowItWorks";
import ProblemSolution from "./_components/sections/ProblemSolution";
import SessionTypes from "./_components/sections/SessionTypes";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProblemSolution />
      <HowItWorks />
      <SessionTypes />
      <CTASection />
    </>
  );
}
