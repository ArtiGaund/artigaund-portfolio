"use client";
import React from "react";
import { Radar } from "../radar/Radar";
import { IconContainer } from "../radar/IconContainer";
import { AiFillDollarCircle } from "react-icons/ai";
import AnimatedContent from "../animation/AnimatedContent";
import SectionTitle from "../sub-components/SectionTitle";



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
                     title="Skill Detail" 
                     className="w-[15rem]"
                     />
            <p className="text-gray-400 mb-6 text-base">
              Here are the main areas I focus on — from building responsive web
              apps to developing modern Android experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <IconContainer text="Web Development" delay={0.2} />
              <IconContainer
                text="Mobile App"
                delay={0.4}
                icon={<AiFillDollarCircle className="h-8 w-8 text-slate-600" />}
              />
            </div>
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
            <div className="relative w-full h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
              <Radar className="w-full h-full overflow-hidden" />
            </div>
          </div>
        </AnimatedContent>
        
      </div>
    </section>
  );
}
