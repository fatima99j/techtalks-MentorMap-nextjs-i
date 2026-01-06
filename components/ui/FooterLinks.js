import Link from "next/link";

const footerLinks = [
  {
    title: "For Students",
    links: [
      { name: "Find Mentors", href: "/mentors" },
      { name: "FAQs", href: "/" },
    ],
  },
  {
    title: "For Mentors",
    links: [{ name: "Become a Mentor", href: "/become-mentor" }],
  },
  {
    title: "Company",
    links: [{ name: "About Us", href: "/" }],
  },
];

export default function FooterLinks() {
  return (
    <>
      {footerLinks.map((link) => (
        <div key={link.title}>
          <h4 className="text-[#fefefe] font-bold mb-4">{link.title}</h4>
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
