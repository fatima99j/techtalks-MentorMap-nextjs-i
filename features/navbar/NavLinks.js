import Link from "next/link";

export default function NavLinks() {
  const commonClass =
    "text-gray-700 font-medium hover:text-primary-600 transition-colors duration-300";

  return (
    <nav className="hidden lg:flex items-center justify-center">
      <ul className="flex gap-4 justify-center items-center">
        <li>
          <a href="#how-it-works" className={commonClass}>
            How It Works
          </a>
        </li>
        <li>
          <Link href="/mentors" className={commonClass}>
            Find Mentors
          </Link>
        </li>
        <li>
          <a href="#become-mentor" className={commonClass}>
            Become A Mentor
          </a>
        </li>
        <li>
          <Link href="/about" className={commonClass}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
