import { SigninForm } from "@/app/_components/auth/SigninForm";
import Image from "next/image";
import React from "react";
import AuthImage from "@/public/signup.webp";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4 py-6 px-8">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <SigninForm />
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
