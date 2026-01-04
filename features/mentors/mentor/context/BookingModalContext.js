"use client";

import { createContext, useContext, useState } from "react";

const BookingModalContext = createContext();

function BookingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { BookingModalProvider, useBookingModal };
