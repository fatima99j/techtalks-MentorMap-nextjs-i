import {
  faClock,
  faHeart,
  faTrophy,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mentorFeatures = [
  {
    name: "Flexible Scheduling",
    icon: (
      <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-primary-600" />
    ),
    description:
      "Set your own availability. Offer sessions when it works for you—no long-term commitments required.",
  },
  {
    name: "Make Real Impact",
    icon: (
      <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-primary-600" />
    ),
    description:
      "Help students gain clarity, confidence, and the skills they need to succeed in their careers.",
  },
  {
    name: "Build Your Reputation",
    icon: (
      <FontAwesomeIcon icon={faTrophy} className="w-4 h-4 text-primary-600" />
    ),
    description:
      "Get rated by mentees, showcase your expertise, and grow your professional network.",
  },
  {
    name: "Simple Platform",
    icon: (
      <FontAwesomeIcon icon={faVideo} className="w-4 h-4 text-primary-600" />
    ),
    description:
      "Easy-to-use interface with integrated video calls. Everything you need in one place.",
  },
];

export default function MentorFeaturesList() {
  return (
    <div className="space-y-6 mb-8">
      {mentorFeatures.map((feature) => (
        <div className="flex items-start space-x-4" key={feature.name}>
          <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 rounded-lg flex items-center justify-center">
            {feature.icon}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {feature.name}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
