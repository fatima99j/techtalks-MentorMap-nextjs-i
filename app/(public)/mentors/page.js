import Spinner from "@/components/ui/Spinner";
import SpinnerMini from "@/components/ui/SpinnerMini";
import FiltersSidebar from "@/features/mentors/FiltersSidebar";
import MentorsCount from "@/features/mentors/MentorsCount";
import MentorsHeroSection from "@/features/mentors/MentorsHeroSection";
import MentorsList from "@/features/mentors/MentorsList";
import { Suspense } from "react";

export const metadata = {
  title: "Find a Mentor",
  description: "Browse our community of experienced mentors and book a session",
};

export const revalidate = 3600;

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const key = JSON.stringify(params);

  return (
    <>
      <MentorsHeroSection />

      <section className="py-12">
        <div className="container--common flex flex-col lg:flex-row gap-8">
          <FiltersSidebar />

          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-2xl font-bold text-gray-900">All Mentors</h2>
            <div key={key}>
              <Suspense fallback={<SpinnerMini />}>
                <MentorsCount searchParams={params} />
              </Suspense>

              <Suspense fallback={<Spinner />}>
                <MentorsList searchParams={params} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
