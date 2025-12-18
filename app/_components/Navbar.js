import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className="top-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center px-6 md:px-8 md:py-2 max-w-400 mx-auto">
        <Logo />

        <NavLinks />

        <div className="hidden lg:flex items-center justify-center gap-4">
          <Link href="/auth/signin" className="hover:text-primary-600">
            Sign In
          </Link>
          <Link href="/auth/signup">
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
