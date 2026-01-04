"use client";

import { useFormStatus } from "react-dom";

import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="col-span-2 py-3" disabled={pending}>
      {pending ? "Submiting..." : "Submit Application"}
    </Button>
  );
}
