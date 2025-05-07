"use client";
import React from "react";
import { Radar } from "../radar/Radar";
import { IconContainer } from "../radar/IconContainer";
import { AiFillDollarCircle } from "react-icons/ai";


export default function SkillSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[150px] px-4 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        
        {/* Left Card: Title + Icons (1/3 width) */}
        <div className="relative bg-gray-800 border border-neutral-700 rounded-3xl shadow-lg w-full lg:w-1/3 max-w-7xl p-8 overflow-hidden">
          <h2 className="text-neutral-200 text-2xl md:text-4xl font-bold mb-6">
            Skill Detail
          </h2>
          <p className="text-gray-400 mb-6 text-base">
            Here are the main areas I focus on — from building responsive web apps to developing modern Android experiences.
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

        {/* Right Card: Radar (2/3 width) */}
        <div className="relative bg-gray-800 border border-neutral-700 rounded-3xl shadow-lg w-full lg:w-2/3 max-w-7xl p-8 overflow-hidden">
          <div className="relative w-full h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
            <Radar className="w-full h-full overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
