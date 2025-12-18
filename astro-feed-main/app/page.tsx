import { Featured } from "@/components/Featured";
import { ExploreMore } from "@/components/ExploreMore";
import { Herosection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Herosection />
      <Featured />
      <ExploreMore />
    </main>
  );
}