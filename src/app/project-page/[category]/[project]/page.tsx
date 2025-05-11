
import { getProjectPosts } from "@/backend/notion";
import ImageCard from "@/components/cards/ImageCard";
import Circle from "@/components/sub-components/Circle";
import SectionTitle from "@/components/sub-components/SectionTitle";
import { Project } from "@/store/projectStore";

interface Props{
    params: {
        category: string;
        project: string;
    }
}
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
                              {/* <div className="relative flex bg-gradient-to-br from-purple-500 via-purple-700 to-black w-[150px] h-[35px]
                               rounded-2xl top-[10rem] right-[7rem] overflow-hidden"></div>
                               <div className="relative flex bg-gradient-to-br from-purple-500 via-purple-700 to-black w-[50px] h-[35px]
                               rounded-2xl top-[10rem] right-[20rem] overflow-hidden"></div>
                               <div className="relative flex bg-gradient-to-br from-purple-500 via-purple-700 to-black w-[100px] h-[35px]
                               rounded-2xl top-[15rem] right-[17rem] overflow-hidden"></div> */}
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
                                            <img 
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full"
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
                              {/* Gif */}
                              {/* <div className="rounded-full absolute bg-gradient-to-br from-red-500/80 via-red-700/80 to-black/80 w-[500px] 
              h-[500px] top-[0px] right-[-65px] shadow-[0px_0px_100px_40px_black] overflow-hidden">
               */}
                                  {/* <img 
                                  src="/images/web_animation.gif"
                                   alt="Web animation gif"
                                   className="w-full h-full"
                                  /> */}
                                  {/* <video
                                  src="/videos/web_animation.mp4"
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="w-full h-full object-cover"
                                  style={{ imageRendering: 'auto', transform: 'translateZ(0)' }}
                                />
                              </div> */}
                            </div>
            </section>
            <section className="relative  mt-[150px] flex flex-col justify-center items-center">
                <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
                    <SectionTitle 
                        title="Project Detail Description" 
                        className="w-[30rem]"
                    />
                </div>
            </section>
            <section className="relative  mt-[150px] flex flex-col justify-center items-center">
                <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
                    <SectionTitle 
                        title="Technologies Used" 
                        className="w-[30rem]"
                    />
                </div>
            </section>
            <section className="relative  mt-[150px] flex flex-col justify-center items-center">
                <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
                    <SectionTitle 
                        title="Links" 
                        className="w-[30rem]"
                    />
                </div>
            </section>
        </div>
    )
}