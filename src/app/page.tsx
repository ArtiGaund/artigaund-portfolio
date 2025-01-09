import HeroSection from "@/components/sections/HeroSection";
import LatestWorkSection from "@/components/sections/LatestWorkSection";
import ServiceSection from "@/components/sections/ServiceSection";
import SkillSection from "@/components/sections/SkillSection";
import Image from "next/image";
import AboutSection from "../components/sections/AboutSection";
import HistorySection from "../components/sections/HistorySection";

export default function Home() {
  return (
   
      <div className="relative text-center">
        {/* hero section */}
        <HeroSection />
        {/* Latest work */}
        <LatestWorkSection />
        {/* Services */}
        <ServiceSection />
        {/* Skills */}
        <SkillSection />
        {/* about */}
        <AboutSection />
        {/* History */}
        <HistorySection />
      </div>
  );
}
