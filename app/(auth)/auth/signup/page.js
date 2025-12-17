import React from "react";

import AuthImage from "@/public/signup.webp";
import Image from "next/image";
import { SignupForm } from "@/app/_components/auth/SignupForm";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <SignupForm />
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
