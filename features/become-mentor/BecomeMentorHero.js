import SectionTag from "@/components/ui/SectionTag";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BecomeMentorHero() {
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-18 sm:pb-20 bg-gradient-to-br from-[#93c5fd]/20 via-[#93c5fd]/8  to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <SectionTag
          label="Join Our Community"
          color="indigo"
          icon={<FontAwesomeIcon icon={faUserPlus} size="sm" />}
        />
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Become a Mentor
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Share your expertise, guide the next generation of professionals, and
          make a meaningful impact while earning on your own schedule.
        </p>
      </div>
    </section>
  );
}
