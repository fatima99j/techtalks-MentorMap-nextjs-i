import { getMentors, getMentorsCount } from "@/lib/data-service";
import { filterMentors } from "@/lib/mentor-filters";
import ResetFiltersButton from "./ResetFiltersButton";

export default async function MentorsCount({ searchParams }) {
  const search = searchParams?.search ?? "";
  const industry = searchParams?.industry ?? "";
  const experience = searchParams?.experience ?? "";
  const skill = searchParams?.skill ?? "";

  let mentorsCount;

  const hasFilters = search || industry || experience || skill;

  if (hasFilters) {
    const mentors = await getMentors();
    // utility fn
    const filteredMentors = filterMentors(mentors, {
      search,
      industry,
      experience,
      skill,
    });
    mentorsCount = filteredMentors.length;
  } else {
    mentorsCount = await getMentorsCount();
  }

  return (
    <div className="flex items-center gap-2">
      <p className="text-gray-600">
        Showing {mentorsCount} mentor{mentorsCount !== 1 && "s"}
      </p>
      {hasFilters && (
        <ResetFiltersButton reset={"all"}>Show all</ResetFiltersButton>
      )}
    </div>
  );
}
