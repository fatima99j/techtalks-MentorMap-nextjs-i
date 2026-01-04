import SearchBar from "@/features/mentors/SearchBar";
import SearchTag from "./SearchTag";

export const SEARCH_TAGS = [
  { label: "UX Researcher", query: "senior-ux-researcher" },
  { label: "Full Stack Developer", query: "full-stack-developer" },
  { label: "Marketing Director", query: "marketing-director" },
  { label: "Engineering Manager", query: "engineering-manager" },
  { label: "Frontend Developer", query: "frontend-developer" },
];
export default function MentorsHeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-[#fefefe] py-16">
      <div className="container--common">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Mentor
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Connect with industry experts who can guide your career journey
          </p>

          <SearchBar />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto">
          <span className="text-sm text-blue-100">Eg:</span>
          {SEARCH_TAGS.map((tag) => (
            <SearchTag
              key={tag.label}
              label={tag.label}
              searchValue={tag.query}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
