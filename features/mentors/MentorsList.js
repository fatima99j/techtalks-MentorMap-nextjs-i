import { getMentors } from "@/lib/data-service";
import { filterMentors } from "@/lib/mentor-filters";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MentorCard from "./MentorCard";
import MentorsPagination from "./MentorsPagination";

const PAGE_SIZE = 8;

export default async function MentorsList({ searchParams }) {
  const search = searchParams?.search ?? "";
  const industry = searchParams?.industry ?? "";
  const experience = searchParams?.experience ?? "";
  const skill = searchParams?.skill ?? "";
  const page = Number(searchParams?.page ?? 1);

  const mentors = await getMentors();

  const filteredMentors = filterMentors(mentors, {
    search,
    industry,
    experience,
    skill,
  });

  // Pagination
  const totalMentors = filteredMentors.length;
  const totalPages = Math.ceil(totalMentors / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const paginatedMentors = filteredMentors.slice(start, end);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {paginatedMentors.length > 0 ? (
          paginatedMentors.map((mentor) => (
            <MentorCard mentor={mentor} key={mentor.mentor_id} />
          ))
        ) : (
          <div className="col-span-2 text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 bg-indigo-50 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="w-8! h-8! text-primary-600"
              />
            </div>
            <p className="text-gray-900 font-semibold text-xl">
              No mentors found.
            </p>
            <p className="text-gray-500 text-lg mt-2">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <MentorsPagination
          page={page}
          totalPages={totalPages}
          searchParams={searchParams}
        />
      )}
    </>
  );
}
