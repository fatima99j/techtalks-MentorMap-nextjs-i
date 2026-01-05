import { DAYS } from "@/lib/constants";

export default function BookingSectionsList({
  booking,
  setBooking,
  availability,
  offered_sessions,
}) {
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

  return sections.map((section) => (
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
  ));
}
