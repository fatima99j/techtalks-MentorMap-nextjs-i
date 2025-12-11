import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://x.com",
    icon: <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />,
  },
  {
    href: "https://linkedin.com",
    icon: <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />,
  },
  {
    href: "https://instagram.com",
    icon: <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />,
  },
  {
    href: "https://facebook.com",
    icon: <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />,
  },
];

export default function FooterBranding() {
  return (
    <>
      <div className="flex items-center mb-6">
        <Logo />
      </div>

      <p className="text-gray-400 mb-6 leading-relaxed">
        Navigate your career path with guidance from verified industry
        professionals. Connect, learn, and grow with MentorMap.
      </p>

      <div className="flex items-center space-x-4">
        {socialLinks.map((link, idx) => (
          <Link
            href={link.href}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
}
