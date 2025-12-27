import { cn } from "@/lib/utils";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export function SignUpForm({ className, ...props }) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input id="name" type="text" placeholder="Mohamad Hachem" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            required
            placeholder="Your password"
          />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            required
            placeholder="Confirm your password"
          />
        </Field>
        <Field>
          <Button size="medium" className="rounded-md py-3">
            Create Account
          </Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button
            variant="social"
            size="medium"
            type="button"
            className="py-2.5"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-4 h-4 text-blue-600"
            />{" "}
            Sign in with LinkedIn
          </Button>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/auth/sign-in">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
