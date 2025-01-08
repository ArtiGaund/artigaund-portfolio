"use client";
import { AuroraBackground } from "../ui/aurora-background";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function HeroSection() {
    return(
        <div>
            <AuroraBackground className="">
                <BackgroundBeamsWithCollision className="">
                <div className="text-white">Hero Section</div>
                </BackgroundBeamsWithCollision>
            </AuroraBackground>
        </div>
    )
}