import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "For Students",
    links: [
      { name: "Find Mentors", href: "/mentors" },
      { name: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "For Mentors",
    links: [
      { name: "Become a Mentor", href: "/be-mentor" },
      { name: "Mentor Dashboard", href: "/mentor/dashboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact-us" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {footerLinks.map((link) => (
        <div key={link.title}>
          <h4 className="text-white font-bold mb-4">{link.title}</h4>
          <ul className="space-y-3">
            {link.links.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="hover:text-[#fefefe] transition-colors duration-300"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
