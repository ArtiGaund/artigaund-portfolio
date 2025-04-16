
import ProjectContentCard from "@/components/cards/ProjectContentCard";
import { notFound } from "next/navigation";

type Params = {
    params: {
        category: string;
    };
};
export default function ProjectsPage({ params } : Params){
    const { category } = params;

    
    return(
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 capitalize">
                {category} Development Projects
            </h1>
            <div>
                <section>Ongoing projects</section>
                <ProjectContentCard />
            </div>
            

            <section>Completed projects</section>
        </div>
    )
}