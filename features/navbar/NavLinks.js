import Link from "next/link";

export const NAV_LINKS = [
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Find Mentors", href: "/mentors" },
  { name: "Become A Mentor", href: "/#become-mentor" },
];

export default function NavLinks() {
  const commonClass =
    "text-gray-700 font-medium hover:text-primary-600 transition-colors duration-300";

  return (
    <nav className="hidden lg:flex items-center justify-center">
      <ul className="flex gap-4 justify-center items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={commonClass}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
