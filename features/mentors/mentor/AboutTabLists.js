import {
  faCheckCircle,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillTag from "../SkillTag";

export default function AboutTabLists({ mentor }) {
  const { offered_sessions, work_experience, skills, education } = mentor;

  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillTag key={skill} label={skill} isMentorPage={true} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Session Types Offered
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {offered_sessions.map((type, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg"
            >
              <div className="flex items-center justify-center shrink-0">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary-600 w-4! h-4!"
                />
              </div>
              <span className="text-sm font-medium text-gray-900">{type}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Work Experience
        </h2>
        <div className="space-y-4">
          {work_experience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary-600 pl-4">
              <h3 className="text-base font-medium text-gray-900">
                {exp.position}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-1">
                {exp.company}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {`${exp.start_date} ${
                  exp.current ? "- present" : `- ${exp.end_date}`
                }`}
              </p>
              <p className="text-sm text-gray-700 line-clamp-2">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
        <div className="space-y-3">
          {education.map((degree) => (
            <div key={degree.year} className="flex items-start gap-3">
              <div className="flex items-center justify-center shrink-0 mt-0.5">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-primary-600 w-5! h-5!"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  {degree.degree}
                </h3>
                <p className="text-sm text-gray-600">
                  {degree.university} • {degree.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
