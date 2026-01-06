"use client";

import Button from "@/components/ui/Button";
import FormErrorCard from "@/features/become-mentor/FormErrorCard";
import { bookSession } from "@/lib/actions";
import { useParams } from "next/navigation";
import { useState } from "react";
import BookingSectionsList from "./BookingSectionsList";
import BookingSummaryCard from "./BookingSummaryCard";
import { useModal } from "./context/ModalContext";

export default function BookingDetailsList({ availability, offered_sessions }) {
  const initialState = { session: null, day: null, time: null, message: "" };
  const [booking, setBooking] = useState(initialState);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const { closeModal } = useModal();

  async function handleBooking() {
    try {
      const res = await bookSession(booking, id);

      if (res?.success) {
        setBooking(initialState);
        setError(null);
        closeModal();
      } else {
        setError(res.error);
      }
    } catch (err) {
      setError("Something went wrong while booking.");
    }
  }

  return (
    <>
      <BookingSectionsList
        booking={booking}
        setBooking={setBooking}
        availability={availability}
        offered_sessions={offered_sessions}
      />

      <div>
        <label className="block text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
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

      {!error ? (
        <BookingSummaryCard booking={booking} />
      ) : (
        <FormErrorCard error={error} setError={setError} />
      )}

      <div className="w-full flex items-center gap-4 sm:gap-6">
        <Button
          type="button"
          variant="cancel"
          onClick={() => {
            setBooking(initialState);
            closeModal();
          }}
          className="w-full py-3"
        >
          Cancel
        </Button>
        <Button
          className="w-full border border-primary-600 py-3 whitespace-nowrap"
          onClick={handleBooking}
        >
          Confirm Booking
        </Button>
      </div>
    </>
  );
}
