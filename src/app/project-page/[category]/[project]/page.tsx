
import { getNotionPageContent, getProjectPosts } from "@/backend/notion";
import ImageCard from "@/components/cards/ImageCard";
import Circle from "@/components/sub-components/Circle";
import SectionTitle from "@/components/sub-components/SectionTitle";
import { Project } from "@/store/projectStore";
import { 
    IconBrandGithub,
    IconExternalLink
    } from "@tabler/icons-react"
interface Props{
    params: {
        category: string;
        project: string;
    }
}
import Image from "next/image";
export const dynamicParams = true;
export default async function ProjectPage(props: Props) {
    const { category, project: projectId} = props.params;
    const projects: Project[] = await getProjectPosts();
    
    const project = projects.find((p) => p.id === projectId);
    console.log("Project data in project page:", project);

    

    if(!project){
        return (
            <p className="text-white">
                Project data not found. Please go back and try again.
            </p>
        )
    }

    // Fetch full content from Notion
  const fullContentBlocks = await getNotionPageContent(project.fullContent);
    return(
        <div className="text-center">
            <section className="relative flex flex-col justify-center items-center">
                <div className="relative flex flex-row w-full h-[20rem]">
                    <div className="relative flex justify-center items-center w-2/3 top-[4rem]">
                <h1
                    className="text-6xl h-[70px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 drop-shadow-lg capitalize"
                  >
                    Project : {project.title}
                  </h1>
              </div>
              <div className="relative flex w-1/3">
                              
                               <Circle
                                      size={300}
                                     gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
                                      position="top-[-50px] right-[-100px]"
                                      opacity="opacity-80"
                                      shadow="shadow-[0px_0px_100px_40px_black]"
                                    />
                                <ImageCard 
                                        width={550}
                                        height={380}
                                        // color=" bg-red-700"
                                        position="top-[50px] right-[120px] z-20"
                                        shadow="shadow-[0px_0px_100px_40px_black]"
                                        className="overflow-hidden"
                                        >
                                            <Image 
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full"
                                            width={800} 
                                            height={600}
                                            />
                                </ImageCard>           
                                </div>
                              <Circle
                                      size={200}
                                     gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
                                      position="right-[600px] bottom-[-200px]"
                                      opacity="opacity-80"
                                      shadow="shadow-[0px_0px_100px_40px_black]"
                                    />
                                <Circle
                                      size={150}
                                     gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
                                      position="right-[500px] bottom-[-200px]"
                                      opacity="opacity-80"
                                      shadow="shadow-[0px_0px_100px_40px_black]"
                                    />
                            </div>
            </section>
           {/* Full Content Section */}
      <section className="relative mt-[150px] flex flex-col justify-center items-center">
        <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
          <SectionTitle title="Project Detail Description" className="w-[30rem]" />
          <div className="mt-8 text-left text-white">
            {fullContentBlocks.map((block: any, index: number) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mb-4">
                    {block.paragraph.rich_text.map((text: any) => text.plain_text).join(" ")}
                  </p>
                );
              }
              if (block.type === "heading_1") {
                return (
                  <h1 key={index} className="text-2xl font-bold mb-4">
                    {block.heading_1.rich_text.map((text: any) => text.plain_text).join(" ")}
                  </h1>
                );
              }
              if (block.type === "heading_2") {
                return (
                  <h2 key={index} className="text-xl font-semibold mb-4">
                    {block.heading_2.rich_text.map((text: any) => text.plain_text).join(" ")}
                  </h2>
                );
              }
              if (block.type === "bulleted_list_item") {
                return (
                  <li key={index} className="list-disc ml-6">
                    {block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join(" ")}
                  </li>
                );
              }
              // Add more block types as needed
              return null;
            })}
          </div>
          <div>
            <div className="flex justify-between items-center">
    {/* Left side: GitHub + Live link */}
    <div className="flex gap-3">
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8">
        <IconBrandGithub className="w-full h-full text-neutral-300" />
      </a>
      {project.liveLink && (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8">
          <IconExternalLink className="w-full h-full text-neutral-300" />
        </a>
      )}
    </div>
    </div>
          </div>
        </div>
      </section>
        </div>
    )
}