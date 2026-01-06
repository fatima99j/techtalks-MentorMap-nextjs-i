import SectionTag from "@/components/ui/SectionTag";
import ProblemImage from "@/public/problem.webp";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ChallengeCard from "./ChallengeCard";

const challenges = [
  {
    title: "Lack of Access to Professionals",
    description:
      "No direct connection to experienced industry experts who can provide real-world guidance",
  },
  {
    title: "Confusion About Career Paths",
    description:
      "Uncertainty about which direction to take and what skills are actually needed in the industry",
  },
  {
    title: "No Structured Feedback",
    description:
      "Difficulty getting professional feedback on resumes, portfolios, and job applications",
  },
  {
    title: "Limited Mentorship Opportunities",
    description:
      "Traditional mentorship programs are often too formal, time-consuming, or simply unavailable",
  },
];

export default function TheChallenge() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left Side */}
      <div>
        <SectionTag
          label="The Challenge"
          color="red"
          icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
        />
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            The Gap Between Education and Career
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Thousands of students and recent graduates struggle to transition
            from academic life to the professional world. They face numerous
            barriers that hold them back from achieving their career goals.
          </p>
          <div className="space-y-4">
            {challenges.map((point) => (
              <ChallengeCard
                key={point.title}
                description={point.description}
                title={point.title}
                icon={point.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px] relative flex-1 shadow-2xl overflow-hidden self-center">
        <Image
          src={ProblemImage}
          alt="Confused student looking at laptop screen with multiple career path options, frustrated expression, modern workspace, professional photography"
          placeholder="blur"
          fill
          quality={80}
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
