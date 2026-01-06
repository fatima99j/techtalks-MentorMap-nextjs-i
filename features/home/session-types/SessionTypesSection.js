import {
  faBriefcase,
  faComments,
  faCompass,
  faFileLines,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SectionTag from "@/components/ui/SectionTag";
import SessionCard from "./SessionCard";

const sessions = [
  {
    name: "Resume Review",
    duration: "30 minutes",
    description:
      "Get expert feedback on your resume. Learn what hiring managers look for and how to stand out from the crowd.",
    features: [
      "Content & structure review",
      "ATS optimization tips",
      "Industry-specific advice",
    ],
    icon: (
      <FontAwesomeIcon
        icon={faFileLines}
        className="w-8! h-8! text-primary-600"
      />
    ),
    borderColor: "border-primary-600",
    buttonColor: "bg-primary-600 hover:bg-primary-800",
    checkIconColor: "text-primary-600",
    buttonMarginUp: "mt-4",
  },
  {
    name: "Portfolio Review",
    duration: "30 minutes",
    description:
      "Showcase your work with confidence. Get detailed feedback on your portfolio from industry professionals.",
    features: [
      "Project presentation tips",
      "Design & UX feedback",
      "What employers look for",
    ],
    icon: (
      <FontAwesomeIcon icon={faBriefcase} className="w-8! h-8! text-cyan-600" />
    ),
    borderColor: "border-cyan-700",
    buttonColor: "bg-cyan-700 hover:bg-cyan-800",
    checkIconColor: "text-cyan-700",
    buttonMarginUp: "mt-4",
  },
  {
    name: "Career Path Advice",
    duration: "30 minutes",
    description:
      "Not sure which direction to take? Get clarity on career paths, required skills, and industry expectations.",
    features: [
      "Career path exploration",
      "Skill gap analysis",
      "Industry insights",
    ],
    icon: (
      <FontAwesomeIcon icon={faCompass} className="w-8! h-8! text-purple-600" />
    ),
    borderColor: "border-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-800",
    checkIconColor: "text-purple-600",
    buttonMarginUp: "mt-4",
  },
  {
    name: "Mock Interview",
    duration: "45 minutes",
    description:
      "Practice makes perfect. Go through a realistic interview with detailed feedback on your performance.",
    features: [
      "Real interview scenarios",
      "Detailed performance feedback",
      "Answer improvement tips",
    ],
    icon: (
      <FontAwesomeIcon icon={faComments} className="w-8! h-8! text-amber-600" />
    ),
    borderColor: "border-amber-700",
    buttonColor: "bg-amber-700 hover:bg-amber-800",
    checkIconColor: "text-amber-700",
    buttonMarginBottom: "mb-4",
  },
];

export default function SessionTypes() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container--common">
        <div className="text-center mb-16 space-y-4">
          <SectionTag
            color="purple"
            label="Session Types"
            icon={<FontAwesomeIcon icon={faListCheck} />}
          />

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Choose Your Mentorship Session
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured sessions designed to give you exactly what you need—no
            fluff, just actionable guidance
          </p>
        </div>

        {/* Sessions list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-8">
          {sessions.map((session) => (
            <SessionCard key={session.name} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
}
