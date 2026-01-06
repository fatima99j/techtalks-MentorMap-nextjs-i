"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  function handleSearch(search) {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  function handleClear() {
    setSearch("");
    const params = new URLSearchParams(searchParams);
    params.delete("search");

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="bg-[#fefefe] rounded-xl shadow-2xl p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(search);
        }}
        className="flex flex-col sm:flex-row gap-3 justify-center items-stretch"
      >
        <div className="flex-1 relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, role..."
            className="h-12 sm:h-14 w-full pl-10 sm:pl-12 pr-10 sm:pr-12 rounded-xl! text-gray-900 text-base sm:text-lg border-none focus:border-none"
          />

          {search && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute text-2xl sm:text-[1.7rem] right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>

        <Button
          type="submit"
          className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl! hover:shadow-lg transition-all duration-300 whitespace-nowrap"
        >
          <span className="sm:hidden">Search</span>
          <span className="hidden sm:inline">Search Mentors</span>
        </Button>
      </form>
    </div>
  );
}
