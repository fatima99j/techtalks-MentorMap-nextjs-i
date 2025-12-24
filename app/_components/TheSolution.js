import SolutionImage from "@/public/solution.webp";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ChallengeCard from "./ChallengeCard";
import SectionTag from "./SectionTag";

const solutions = [
  {
    title: "Direct Access to Industry Experts",
    description:
      "Connect with verified professionals from top companies who want to help",
  },
  {
    title: "Flexible, Short Sessions",
    description:
      "30-45 minute focused sessions that fit into busy schedules—no long-term commitments",
  },
  {
    title: "Structured Session Types",
    description:
      "Choose from resume reviews, portfolio critiques, career advice, or mock interviews",
  },
  {
    title: "Quality Guaranteed",
    description:
      "All mentors are verified and rated by previous mentees to ensure high-quality guidance",
  },
];

export default function TheSolution() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left Side */}

      {/* Image order-1 */}
      <div className="order-2 lg:order-1 h-[500px] relative flex-1 shadow-2xl overflow-hidden self-center">
        <Image
          src={SolutionImage}
          alt="Confused student looking at laptop screen with multiple career path options, frustrated expression, modern workspace, professional photography"
          placeholder="blur"
          fill
          quality={80}
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Right Side */}
      <div className="order-1 lg:order-2">
        <SectionTag
          label="OurSolution"
          color="green"
          icon={<FontAwesomeIcon icon={faCircleCheck} />}
        />
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bridge the Gap with MentorMap
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            MentorMap is a mentorship matchmaking platform that connects
            students with verified professionals for short, focused mentorship
            sessions. Get the guidance you need, when you need it.
          </p>
          <div className="space-y-4">
            {solutions.map((point) => (
              <ChallengeCard
                key={point.title}
                description={point.description}
                title={point.title}
                icon={point.icon}
                isSolution={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
