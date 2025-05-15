import React from "react";
import { FloatingDock } from "./floating-dock";
import { 
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconBrandGmail
} from "@tabler/icons-react"

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
            title: "Twitter",
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
        <div className="absolute top-[35rem] left-[4rem] -translate-y-1/2">
            <FloatingDock 
                // mobileClassName="translate-y-20"
                desktopClassName="bg-gray-900"
                items={links}
            />
        </div>
    )
}