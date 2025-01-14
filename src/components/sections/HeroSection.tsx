"use client";
import { AuroraBackground } from "../ui/aurora-background";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { SocialNetworkLink } from "../ui/social-network-link";

export default function HeroSection() {
    return(
        <div>
            <AuroraBackground className="">
                <BackgroundBeamsWithCollision className="">
                    <div className="relative flex flex-row">
                        <div className="flex flex-col text-white bg-yellow-400 w-1/3 h-full">
                            <p>Hero Section</p>
                            <div className="flex">
                            <SocialNetworkLink />
                        </div>
                        </div>
                        <div className="flex bg-pink-700 w-2/3 h-full">
                            Middle part
                        </div>
                        <div className="flex bg-black w-3/3 h-full">
                            Last part
                        </div>
                    </div>
                </BackgroundBeamsWithCollision>
            </AuroraBackground>
        </div>
    )
}