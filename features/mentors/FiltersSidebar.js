"use client";

import { useSearchParams } from "next/navigation";
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

  const activeExperience = searchParams.get("experience");
  const activeIndustry = searchParams.get("industry");
  const activeSkill = searchParams.get("skill");

  const totalFilters = [activeExperience, activeIndustry, activeSkill].filter(
    (item) => item !== null && item !== undefined
  ).length;

  return (
    <aside className="w-80">
      <div className="sticky p-6 shadow-sm rounded-2xl bg-white border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            Filters{" "}
            {totalFilters > 0 && (
              <span className="text-blue-600">({totalFilters})</span>
            )}
          </h2>
          {totalFilters > 0 && (
            <ResetFiltersButton>Clear All</ResetFiltersButton>
          )}
        </div>

        <div className="mb-6">
          <FilterGroup
            filterName={"Experience Level"}
            filterData={EXPERIENCE_LEVELS}
            filterParam={"experience"}
          />
        </div>

        <div className="mb-6">
          <FilterGroup
            filterName={"Industry"}
            filterData={INDUSTRIES}
            filterParam={"industry"}
          />
        </div>

        <div>
          <FilterGroup
            filterName={"Skills"}
            filterData={SKILLS}
            filterParam={"skill"}
          />
        </div>
      </div>
    </aside>
  );
}
