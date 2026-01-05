import Link from "next/link";

import { NAV_LINKS } from "./NavLinks";

export default function MobileNavLinks() {
  const commonClass =
    "text-gray-700 font-medium py-2 text-lg hover:text-primary-600 transition-colors duration-300";

  return (
    <nav className="flex flex-col gap-2">
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.name} className={commonClass}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
