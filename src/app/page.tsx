import HeroSection from "@/components/sections/HeroSection";
import SkillSection from "@/components/sections/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      {/* hero section */}
      <HeroSection />
      <section>Latest work</section>
      {/* Services */}
      {/* Skills */}
      <SkillSection />
      {/* about */}
{/* History */}
    </div>
  );
}
