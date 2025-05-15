// "use client";

import React  from "react";
import { Carousel } from "@/components/ui/cards-carousel";
import AnimatedContent from "../animation/AnimatedContent";
import SectionTitle from "../sub-components/SectionTitle";
import { getProjectPosts } from "@/backend/notion";
import ProjectContentCard from "../cards/ProjectContentCard";



export async function LatestWorkSection() {


  const currentProjects = await getProjectPosts();

  console.log("Projects in latest work section", currentProjects);
  const cards = currentProjects.map((project) => (
    <ProjectContentCard key={project.id} project={project} category={"web"} />
  ));

  return (
     <AnimatedContent direction="vertical" distance={150} delay={200}>
    <section className="w-full max-w-7xl mx-auto px-4 mt-[150px]">
      <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
    <SectionTitle
             title="Recent Projects" 
             className="w-[30rem]"
             />
  <Carousel items={cards} />
  </div>
</section>
</AnimatedContent>
  );
}

