import React from "react";
import Button from "./Button";

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-br from-primary-600 to-primary-800 py-16 px-8">
      <div className="max-w-400 mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Navigate Your Career Path?
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Join 50,000+ students who are already getting expert guidance from
            industry professionals. Your dream career is just one session away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Get Started for Free - White background, purple border and text */}
            <Button
              variation="secondary"
              size="large"
              classes="bg-white hover:bg-primary-100 w-auto"
            >
              Get Started for Free
            </Button>

            <Button
              variation="primary"
              size="large"
              classes="border-2 border-white text-white hover:bg-primary-800 w-auto"
            >
              Browse Mentors
            </Button>
          </div>

          {/* Feature List with Checkmarks */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center items-center">
            <div className="flex items-center gap-2 text-white">
              <FontAwesomeIcon icon={faCheck} className="w-5 h-5" />
              <span className="text-base">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FontAwesomeIcon icon={faCheck} className="w-5 h-5" />
              <span className="text-base">Free to Join</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FontAwesomeIcon icon={faCheck} className="w-5 h-5" />
              <span className="text-base">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
