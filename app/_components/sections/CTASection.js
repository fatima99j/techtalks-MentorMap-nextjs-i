import React from "react";

import Button from "../Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="container--common">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-100 mb-6">
            Ready to Navigate Your Career Path?
          </h2>

          <p className="text-xl text-indigo-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Join 50,000+ students who are already getting expert guidance from
            industry professionals. Your dream career is just one session away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variation="tertiary" size="large">
              <Link href="/auth/signup">Get Started for Free</Link>
            </Button>

            <Button variation="tertiaryBorder" size="large">
              Browse Mentors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
