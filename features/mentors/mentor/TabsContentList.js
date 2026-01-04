import { TabsContent } from "@/components/ui/Tabs";
import { getMentor } from "@/lib/data-service";
import AboutTabSection from "./AboutTabSection";
import AvailabilityTabSection from "./AvailabilityTabSection";
import HighlightsTabSection from "./HighlightsTabSection";
import TabCard from "./TabCard";

export default async function TabsContentList({ id }) {
  const mentor = await getMentor(id);

  const tabSections = [
    { section: <AboutTabSection mentor={mentor} />, value: "about" },
    {
      section: <AvailabilityTabSection mentor={mentor} />,
      value: "availability",
    },
    {
      section: <HighlightsTabSection mentor={mentor} />,
      value: "highlights",
    },
  ];

  return tabSections.map((tab) => (
    <TabsContent key={tab.value} value={tab.value}>
      <TabCard>{tab.section}</TabCard>
    </TabsContent>
  ));
}
