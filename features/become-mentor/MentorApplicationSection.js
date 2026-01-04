"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Separator } from "@/components/ui/Separator";
import SubmitButton from "@/components/ui/SubmitButton";
import { submitMentorApplication } from "@/lib/actions";
import { useState } from "react";
import { useModal } from "../mentors/mentor/context/ModalContext";
import FormErrorCard from "./FormErrorCard";
import FormInfoCard from "./FormInfoCard";
import MentorSuccessModal from "./MentorSuccessModal";

export default function MentorApplicationSection() {
  const { setIsOpen } = useModal();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formData = new FormData(e.target);
      const res = await submitMentorApplication(formData);

      if (res?.success) {
        setIsOpen(true);
        e.target.reset();
      } else {
        setError(res?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setError("Network error. Please try again.");
    }
  };

  return (
    <>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
            <form onSubmit={handleSubmit}>
              <FieldSet>
                <FieldLegend>Mentorship Details</FieldLegend>
                <FieldDescription className="text-base">
                  Tell us about your experience
                </FieldDescription>

                {/* For error */}
                {error && <FormErrorCard error={error} setError={setError} />}

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Full Name *</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      required
                      autoComplete="off"
                      placeholder="Mohamad Hachem"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      required
                      autoComplete="off"
                      type="email"
                      placeholder="mohamad@example.com"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="location">Location *</FieldLabel>
                    <Input
                      id="location"
                      name="location"
                      required
                      placeholder="Beirut"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="role">Current Role *</FieldLabel>
                    <Input
                      id="role"
                      name="role"
                      required
                      placeholder="Senior Product Designer"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="company">Company *</FieldLabel>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder="Google"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="rate">Hourly Rate (USD) *</FieldLabel>
                    <Input
                      id="rate"
                      name="rate"
                      type="number"
                      required
                      placeholder="75"
                    />
                    <FieldDescription>
                      Recommended: $50-150/hour
                    </FieldDescription>
                  </Field>
                  <Field className="col-span-2">
                    <FieldLabel htmlFor="bio">
                      Professional Bio * (Tell us about your background and
                      experience)
                    </FieldLabel>
                    <textarea
                      id="bio"
                      name="bio"
                      required
                      rows={4}
                      maxLength={300}
                      className="w-full px-3 py-3 border border-input bg-transparent rounded-md text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300 resize-none"
                      placeholder="Share your professional journey, key achievements, and what makes you passionate about your field..."
                    ></textarea>
                    <FieldDescription>0/500 characters</FieldDescription>
                  </Field>
                </FieldGroup>

                <FormInfoCard />

                <Separator className="mt-6" />

                <SubmitButton />
              </FieldSet>
            </form>
          </div>
        </div>
      </section>

      {/* Success modal */}
      <MentorSuccessModal />
    </>
  );
}
