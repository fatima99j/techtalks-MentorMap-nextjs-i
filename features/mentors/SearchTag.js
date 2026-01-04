"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchTag({ label, searchValue }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const isActive = searchParams.get("search") === searchValue;

  function handleSearch(searchValue) {
    const params = new URLSearchParams(searchParams);
    params.set("search", searchValue);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  function handleClear(e) {
    e.stopPropagation();
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <button
      onClick={() => handleSearch(searchValue)}
      className={`px-4 py-1.5 backdrop-blur-sm rounded-full text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
        isActive
          ? "bg-white/40 hover:bg-white/50"
          : "bg-white/20 hover:bg-white/30"
      }`}
    >
      <span>{label}</span>
      {isActive && (
        <span
          onClick={handleClear}
          className="text-xl text-gray-200 hover:text-gray-500 transition-colors duration-200 leading-none"
          aria-label="Clear search tag"
        >
          &times;
        </span>
      )}
    </button>
  );
}
