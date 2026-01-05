"use client";

import Button from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JoinSessionModal() {
  const router = useRouter();
  const [sessionLink, setSessionLink] = useState("");
  const [open, setOpen] = useState(false);

  const handleJoinSession = () => {
    if (sessionLink.trim()) {
      router.push(sessionLink);
      setOpen(false);
      setSessionLink("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 cursor-pointer">
          Join Session
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-900 font-bold">
            Join Session
          </DialogTitle>
          <DialogDescription className="text-gray-600 leading-relaxed text-base">
            Enter the session link provided by your mentor to join their
            session.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Field>
              <FieldLabel htmlFor="roomLink">Session Link</FieldLabel>
              <Input
                id="roomLink"
                type="text"
                placeholder="e.g., aB3xQ9k2"
                value={sessionLink}
                onChange={(e) => setSessionLink(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleJoinSession()}
                autoComplete="off"
              />
            </Field>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-blue-600 text-base shrink-0 mt-[0.115rem]"
              />

              <div className="space-y-2.5">
                <p className="font-semibold text-gray-900 text-sm">
                  Before you join:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 pl-4 list-disc marker:text-blue-500">
                  <li>Make sure you have the correct Session Link</li>
                  <li>
                    Ensure your camera and microphone permissions are enabled
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Button
            onClick={handleJoinSession}
            disabled={!sessionLink.trim()}
            className="py-3 w-full"
          >
            Join Session
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
