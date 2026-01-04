"use client";

import Button from "@/components/ui/Button";
import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModal } from "../mentors/mentor/context/ModalContext";

export default function MentorSuccessModal() {
  const { isOpen, setIsOpen, closeModal } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center text-center space-y-6 py-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-600"
              size="3x"
            />
          </div>

          <div className="space-y-3 px-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Application Submitted!
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Thank you for applying! We&apos;ve received your application and
              will review it carefully. Our team will contact you within 3-5
              business days.
            </p>
          </div>

          <div className="w-full pt-2">
            <Button
              onClick={closeModal}
              className="w-full h-11 text-base font-medium"
            >
              Got it, thanks!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
