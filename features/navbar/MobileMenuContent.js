import Link from "next/link";

import Button from "@/components/ui/Button";
import MobileNavLinks from "./MobileNavLinks";
import JoinSessionModal from "./JoinSessionModal";

export default function MobileMenuContent() {
  return (
    <div className="flex flex-col gap-6">
      <MobileNavLinks />

      <div className="border-t border-gray-400" />

      <div className="flex flex-col items-center justify-center gap-4 pt-2">
        <JoinSessionModal />

        <Button variant="primary" size="large" href="/mentors">
          Get Started
        </Button>
      </div>
    </div>
  );
}
