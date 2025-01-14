"use client"
import React from "react"
import { Radar } from "../radar/Radar"
import { IconContainer } from "../radar/IconContainer"
// import { twMerge } from "tailwind-merge"
// import { motion } from "framer-motion"
import { AiFillDollarCircle} from "react-icons/ai"
export default function SkillSection() {
    return (
        <div className="mt-[150px] flex justify-center items-center">
            <div className="px-8 flex flex-col justify-center items-center">
            <h2 className="mx-auto max-w-7xl pl-4 text-neutral-200 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold">
                Skill Detail
            </h2>
        </div>
        <div 
        className="relative flex h-[50rem] w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                    <IconContainer text="Web Development" delay={0.2}/>
                    <IconContainer 
                    delay={0.4}
                    text="Mobile App"
                    icon={<AiFillDollarCircle className="h-8 w-8 text-slate-600"/>}
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                    {/* IconContainer */}
                </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                    {/* IconContainer */}
                </div>
            </div>
            <Radar className="absolute"/>
            {/* <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"/> */}
        </div>
        </div>
    )
}