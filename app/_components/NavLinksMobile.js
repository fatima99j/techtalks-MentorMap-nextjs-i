import Link from "next/link";

export default function NavLinksMobile() {
  const commonClass =
    "text-gray-700 font-medium py-2 text-lg hover:text-primary-600 transition-colors duration-300";

  return (
    <nav className="flex flex-col gap-2">
      <a href="#how-it-works" className={commonClass}>
        How It Works
      </a>
      <Link href="/mentors" className={commonClass}>
        Find Mentors
      </Link>
      <a href="#become-mentor" className={commonClass}>
        Become A Mentor
      </a>
      <Link href="/about" className={commonClass}>
        About Us
      </Link>
    </nav>
  );
}
