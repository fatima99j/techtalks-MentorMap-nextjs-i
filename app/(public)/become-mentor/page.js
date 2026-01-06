import BecomeMentorHero from "@/features/become-mentor/BecomeMentorHero";
import MentorApplicationSection from "@/features/become-mentor/MentorApplicationSection";

export const metadata = {
  title: "Join MentorMap",
  description:
    "Join thousands of professionals who are making a real impact by mentoring the next generation.",
};

export default function Page() {
  return (
    <>
      <BecomeMentorHero />
      <MentorApplicationSection />
    </>
  );
}
