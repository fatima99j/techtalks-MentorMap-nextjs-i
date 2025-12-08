import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faBriefcase,
  faCompass,
  faComments,
  faClock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function SessionTypes() {
  const sessions = [
    {
      id: 1,
      title: "Resume Review",
      duration: "30 minutes",
      description:
        "Get expert feedback on your resume. Learn what hiring managers look for and how to stand out from the crowd.",
      features: [
        "Content & structure review",
        "ATS optimization tips",
        "Industry-specific advice",
      ],
      icon: faFileLines,
      borderColor: "border-purple-300",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600",
      buttonMarginUp: "mt-4",
    },
    {
      id: 2,
      title: "Portfolio Review",
      duration: "30 minutes",
      description:
        "Showcase your work with confidence. Get detailed feedback on your portfolio from industry professionals.",
      features: [
        "Project presentation tips",
        "Design & UX feedback",
        "What employers look for",
      ],
      icon: faBriefcase,
      borderColor: "border-teal-300",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      buttonColor: "bg-teal-600",
      buttonMarginUp: "mt-4",
    },
    {
      id: 3,
      title: "Career Path Advice",
      duration: "30 minutes",
      description:
        "Not sure which direction to take? Get clarity on career paths, required skills, and industry expectations.",
      features: [
        "Career path exploration",
        "Skill gap analysis",
        "Industry insights",
      ],
      icon: faCompass,
      borderColor: "border-purple-800",
      iconBg: "bg-purple-800",
      iconColor: "text-white",
      buttonColor: "bg-purple-800",
      buttonMarginUp: "mt-4",
    },
    {
      id: 4,
      title: "Mock Interview",
      duration: "45 minutes",
      description:
        "Practice makes perfect. Go through a realistic interview with detailed feedback on your performance.",
      features: [
        "Real interview scenarios",
        "Detailed performance feedback",
        "Answer improvement tips",
      ],
      icon: faComments,
      borderColor: "border-orange-300",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 ",
      buttonMarginBottom: "mb-4",
    },
 ];

  return (
    <section className="w-full py-12 px-8 bg-purple-80 rounded-lg shadow-none relative">
    
      
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Choose Your Mentorship Session
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-1xl mx-auto">
            Structured sessions designed to give you exactly what you need—no
            fluff, just actionable guidance.
          </p>  
        </div>
            {/* Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`bg-white rounded-lg border-t-4 ${session.borderColor} shadow-sm flex flex-col transition-transform duration-300 ease-in-out hover:scale-105`}
            >
              <div className="p-5 overflow-hidden">
                {/* Icon */}
                <div
                  className={`w-10 h-10 ${session.iconBg} rounded-full flex items-center justify-center mb-3`}
                >
                  <FontAwesomeIcon
                    icon={session.icon}
                    className={`${session.iconColor} text-[16px]w-4 h-4`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-800 mb-2">
                  {session.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-gray-400 text-[10px] w-6 h-6"
                  />
                  <span className="text-xs text-gray-500">
                    {session.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {session.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {session.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 min-w-0">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-500 text-[10px] mt-0.5 flex-shrink-0 w-3 h-3"
                      />
                      <span className="text-xs text-gray-700 break-words flex-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                className={`w-full ${session.buttonColor} ${session.buttonmarginbottom} ${session.buttonMarginUp} text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 ${
                  session.buttonColor === 'bg-purple-600' ? 'hover:bg-purple-700' :
                  session.buttonColor === 'bg-teal-600' ? 'hover:bg-teal-700' :
                  session.buttonColor === 'bg-purple-800' ? 'hover:bg-purple-900' :
                  session.buttonColor === 'bg-orange-600 ' ? 'hover:bg-orange-700' : ''
                }`}
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}