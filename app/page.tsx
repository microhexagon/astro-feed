import Featured from "@/components/Featured";
import ExploreMore from "@/components/ExploreMore";
import { Herosection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="text-white bg-gray-900 px-4 sm:px-8 md:px-16 lg:px-24">
      <Herosection />
      <Featured />
      <ExploreMore />
    </main>
  );
}
