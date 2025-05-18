"use client"
import React, { CSSProperties, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"
interface RadarProps {
  className?: string; // Optional string for className
}
export const Radar = ({ className }: RadarProps) => {
    const circles = new Array(8).fill(1);   
    const [scale, setScale ] = useState(5);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            if(width<640) setScale(3);
            else if(width<768) setScale(3.5);
            else setScale(5);
        }
        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale); 
    },[])
    return(
        <div
        className={twMerge(
            "relative flex h-20 w-20 items-center justify-center rounded-full",
            className
        )}
        >
            <div
            style={{
                transformOrigin: "right center",
            }}
            className="absolute right-1/2 top-1/2 z-40 flex h-[5px] overflow-hidden animate-radar-spin w-[250px] md:w-[400px]
             lg:w-[400px] items-end justify-center bg-transparent"
            >
                {/* Radar line that rotates */}
                <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent
                 via-sky-600 to-transparent" />
                </div>
                {/* concentric circles */}
                {circles.map((circle, idx) => (
                    <Circle 
                    style={{
                        height: `${(idx + 1) * scale}rem`,
                        width: `${(idx + 1) * scale}rem`,
                        border: `1px solid rgba(203, 213, 225, ${1 - (idx + 1) * 0.1})`,
                    }}
                    key={`motion-${idx}`}
                    idx={idx}
                    />
                ))}
            </div>
    )
} 

interface CircleProps {
  className?: string; // Optional string for className
  idx: number; // Index of the circle
  style?: CSSProperties; // Inline styles
}

// Creating circles
export const Circle = ({ className, idx, ...rest }: CircleProps) => {
    return (
        <motion.div
        {...rest}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            delay: idx * 0.1,
            duration: 0.2,
        }}
        className={twMerge(
            "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200",
            className
        )}
        ></motion.div>
    )
}