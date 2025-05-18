import React from "react";

export default function ImageCard({
    // width,
    // height,
    color,
    // position,
    shadow,
    children,
    className,
}: {
    // width: number;
    // height: number;
    color?: string;
    // position: string;
    shadow?: string;
    children: React.ReactNode;
    className?: string;
}){
    return(
        <div
        // style={{ width: width, height: height }}
        className={`w-[450px] h-[600px] absolute ${color} rounded-3xl ${shadow} ${className}`}
        >
            {children}
        </div>
    )
}