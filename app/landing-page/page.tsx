import ExploreMore from "@/components/landing page/ExploreMore";
import Featured from "@/components/landing page/Featured";
import HeroSection from "@/components/landing page/HeroSection";
import React from "react";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <Featured />
      <ExploreMore />
    </main>
  );
};

export default LandingPage;
