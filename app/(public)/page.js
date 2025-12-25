import BeMentor from "@/features/home/be-mentor/BeMentorSection";
import CTASection from "@/features/home/cta/CTASection";
import FeaturedIn from "@/features/home/featured-in/FeaturedInSection";
import Hero from "@/features/home/hero/HeroSection";
import HowItWorks from "@/features/home/how-it-works/HowItWorksSection";
import SessionTypes from "@/features/home/session-types/SessionTypesSection";
import ProblemSolution from "@/features/home/solution/ProblemSolutionSection";

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
