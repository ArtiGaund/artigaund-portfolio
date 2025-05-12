"use client";
import React from "react";
import { Radar } from "../radar/Radar";
import { IconContainer } from "../radar/IconContainer";
import { AiFillDollarCircle } from "react-icons/ai";
import AnimatedContent from "../animation/AnimatedContent";
import SectionTitle from "../sub-components/SectionTitle";
import { 
  FaDatabase,
  
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJquery,
  SiCloudinary,
  SiDocker,
  SiClerk,
  SiAxios,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiGithub,
  SiPython,
  SiReact,
  SiAndroid,
  SiFlutter,
  SiPostman,
} from "react-icons/si";

const iconData = [
  { icon: <SiReact className="h-6 w-6 text-sky-400 z-20" />, text: "React", x: "40%", y: "50%" },
  { icon: <SiAndroid className="h-6 w-6 text-green-500 z-20" />, text: "Android", x: "70%", y: "30%" },
  { icon: <FaDatabase className="h-6 w-6 text-yellow-500 z-20" />, text: "Database", x: "60%", y: "20%" },
  { icon: <SiNextdotjs className="h-6 w-6 text-white z-20" />, text: "Next.js", x: "40%", y: "80%" },
  { icon: <SiJavascript className="h-6 w-6 text-yellow-500 z-20" />, text: "JavaScript", x: "30%", y: "70%" },
  { icon: <SiTypescript className="h-6 w-6 text-blue-600 z-20" />, text: "TypeScript", x: "70%", y: "70%" },
  { icon: <SiNodedotjs className="h-6 w-6 text-green-500 z-20" />, text: "Node.js", x: "30%", y: "30%" },
  { icon: <SiTailwindcss className="h-6 w-6 text-cyan-400 z-20" />, text: "Tailwind CSS", x: "50%", y: "10%" },
  { icon: <SiFramer className="h-6 w-6 text-violet-400 z-20" />, text: "Framer Motion", x: "60%", y: "90%" },
  { icon: <SiShadcnui className="h-6 w-6 text-violet-400 z-20" />, text: "Shadcn UI", x: "40%", y: "10%" },
  { icon: <SiRedux className="h-6 w-6 text-violet-400 z-20" />, text: "Redux Toolkit", x: "50%", y: "40%" },
  { icon: <SiMongodb className="h-6 w-6 text-green-500 z-20" />, text: "MongoDB", x: "20%", y: "40%" },
  { icon: <SiPostgresql className="h-6 w-6 text-blue-600 z-20" />, text: "PostgreSQL", x: "60%", y: "60%" },
  { icon: <SiMysql className="h-6 w-6 text-yellow-500 z-20" />, text: "MySQL", x: "80%", y: "40%" },
  { icon: <SiJquery className="h-6 w-6 text-blue-600 z-20" />, text: "jQuery", x: "20%", y: "70%" },
  { icon: <SiCloudinary className="h-6 w-6 text-cyan-400 z-20" />, text: "Cloudinary", x: "50%", y: "80%" },
  { icon: <SiDocker className="h-6 w-6 text-cyan-400 z-20" />, text: "Docker", x: "70%", y: "50%" },
  { icon: <SiPostman className="h-6 w-6 text-cyan-400 z-20" />, text: "Postman", x: "30%", y: "50%" },
  { icon: <SiClerk className="h-6 w-6 text-violet-400 z-20" />, text: "Clerk", x: "80%", y: "30%" },
  { icon: <SiAxios className="h-6 w-6 text-violet-400 z-20" />, text: "Axios", x: "20%", y: "90%" },
  { icon: <SiHtml5 className="h-6 w-6 text-orange-500 z-20" />, text: "HTML", x: "30%", y: "10%" },
  { icon: <SiCss3 className="h-6 w-6 text-blue-600 z-20" />, text: "CSS", x: "90%", y: "90%" },
  { icon: <SiSass className="h-6 w-6 text-pink-500 z-20" />, text: "Sass", x: "10%", y: "90%" },
  
  
];
export default function SkillSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[150px] px-4 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        
        {/* Left Card */}
        <AnimatedContent
          className="w-full lg:w-1/3"
          direction="vertical"
          distance={150}
          delay={200}
        >
          <div className=" mt-[150px] relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 p-8 h-1/2">
          
            <SectionTitle
                     title="Technologies I Work With —" 
                     className="w-[20rem]"
                     />
            <p className="text-gray-400 mb-6 text-base">
              A versatile skill set spanning frontend, backend, databases, and mobile development — enabling
               me to build full-featured, modern apps.
            </p>
            
          </div>
        </AnimatedContent>

        {/* Right Card */}
       <AnimatedContent
  className="w-full lg:w-2/3"
  direction="vertical"
  distance={150}
  delay={300}
>
  <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 p-8 h-full">
    <div className="relative w-full h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] flex items-center justify-center m-[30px]">
      <Radar className="absolute z-10 w-[16rem] h-[16rem]" />
      {/* <IconContainer
        text="Web Development"
        delay={0.3}
        icon={<AiFillDollarCircle className="h-8 w-8 text-sky-500" />}
        className="absolute z-20"
      /> */}
      {iconData.map((item,idx) => (
        <div
        key={idx}
        className="absolute"
        style={{
          left: item.x,
          top: item.y,
          transform: "translate(-50%, -50%)",
        }}
        >
          <IconContainer
            text={item.text}
            delay={idx * 0.1}
            icon={item.icon}
          />
          </div>
      ))}
    </div>
  </div>
</AnimatedContent>
        
      </div>
    </section>
  );
}
