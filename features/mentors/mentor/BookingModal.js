"use client";

import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "./context/ModalContext";

export default function BookingModal({ children, firstName }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <Button type="button" className="py-2.5" onClick={openModal}>
        Book Session
      </Button>

      {mounted &&
        createPortal(
          <div
            onClick={closeModal}
            className={`fixed inset-0 z-9999 backdrop-blur-xs transition-opacity duration-300 bg-[rgba(255, 255, 255, 0.1)] flex items-end sm:items-center p-0 sm:p-4 ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="relative bg-[#fefefe] rounded-t-2xl sm:rounded-xl shadow-lg w-full sm:max-w-5xl sm:mx-auto max-h-full sm:max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#fefefe] border-b border-gray-200 px-4 sm:px-8 md:px-12 py-4 sm:py-3 flex items-start justify-between z-10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    Book a Session
                  </h2>
                  <p className="text-base text-gray-500 mt-0.5">
                    with {firstName}
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="text-3xl cursor-pointer text-gray-400 hover:text-gray-600 transition-colors duration-200 leading-none"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>

              <div className="py-4 sm:py-6 px-4 sm:px-8 md:px-12">
                {children}
              </div>
            </div>
          </div>,
          document.getElementById("modal-hook")
        )}
    </>
  );
}
