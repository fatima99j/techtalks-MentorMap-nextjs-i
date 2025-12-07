import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ChallengeCard({
  title,
  description,
  isSolution = false,
}) {
  return (
    <div
      className={`flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm ${
        isSolution && "border-l-4 border-green-600"
      }`}
    >
      <div
        className={`w-10 h-10  ${
          isSolution ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
        } rounded-lg flex items-center justify-center shrink-0`}
      >
        {isSolution ? (
          <FontAwesomeIcon icon={faCircleCheck} className="w-5! h-5!" />
        ) : (
          <FontAwesomeIcon icon={faCircleXmark} className="w-5! h-5!" />
        )}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
