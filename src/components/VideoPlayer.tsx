"use client";

import React, { useEffect, useRef} from "react";

interface VideoPlayerProps { 
    src: string;
}
export const VideoPlayer = ({ src }: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.playbackRate = 0.3;
        }
    }, [])

    return(
        <div className="absolute md:top-[50px] md:right-[-10rem] lg:top-[0px] lg:right-[-65px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-red-500/80 via-red-700/80 to-black/80 shadow-[0px_0px_100px_40px_black] overflow-hidden">
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ imageRendering: "auto", transform: "translateZ(0)" }}
            />
        </div>
    )
}