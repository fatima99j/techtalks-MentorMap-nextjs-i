import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

export default function HeroText() {
  return (
    <div className="w-full lg:max-w-xl pt-10 md:pt-12">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-5xl text-gray-900 tracking-tight leading-snug">
          Navigate Your Career Path with{" "}
          <span className="text-primary-600">Guidance</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Connect with verified industry professionals for focused mentorship
          sessions. Get the career clarity, feedback, and confidence you need to
          succeed.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variation="primary" size="large">
          Find Your Mentor
          <FontAwesomeIcon
            icon={faArrowRight}
            // size="xs"
            className="w-4 h-4"
          />
        </Button>
        <Button variation="secondary" size="large">
          Become a Mentor
        </Button>
      </div>
    </div>
  );
}
