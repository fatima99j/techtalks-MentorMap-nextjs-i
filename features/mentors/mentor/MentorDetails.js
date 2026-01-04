import { faBuilding, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShareProfileButton from "../ShareProfileButton";
import BookingDetailsWrapper from "./BookingDetailsWrapper";
import BookingModal from "./BookingModal";

export default function MentorDetails({ mentor }) {
  const { mentor_id: id, full_name, job, company, location } = mentor;

  const firstName = full_name.split(" ")[0];

  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{full_name}</h1>
          <p className="text-lg text-gray-700 mb-1">{job}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-gray-400 w-4! h-4!"
                />
              </div>
              <span>{company}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-400 w-4! h-4!"
                />
              </div>
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <BookingModal firstName={firstName}>
            <BookingDetailsWrapper mentor={mentor} />
          </BookingModal>
          <ShareProfileButton url={`${process.env.APP_URL}/mentors/${id}`} />
        </div>
      </div>
    </div>
  );
}
