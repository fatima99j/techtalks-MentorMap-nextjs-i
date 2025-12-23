import Link from "next/link";

import Button from "./Button";
import NavLinksMobile from "./NavLinksMobile";

export default function MobileMenuContent() {
  return (
    <div className="flex flex-col gap-6">
      <NavLinksMobile />

      <div className="border-t border-gray-400" />

      <div className="flex flex-col items-center justify-center gap-4 pt-2">
        <Link
          href="/auth/signin"
          className="text-gray-700 hover:text-primary-600 transition duration-300"
        >
          Sign In
        </Link>
        <Link href="/auth/signup">
          <Button variant="primary" size="large">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
