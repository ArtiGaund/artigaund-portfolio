
import React from "react";

import { getProjectPosts } from "@/backend/notion";
import ProjectContentCard from "@/components/cards/ProjectContentCard";
import SectionTitle from "@/components/sub-components/SectionTitle";


export async function generateStaticParams() {
  const categories = ["web", "android", "ml"]; // ideally fetch this dynamically

  return categories.map((category) => ({
    category,
  }));
}
interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullContent: string;
    liveLink: string;
    githubLink: string;
    thumbnail: string;
    technologies: string[];
    status: string;
  }
  
  interface Props {
    params: {
      category: string;
    };
  }
  
  export default async function ProjectsPage({ params }: Props) {
    const projects: Project[] = await getProjectPosts();
    const { category } = params;
  
    const ongoingProjects = projects.filter(
      (project) => project.status !== "Done"
    );
    const completeProjects = projects.filter(
      (project) => project.status === "Done"
    );
  
    return (
      <div className="text-center">
        <div className="mt-[150px] relative bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
            <h1 className="text-3xl font-bold mb-6 capitalize">
            {category} Development Projects
            </h1>
        </div>
        
        {/* Ongoing Projects section */}
        { ongoingProjects.length > 0 && (<section className="relative  mt-[150px] flex flex-col justify-center items-center">
        <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
          <SectionTitle
                   title="Ongoing Projects" 
                   className="w-[30rem]"
                   />
          {ongoingProjects.map((project) => (
            <ProjectContentCard key={project.id} project={project} />
          ))}
          </div>
        </section>)}
          
        {/* Completed Projects section */}
        <section className="relative  mt-[150px] flex flex-col justify-center items-center">
        <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
          <SectionTitle
                   title="Completed Projects" 
                   className="w-[30rem]"
                   />
          {completeProjects.map((project) => (
            <ProjectContentCard key={project.id} project={project} />
          ))}
          </div>
        </section>

      </div>
    );
  }
  