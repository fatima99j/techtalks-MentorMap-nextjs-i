"use client";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

export default function MobileNav({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <Button
        type="button"
        className="block lg:hidden bg-transparent hover:bg-transparent"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-gray-700 font-medium w-6! h-6!"
        />
      </Button>

      {mounted &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 z-9999 backdrop-blur-xs transition-opacity duration-300 bg-[rgba(255, 255, 255, 0.1)] lg:hidden ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 lg:hidden transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-8"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="w-5! h-5! font-medium text-gray-700"
                  />
                </button>

                <div onClick={() => setIsOpen(false)} className="mt-12">
                  {children}
                </div>
              </div>
            </div>
          </div>,
          document.getElementById("drawer-hook")
        )}
    </>
  );
}
