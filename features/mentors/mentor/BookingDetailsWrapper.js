import BookingDetailsList from "./BookingDetailsList";

export default function BookingDetailsWrapper({ mentor }) {
  const { offered_sessions, availability } = mentor;

  return (
    <div className="space-y-6">
      <BookingDetailsList
        availability={availability}
        offered_sessions={offered_sessions}
      />
    </div>
  );
}
