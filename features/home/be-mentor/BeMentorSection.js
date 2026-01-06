import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import MentorImage from "@/public/mentor.webp";
import { faArrowRight, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import MentorFeaturesList from "./MentorFeaturesList";

export default function BeMentor() {
  return (
    <section id="become-mentor" className="py-24">
      <div className="container--common">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTag
              color="cyan"
              label="For Professionals"
              icon={<FontAwesomeIcon icon={faUserTie} />}
            />

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Share Your Knowledge, Shape Careers
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of professionals who are making a real impact by
              mentoring the next generation. It&apos;s flexible, rewarding, and
              takes just 30 minutes of your time.
            </p>

            <MentorFeaturesList />

            <Button size="large" href="/become-mentor">
              Become a mentor{" "}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl aspect-square relative">
            <Image
              className="object-cover"
              fill
              src={MentorImage}
              alt="professional mentor smiling during video call with student, modern home office setup, natural lighting, professional photography"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
