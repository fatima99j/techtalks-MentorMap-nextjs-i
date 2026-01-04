"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterButton({ children, filterName, filterValue }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const currentValue = searchParams.get(filterName);

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);

    if (currentValue === filter) {
      params.delete(filterName);
    } else {
      params.set(filterName, filter);
    }
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  const isActive = currentValue === filterValue;

  return (
    <button
      onClick={() => handleFilter(filterValue)}
      className={`px-5 py-2 rounded-full font-medium text-sm border transition-all duration-300 cursor-pointer ${
        isActive
          ? "bg-primary-600 text-primary-100 border-primary-600"
          : "bg-[#fefefe] text-gray-700 border-gray-300 hover:border-[#8066ff] hover:bg-indigo-50"
      }`}
    >
      {children}
    </button>
  );
}
