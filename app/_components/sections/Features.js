import {
  faStar,
  faUsers,
  faUserTie,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const features = [
  {
    title: "Verified Mentors",
    icon: (
      <FontAwesomeIcon icon={faUsers} className="w-6! h-6! text-indigo-600" />
    ),
    bg: "bg-indigo-100",
  },
  {
    title: "Industry Experts",
    icon: (
      <FontAwesomeIcon icon={faUserTie} className="w-6! h-6! text-cyan-600" />
    ),
    bg: "bg-cyan-100",
  },
  {
    title: "Focused Sessions",
    icon: (
      <FontAwesomeIcon icon={faVideo} className="w-6! h-6! text-purple-600" />
    ),
    bg: "bg-purple-100",
  },
  {
    title: "Student-First Platform",
    icon: (
      <FontAwesomeIcon icon={faStar} className="w-6! h-6! text-amber-600" />
    ),
    bg: "bg-amber-100",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container--common">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div
                className={`w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
