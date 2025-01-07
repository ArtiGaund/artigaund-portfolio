import HeroSection from "@/components/sections/HeroSection";
import LatestWorkSection from "@/components/sections/LatestWorkSection";
import SkillSection from "@/components/sections/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
   
      <div className="relative text-center">
        {/* hero section */}
        <HeroSection />
        {/* Latest work */}
        <LatestWorkSection />
        {/* Services */}
        {/* Skills */}
        <SkillSection />
        {/* about */}
  {/* History */}
      </div>
  );
}
