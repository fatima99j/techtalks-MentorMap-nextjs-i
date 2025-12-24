import { SignInForm } from "@/app/_components/auth/SignInForm";
import AuthImage from "@/public/signup.webp";
import Image from "next/image";

export const metadata = {
  title: "Sign In",
  description: "Sign in to MentorMap.",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4 py-6 px-8">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={AuthImage}
          alt="Image"
          fill
          placeholder="blur"
          className="inset-0 object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </>
  );
}
