import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import JoinSessionModal from "./JoinSessionModal";
import MobileMenuContent from "./MobileMenuContent";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function NavbarContent() {
  return (
    <div className="container--common flex justify-between items-center px-6! md:px-8! md:py-2!">
      <Logo />

      <NavLinks />

      <div className="hidden lg:flex items-center justify-center gap-4">
        <JoinSessionModal />

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
