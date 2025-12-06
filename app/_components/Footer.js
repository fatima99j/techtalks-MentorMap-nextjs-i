import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      {/* Purple Gradient CTA Section */}
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
              industry professionals. Your dream career is just one session
              away.
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

              {/* Browse Mentors - Purple background, white border and text */}
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

      {/* Dark Footer Section */}
      <footer className="bg-gray-900 text-white w-full">
        <div className="max-w-400 mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Left Column - Branding */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="[&_a]:justify-start [&_img]:w-8 [&_img]:h-8 [&_span]:text-xl [&_span]:text-white">
                <Logo />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Navigate your career path with guidance from verified industry
                professionals. Connect, learn, and grow with MentorMap.
              </p>
              <div className="flex gap-3 mt-2">
                {/* Twitter Icon */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-5 h-5 text-gray-300"
                  />
                </a>
                {/* LinkedIn Icon */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-5 h-5 text-gray-300"
                  />
                </a>
                {/* Globe Icon */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                  aria-label="Website"
                >
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="w-5 h-5 text-gray-300"
                  />
                </a>
                {/* Facebook Icon */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-5 h-5 text-gray-300"
                  />
                </a>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                © 2024 MentorMap. All rights reserved.
              </p>
            </div>

            {/* Middle Columns - Navigation Links */}
            <div className="lg:col-span-2 flex flex-col md:flex-row gap-8 md:gap-12">
              {/* For Students Section */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-white text-base mb-2">
                  For Students
                </h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/mentors"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Find Mentors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#how-it-works"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#success-stories"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#faqs"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* For Mentors Section */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-white text-base mb-2">
                  For Mentors
                </h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="#be-mentor"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Become a Mentor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#mentor-dashboard"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Mentor Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#resources"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#community"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#support"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Company Links */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-white text-base mb-2">
                  Company
                </h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#press-kit"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Legal Links at Bottom */}
              <div className="flex flex-col gap-2 mt-auto pt-4">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#privacy"
                    className="text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#terms"
                    className="text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="#cookies"
                    className="text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
