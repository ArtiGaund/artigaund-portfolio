"use client"

import { 
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
} from "@tabler/icons-react"
import Image from "next/image"

export default function Footer() {
    return(
        <footer className="text-gray-400 bg-gray-900 body-font">
            
           <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">

               
               <aside className="grid grid-flow-col items-cente gap-4">
                     <Image
                        src="/images/logo.png"
                        alt="AG Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <p className="ml-3 text-center justify-center mt-3">Made by Arti Gaund © {new Date().getFullYear()}</p>
                </aside>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mr-10">
                   <nav className="grid grid-flow-col gap-2 md:place-self-center md:justify-self-end">

                        <a href="https://www.linkedin.com/in/artigaund">
                            <IconBrandLinkedin className="h-full w-full text-neutral-300"/>
                        </a>
                        <a href="https://github.com/ArtiGaund">
                            <IconBrandGithub className="h-full w-full text-neutral-300"/>
                        </a>
                        <a href="https://x.com/ArtiGaund">
                            <IconBrandX className="h-full w-full text-neutral-300"/>
                        </a>
                       
                    </nav>
                </span>
            </div>
        </footer>
    )
}