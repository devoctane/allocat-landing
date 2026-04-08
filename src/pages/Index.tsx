import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedWorks from "@/components/SelectedWorks";
import JournalSection from "@/components/JournalSection";
import ExplorationsSection from "@/components/ExplorationsSection";
import StatsSection from "@/components/StatsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <HeroSection />
      <SelectedWorks />
      <JournalSection />
      <ExplorationsSection />
      <StatsSection />
      <ContactFooter />
    </>
  );
};

export default Index;
