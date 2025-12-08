import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function StepCard({ title, icon, description, idx }) {
  return (
    <div className="relative">
      <div className="h-full p-6">
        <span className="inline-block text-6xl text-[#ddd] font-semibold mb-6">
          0{idx + 1}
        </span>
        <span className="w-12 h-12 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {idx + 1 < 4 && (
        <div className="hidden lg:block absolute top-2/3 -right-4 transform -translate-y-1/2">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[#ddd] w-8 h-8"
          />
        </div>
      )}
    </div>
  );
}
