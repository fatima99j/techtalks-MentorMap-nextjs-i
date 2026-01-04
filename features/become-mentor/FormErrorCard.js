"use client";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormErrorCard({ error, setError }) {
  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
      <FontAwesomeIcon
        icon={faExclamationCircle}
        className="text-red-600 shrink-0 mt-0.5"
      />
      <div className="flex-1">
        <p className="text-sm font-semibold text-red-900 mb-1">
          Submission Failed
        </p>
        <p className="text-sm text-red-700">{error}</p>
      </div>
      <button
        type="button"
        onClick={() => setError(null)}
        className="text-2xl leading-none text-red-400 hover:text-red-600 transition-colors duration-300 cursor-pointer"
      >
        &times;
      </button>
    </div>
  );
}
