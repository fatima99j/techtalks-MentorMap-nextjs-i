"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ResetFiltersButton({ reset, children }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClearFilters() {
    const params = new URLSearchParams(searchParams);
    if (reset === "all") {
      params.delete("search");
    }

    params.delete("experience");
    params.delete("industry");
    params.delete("skill");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <button
      onClick={handleClearFilters}
      className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
    >
      {children}
    </button>
  );
}
