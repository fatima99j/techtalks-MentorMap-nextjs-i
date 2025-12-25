import { SignUpForm } from "@/features/auth/SignupForm";
import AuthImage from "@/public/auth.webp";
import Image from "next/image";

export const metadata = {
  title: "Sign Up",
  description: "Create Account to start with MentorMap.",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <SignUpForm />
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
