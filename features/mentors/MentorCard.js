import Button from "@/components/ui/Button";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SkillTag from "./SkillTag";

export default async function MentorCard({ mentor }) {
  const {
    mentor_id: id,
    full_name: fullName,
    company,
    job,
    skills,
    average_rating,
    experience_years: experience,
  } = mentor;

  const visibleSkills = skills.slice(0, 3);
  const remainingCount = skills.length - 3;

  return (
    <div className="max-w-md mx-auto p-6 h-full">
      <div className="bg-white rounded-2xl shadow-md p-6 pb-5  h-full flex flex-col">
        <div className="mb-4">
          <div className="relative w-24 h-24 rounded-3xl border-4 border-white shadow-md overflow-hidden">
            <Image
              width={96}
              height={96}
              src={`/mentors/mentor${id}.jpg`}
              alt={`${fullName} mentor photo`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{fullName}</h3>
          <p className="text-gray-600 text-sm">
            {job} at {company}
          </p>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faStar}
              className="w-4 h-4 text-yellow-400 text-sm"
            />
            <span className="font-semibold text-gray-900">
              {average_rating}
            </span>
          </div>
          <div className="flex gap-1 items-center text-gray-600 text-sm">
            <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
            <span>{experience} years of exp.</span>
          </div>
        </div>

        <div className="flex-1 mb-4">
          <div className="flex flex-wrap gap-2">
            {visibleSkills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}

            {remainingCount > 0 && (
              <SkillTag label={`+${remainingCount} more`} />
            )}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{mentor.bio}</p>

        <Button href={`/mentors/${id}`} size="medium" className="w-full py-2.5">
          View Profile
        </Button>
      </div>
    </div>
  );
}
