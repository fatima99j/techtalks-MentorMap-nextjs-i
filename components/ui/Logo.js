import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex justify-center items-center gap-1">
      <Image src={logo} alt="MentorMap Logo" width={60} height={60} priority />
      <span className="font-semibold text-2xl">MentorMap</span>
    </Link>
  );
}
