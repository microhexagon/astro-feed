import HeroSection from "../components/HeroSection";
import Featured from "../components/Featured";
import ExploreMore from "../components/ExploreMore";

export default function Home() {
  return (
    <main className="pt-10 pr-40 pb-10 pl-40 bg-gray-800 text-white">
      <HeroSection />
      <Featured />
      <ExploreMore />
    </main>
  );
}
