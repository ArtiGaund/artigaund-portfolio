
import { getProjectPosts } from "@/backend/notion";
import ProjectContentCard from "@/components/cards/ProjectContentCard";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = ["web", "android", "ml"]; // <-- replace with actual categories

    const paths = categories.map((category) => ({
        params: { category },
    }));

    return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projects = await getProjectPosts();
    const category = params?.category as string;

    return {
        props: {
            projects,
            category,
        },
    };
};

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

interface ProjectsPageProps {
    projects: Project[];
    category: string;
}

type Params = {
    params: {
        category: string;
    };
};
export default function ProjectsPage({ projects,category } : ProjectsPageProps){
    const OngoingProjects = projects.filter((project) => project.status !== "Done");
    const completeProjects = projects.filter((project) => project.status === "Done");
    return(
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 capitalize">
                {category} Development Projects
            </h1>
            <div>
                <section>Ongoing projects</section>
                {OngoingProjects.map((project) => (
                    <ProjectContentCard key={project.id} project={project} />
                ))}
            </div>
            

            <section>Completed projects</section>
            {completeProjects.map((project) => (
                <ProjectContentCard key={project.id} project={project} />
            ))}
        </div>
    )
}