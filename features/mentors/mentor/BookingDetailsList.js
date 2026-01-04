"use client";

import Button from "@/components/ui/Button";
import { DAYS } from "@/lib/constants";
import { useState } from "react";
import BookingSummaryCard from "./BookingSummaryCard";
import { useBookingModal } from "./context/BookingModalContext";

export default function BookingDetailsList({ availability, offered_sessions }) {
  const initialState = { session: null, day: null, time: null, message: "" };
  const [booking, setBooking] = useState(initialState);

  const { closeModal } = useBookingModal();

  const slots = booking.day
    ? availability.slots[booking.day]
    : availability.slots["monday"];

  const sections = [
    {
      title: "Session Type",
      items: offered_sessions,
      selectedValue: booking.session,
      onClick: (value) => setBooking({ ...booking, session: value }),
    },
    {
      title: "Date",
      items: DAYS,
      selectedValue: booking.day,
      onClick: (value) => setBooking({ ...booking, day: value, time: null }),
    },
    {
      title: "Time",
      items: slots,
      selectedValue: booking.time,
      onClick: (value) => setBooking({ ...booking, time: value }),
    },
  ];

  return (
    <>
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {section.items.map((item) => {
              const value = typeof item === "string" ? item : item.key;
              const label = typeof item === "string" ? item : item.label;

              return (
                <button
                  key={value}
                  onClick={() => section.onClick(value)}
                  className={`px-4 py-2 border-2 text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    section.selectedValue === value
                      ? "bg-primary-600 border-primary-600 text-[#fefefe]"
                      : "bg-transparent border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-[#fefefe]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div>
        <label className="block text-xl font-semibold text-gray-900 mb-4">
          Message to Mentor (Optional)
        </label>
        <textarea
          value={booking.message}
          onChange={(e) => setBooking({ ...booking, message: e.target.value })}
          rows="4"
          maxLength="500"
          placeholder="Tell the mentor what you'd like to discuss or any specific questions you have..."
          className="w-full px-2 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
        />
        <p className="text-sm text-gray-500 mt-2">
          {booking.message.length}/500 characters
        </p>
      </div>

      <BookingSummaryCard booking={booking} />

      <div className="w-full flex items-center gap-6">
        <Button
          type="button"
          variant="cancel"
          onClick={() => {
            setBooking(initialState);
            closeModal();
          }}
          className="w-full px-6 py-3"
        >
          Cancel
        </Button>
        <Button className="w-full border border-primary-600 px-6 py-3">
          Confirm Booking
        </Button>
      </div>
    </>
  );
}
