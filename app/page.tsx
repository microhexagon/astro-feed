import Featured from "@/components/Featured";
import ExploreMore from "@/components/ExploreMore";
import { Herosection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="text-white">
      <Herosection />
      <Featured />
      <ExploreMore />
    </main>
  );
}
