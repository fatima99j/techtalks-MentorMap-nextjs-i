import React from "react";
import SectionTag from "../SectionTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faGears,
  faMagnifyingGlass,
  faUserPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import StepCard from "../StepCard";
import StepsImage from "@/public/steps.webp";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Create Your Profile",
    icon: (
      <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5 text-primary-600" />
    ),
    description:
      "Sign up and tell us about your field of interest, career goals, and what kind of help you're looking for",
  },
  {
    number: "2",
    title: "Find Your Mentor",
    icon: (
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="w-5 h-5 text-primary-600"
      />
    ),
    description:
      "Browse through verified professionals, filter by industry, skills, and session type to find the perfect match",
  },
  {
    number: "3",
    title: "Book a Session",
    icon: (
      <FontAwesomeIcon
        icon={faCalendarDays}
        className="w-5 h-5 text-primary-600"
      />
    ),
    description:
      "Choose an available time slot and session type that fits your needs—resume review, portfolio critique, or career advice",
  },
  {
    number: "4",
    title: "Meet & Learn",
    icon: (
      <FontAwesomeIcon icon={faVideo} className="w-5 h-5 text-primary-600" />
    ),
    description:
      "Join your video session, get personalized guidance, and take your career to the next level with expert advice",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container--common">
        <div className="text-center mb-16">
          <SectionTag
            color="indigo"
            label="Simple Process"
            icon={<FontAwesomeIcon icon={faGears} />}
          />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How MentorMap Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes and connect with industry professionals who
            can help you reach your career goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center justify-center">
          {/* Steps list */}
          <div className="flex flex-col gap-8 items-center">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <StepCard
                  title={step.title}
                  icon={step.icon}
                  description={step.description}
                  number={step.number}
                />
              </div>
            ))}
          </div>

          <div className="relative scale-90 aspect-square w-full rounded-2xl shadow-2xl">
            <Image
              src={StepsImage}
              alt="A happy student using MentorMap"
              fill
              placeholder="blur"
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
