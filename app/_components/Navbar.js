import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarScrollWrapper from "./NavbarScrollWrapper";

export default function Navbar() {
  return (
    <NavbarScrollWrapper>
      <div className="container--common flex justify-between items-center px-6! md:px-8! md:py-2!">
        <Logo />

        <NavLinks />

        <div className="hidden lg:flex items-center justify-center gap-4">
          <Link
            href="/auth/signin"
            className="text-gray-700 hover:text-primary-600"
          >
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
          className="block lg:hidden text-gray-700 font-medium w-8 h-8"
        />
      </div>
    </NavbarScrollWrapper>
  );
}
