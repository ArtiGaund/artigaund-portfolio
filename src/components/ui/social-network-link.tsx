import React from "react";
import { FloatingDock } from "./floating-dock";
import { 
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconBrandGmail
} from "@tabler/icons-react"
import Image from "next/image";

export function SocialNetworkLink() {
    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-300"/>
            ),
            href: "https://www.linkedin.com/in/artigaund/",
        },
        {
            title: "Github",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-300"/>
            ),
            href: "https://github.com/ArtiGaund",
        },
        {
            title: "X",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-300"/>
            ),
            href: "https://x.com/ArtiGaund",
        },
        {
            title: "Gmail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-300"/>
            ),
            href: "#",
        }
    ];
    return (
        <div className="flex items-center justify-center bg-black h-[5rem] w-full">
            <FloatingDock 
            mobileClassName="translate-y-20"
            items={links}
            />
        </div>
    )
}