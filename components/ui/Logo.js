import Image from "next/image";
import logo from "@/public/logo.webp";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex justify-center items-center gap-1.5 sm:gap-2"
    >
      <Image
        src={logo}
        alt="MentorMap Logo"
        className="mb-[0.2rem] md:mb-[0.35rem]"
        width={26}
        height={26}
        priority
        placeholder="blur"
      />
      <span className="font-semibold text-2xl">MentorMap</span>
    </Link>
  );
}
