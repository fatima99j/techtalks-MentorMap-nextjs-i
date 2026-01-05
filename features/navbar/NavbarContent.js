import Link from "next/link";

import NavLinks from "./NavLinks";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import MobileNav from "./MobileNav";
import MobileMenuContent from "./MobileMenuContent";

export default function NavbarContent() {
  return (
    <div className="container--common flex justify-between items-center px-6! md:px-8! md:py-2!">
      <Logo />

      <NavLinks />

      <div className="hidden lg:flex items-center justify-center gap-4">
        <Link
          href="/"
          className="text-gray-700 font-medium text-lg hover:text-primary-600 transition-colors duration-300"
        >
          Join Session
        </Link>

        <Button variant="primary" size="medium" href="/mentors">
          Get Started
        </Button>
      </div>

      {/* Mobile Nav */}
      <MobileNav>
        <MobileMenuContent />
      </MobileNav>
    </div>
  );
}
