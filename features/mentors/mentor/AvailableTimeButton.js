"use client";

import { useModal } from "./context/ModalContext";

export default function AvailableTimeButton({ children }) {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className="px-4 py-2 bg-white border-2 border-primary-600 text-primary-600 text-sm font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-all cursor-pointer whitespace-nowrap"
    >
      {children}
    </button>
  );
}
