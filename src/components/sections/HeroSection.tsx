"use client";
import { AuroraBackground } from "../ui/aurora-background";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { SocialNetworkLink } from "../ui/social-network-link";

export default function HeroSection() {
    return(
        <div>
            <AuroraBackground className="">
                <BackgroundBeamsWithCollision className="">
                    <div className="relative flex flex-col">
                        <div className="flex text-white">Hero Section</div>
                        <div className="flex">
                            <SocialNetworkLink />
                        </div>
                    </div>
                </BackgroundBeamsWithCollision>
            </AuroraBackground>
        </div>
    )
}