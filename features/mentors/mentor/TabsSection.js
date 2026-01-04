import Spinner from "@/components/ui/Spinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Suspense } from "react";
import TabsContentList from "./TabsContentList";

export default async function TabsSection({ id }) {
  return (
    <Tabs defaultValue="about" className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <TabsList className="ml-6">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="availability">Availability</TabsTrigger>
        <TabsTrigger value="highlights">Highlights</TabsTrigger>
      </TabsList>

      <Suspense fallback={<Spinner />}>
        <TabsContentList id={id} />
      </Suspense>
    </Tabs>
  );
}
