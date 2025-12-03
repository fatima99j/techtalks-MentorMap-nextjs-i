import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 backdrop-blur-2xl bg-white/40 border-b border-white/30 backdrop-filter shadow-md">
      <div className="flex justify-between items-center px-6 md:px-8 md:py-2 max-w-400 mx-auto">
        <div className="flex justify-between items-center gap-12">
          <Logo />
          <NavLinks />
        </div>

        <div className="hidden lg:flex items-center justify-center gap-4">
          <Link href="/login" className="hover:text-primary-600">
            Sign In
          </Link>
          <Link href="/signup">
            <Button variation="primary" size="medium">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <FontAwesomeIcon
          icon={faBars}
          className="block lg:hidden text-gray-800 font-medium w-8 h-8"
        />
      </div>
    </header>
  );
}
