import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvailableTimeButton from "./AvailableTimeButton";
import { DAYS } from "@/lib/constants";

export default function AvailabilityTabSection({ mentor }) {
  const { availability } = mentor;

  if (!availability?.slots) {
    return (
      <div className="text-center py-12 text-gray-500">
        No availability set for this mentor
      </div>
    );
  }

  return (
    <section className="space-y-8">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg px-2 py-4 sm:p-3 md:p-4">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="flex items-center justify-center shrink-0 mt-0.5">
            <FontAwesomeIcon icon={faWarning} className="text-primary-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-primary-800 mb-1">
              Booking Information
            </p>
            <p className="text-sm text-primary-600">
              All times are shown in your local timezone. Sessions are typically
              30-60 minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {DAYS.map((day) => {
          const slots = availability.slots[day.key] || [];

          if (slots.length === 0) return null;

          return (
            <div
              key={day.key}
              className="border border-gray-200 rounded-lg p-4"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {day.label}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {slots.map((time, idx) => (
                  <AvailableTimeButton key={idx}>{time}</AvailableTimeButton>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
