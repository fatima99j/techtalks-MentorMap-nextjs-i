import { cn } from "@/lib/utils";

import Button from "@/components/ui/Button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function SignInForm({ className, ...props }) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Sign in to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to sign in.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            required
            placeholder="Your password"
          />
        </Field>
        <Field>
          <Button size="medium" className="rounded-md">
            Sign in
          </Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="social" size="medium" type="button">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-4 h-4 text-blue-600"
            />{" "}
            Sign in with LinkedIn
          </Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
