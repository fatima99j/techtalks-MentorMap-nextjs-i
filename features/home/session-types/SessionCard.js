import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SessionCard({ session }) {
  const {
    name,
    icon,
    duration,
    description,
    buttonColor,
    checkIconColor,
    borderColor,
    features,
  } = session;

  return (
    <div
      className={`flex flex-col h-full bg-[#fefefe] rounded-2xl p-8 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${borderColor}`}
    >
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
      <div className="flex items-center space-x-2 mb-4">
        <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gray-500" />
        <span className="text-gray-600 font-medium">{duration}</span>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features list */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li className="flex items-center gap-2" key={idx}>
            <FontAwesomeIcon
              icon={faCheck}
              className={`w-4 h-4 ${checkIconColor}`}
            />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/mentors"
        className={`w-full mt-auto ${buttonColor} text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer
        `}
      >
        Book Session
      </Link>
    </div>
  );
}
