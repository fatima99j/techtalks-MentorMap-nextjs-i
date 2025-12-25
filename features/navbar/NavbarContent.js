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
          href="/auth/sign-in"
          className="text-gray-700 hover:text-primary-600 transition duration-300"
        >
          Sign In
        </Link>

        <Button variant="primary" size="medium" href="/auth/sign-up">
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
