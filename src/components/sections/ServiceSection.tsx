import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import AnimatedContent from "../animation/AnimatedContent";
import SectionTitle from "../sub-components/SectionTitle";

export default function ServiceSection() {
  const features = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building responsive, scalable, and secure web apps using modern frameworks like React, Next.js, and Node.js.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Android App Development",
    description:
      "Crafting intuitive and performant Android apps with Kotlin, Jetpack Compose, and modern architecture.",
    icon: <IconEaseInOut />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Translating designs into smooth, pixel-perfect interfaces that elevate user experience.",
    icon: <IconHeart />,
  },
  {
    title: "API Design & Integration",
    description:
      "Creating and integrating RESTful APIs and third-party services to power robust app functionality.",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "Real-time Features",
    description:
      "Implementing real-time updates using sockets or Firebase to enhance collaboration and interactivity.",
    icon: <IconCloud />,
  },
  {
    title: "Database & Backend",
    description:
      "Designing efficient data models and backend logic using MongoDB, PostgreSQL, Firebase, or Supabase.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "Project Collaboration",
    description:
      "Working seamlessly with teams using Git, CI/CD, and Agile practices for efficient delivery.",
    icon: <IconHelp />,
  },
  {
    title: "Clean, Maintainable Code",
    description:
      "Writing modular, reusable, and well-documented code that scales with your application.",
    icon: <IconCurrencyDollar />,
  },
];

  return (
    <AnimatedContent direction="vertical" distance={150} delay={200}>
    <section className="relative  mt-[150px] flex flex-col justify-center items-center px-4">
      {/* Outter card */}
      <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
        <SectionTitle
         title="What Services I Offer ?" 
         className="w-[20rem] lg:w-[30rem] md:w-[30rem]"
         />
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
        ))}
        </div>
      </div>
    </section>
    </AnimatedContent>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col transition duration-300 hover:shadow-[0_0_20px_rgba(0,200,255,0.2)] lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}

    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />

      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
