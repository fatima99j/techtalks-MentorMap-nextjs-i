"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import FilterGroup from "./FilterGroup";
import ResetFiltersButton from "./ResetFiltersButton";

const INDUSTRIES = [
  { value: "technology", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "marketing", label: "Marketing" },
  { value: "data-science", label: "Data Science" },
];

const EXPERIENCE_LEVELS = [
  { value: "5-10", label: "5-10 years" },
  { value: "10-15", label: "10-15 years" },
  { value: "15-plus", label: "15+ years" },
];

const SKILLS = [
  { value: "react", label: "React" },
  { value: "python", label: "Python" },
  { value: "leadership", label: "Leadership" },
  { value: "agile", label: "Agile" },
  { value: "wireframing", label: "Wireframing" },
  { value: "sql", label: "SQL" },
];

export default function FiltersSidebar() {
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get all filters and calc the total
  const activeExperience = searchParams.get("experience");
  const activeIndustry = searchParams.get("industry");
  const activeSkill = searchParams.get("skill");

  const totalFilters = [activeExperience, activeIndustry, activeSkill].filter(
    (item) => item !== null && item !== undefined
  ).length;

  return (
    <aside className="w-full lg:w-80">
      <div className="p-4 lg:p-6 shadow-xs sm:shadow-sm rounded-2xl bg-[#fefefe] border border-gray-200 lg:sticky lg:top-4">
        {/* Mobile filter header */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex justify-between items-center lg:mb-6 lg:pointer-events-none"
        >
          <h2 className="text-lg font-bold text-gray-900">
            Filters{" "}
            {totalFilters > 0 && (
              <span className="text-blue-600">({totalFilters})</span>
            )}
          </h2>
          <div className="flex items-center gap-2">
            {totalFilters > 0 && (
              <ResetFiltersButton>Clear All</ResetFiltersButton>
            )}

            <span className="lg:hidden">
              {isFilterOpen ? (
                <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5" />
              )}
            </span>
          </div>
        </button>

        <div className={`${isFilterOpen ? "block" : "hidden"} lg:block`}>
          <div className="space-y-6">
            <FilterGroup
              filterName={"Experience Level"}
              filterData={EXPERIENCE_LEVELS}
              filterParam={"experience"}
            />
            <FilterGroup
              filterName={"Industry"}
              filterData={INDUSTRIES}
              filterParam={"industry"}
            />
            <FilterGroup
              filterName={"Skills"}
              filterData={SKILLS}
              filterParam={"skill"}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
