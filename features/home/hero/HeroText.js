import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@/components/ui/Button";
import StartSessionButton from "./StartSessionButton";

export default function HeroText() {
  return (
    <div className="w-full lg:max-w-4xl mx-auto pt-12 text-center">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-5xl md:text-6xl text-gray-900 tracking-tight leading-tight">
          Navigate Your Career Path with{" "}
          <span className="text-primary-600">Guidance</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-8 leading-relaxed">
          Connect with real professionals, book 1-on-1 sessions, and get
          guidance from people already doing what you want to do.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="primary" size="large" href="/mentors">
          Find Your Mentor
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
        </Button>

        <StartSessionButton />
      </div>
    </div>
  );
}
