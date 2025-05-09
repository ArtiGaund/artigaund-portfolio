import AnimatedContent from "../animation/AnimatedContent";
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

interface ProjectContentCardProps {
  project: Project;
}

export default function ProjectContentCard({ project }: ProjectContentCardProps) {
  console.log("Project data:", project);

  return (
    <AnimatedContent direction="vertical" distance={150} delay={200}>
    <div className="relative flex-col my-6 w-96 rounded-lg bordershadow-sm border-slate-700 bg-slate-900">
      <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
        <img
          className="object-cover w-full h-full rounded-md"
          src={
            project.thumbnail ||
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          }
          alt={project.title}
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-xl font-semibold text-white">
          {project.title}
        </h6>
        <p className="font-light leading-normal  text-slate-300">
          {project.shortDescription}
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="rounded-md px-4 py-2 text-sm  shadow-md transition-all
            hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 
           active:shadow-none disabled:pointer-events-none disabled:opacity-50
           disabled:shadow-none bg-white text-slate-900 hover:bg-slate-200"
          type="button"
        >
          Read more
        </button>
      </div>
    </div>
    </AnimatedContent>
  );
}
