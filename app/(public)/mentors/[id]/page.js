import MentorInfoSection from "@/features/mentors/mentor/MentorInfoSection";
import TabsSection from "@/features/mentors/mentor/TabsSection";
import { Suspense } from "react";

import Spinner from "@/components/ui/Spinner";
import { getAllMentorIds, getMentorName } from "@/lib/data-service";

export const revalidate = 1800;

export async function generateMetadata({ params }) {
  const { id } = await params;

  const firstName = await getMentorName(id);
  if (!firstName)
    return {
      title: "Mentor Not Found",
      description: "The mentor you're looking for could not be found.",
    };

  return {
    title: `${firstName} - Mentor`,
    description: `Book a mentoring session with ${firstName}.`,
  };
}

export async function generateStaticParams() {
  const ids = await getAllMentorIds();

  return ids.map((id) => ({
    id: id,
  }));
}

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <>
      {/* Profile background */}
      <div className="relative">
        <div className="w-full h-64">
          <div className="absolute inset-0 bg-gradient-to-b from-[#93c5fd]/15 via-[#93c5fd]/8 to-white" />
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <MentorInfoSection id={id} />
      </Suspense>

      <TabsSection id={id} />
    </>
  );
}
