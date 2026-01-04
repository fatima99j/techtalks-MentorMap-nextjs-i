import { DAYS } from "@/lib/constants";

export default function BookingSummaryCard({ booking }) {
  return (
    <div className="bg-stone-50 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-2">
        Booking Summary
      </h3>

      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Session Type:</span>
          <span className="font-medium">
            {booking.session || "Not selected"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Date:</span>
          <span className="font-medium">
            {booking.day
              ? DAYS.find((d) => d.key === booking.day)?.label
              : "Not selected"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Time:</span>
          <span className="font-medium">{booking.time || "Not selected"}</span>
        </div>

        <div className="flex justify-between pt-2 border-t border-gray-200">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold text-primary-600">Free</span>
        </div>
      </div>
    </div>
  );
}
