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
        <div className="absolute top-[0px] right-[-65px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-500/80 via-red-700/80 to-black/80 shadow-[0px_0px_100px_40px_black] overflow-hidden">
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