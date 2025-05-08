import HeroSection from "@/components/sections/HeroSection";
import {LatestWorkSection} from "@/components/sections/LatestWorkSection";
import ServiceSection from "@/components/sections/ServiceSection";
import SkillSection from "@/components/sections/SkillSection";
import HistorySection from "../components/sections/HistorySection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   
      <div className="relative ">
        <HeroSection />
        <LatestWorkSection />
        <ServiceSection />
        <SkillSection />
        <HistorySection />
        <Footer />
      </div>
  );
}
