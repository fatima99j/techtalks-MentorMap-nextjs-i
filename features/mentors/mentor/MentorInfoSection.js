import {
  faChalkboardUser,
  faFolder,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MentorDetails from "./MentorDetails";
import { getMentor } from "@/lib/data-service";
import Image from "next/image";

export default async function MentorInfoSection({ id }) {
  const mentor = await getMentor(id);

  const {
    mentor_id,
    full_name,
    average_rating,
    reviews,
    industry,
    mentored_projects,
  } = mentor;
  const mentorIndustry = industry === "Technology" ? "Tech" : industry;

  const STAT_TYPES = [
    {
      name: "Average Rating",
      icon: (
        <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-6! h-6! " />
      ),
      value: average_rating,
    },
    {
      name: "Reviews",
      icon: (
        <FontAwesomeIcon
          icon={faUsers}
          className="text-primary-600 w-6! h-6!"
        />
      ),
      value: reviews.length,
    },
    {
      name: "Projects Mentored",
      icon: (
        <FontAwesomeIcon
          icon={faFolder}
          className="text-primary-600 w-6! h-6!"
        />
      ),
      value: `${mentored_projects}+`,
    },
    {
      name: "Industry",
      icon: (
        <FontAwesomeIcon
          icon={faChalkboardUser}
          className="text-primary-600 w-6! h-6!"
        />
      ),
      value: mentorIndustry,
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16 pb-6">
            <div className="w-32 h-32 shrink-0 bg-white rounded-2xl p-2 shadow-lg">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  alt={`${full_name} mentor profile photo`}
                  src={`/mentors/mentor${mentor_id}.jpg`}
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>
            </div>

            <MentorDetails mentor={mentor} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-gray-200">
            {STAT_TYPES.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className="flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
