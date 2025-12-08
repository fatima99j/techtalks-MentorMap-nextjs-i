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
import Button from "../Button";

const steps = [
  {
    title: "Create Your Profile",
    icon: (
      <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5 text-primary-600" />
    ),
    description:
      "Sign up and tell us about your field of interest, career goals, and what kind of help you're looking for",
  },
  {
    title: "Find Your Mentor",
    icon: (
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="w-5 h-5 text-cyan-600"
      />
    ),
    description:
      "Browse through verified professionals, filter by industry, skills, and session type to find the perfect match",
  },
  {
    title: "Book a Session",
    icon: (
      <FontAwesomeIcon
        icon={faCalendarDays}
        className="w-5 h-5 text-purple-600"
      />
    ),
    description:
      "Choose an available time slot and session type that fits your needs—resume review, portfolio critique, or career advice",
  },
  {
    title: "Meet & Learn",
    icon: <FontAwesomeIcon icon={faVideo} className="w-5 h-5 text-amber-600" />,
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

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <StepCard
              key={idx}
              title={step.title}
              icon={step.icon}
              description={step.description}
              idx={idx}
            />
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-100 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who are already getting the guidance they
            need
          </p>
          <div className="flex justify-center">
            <Button variation="tertiary" size="large" classes="w-auto!">
              Create Your Free Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
