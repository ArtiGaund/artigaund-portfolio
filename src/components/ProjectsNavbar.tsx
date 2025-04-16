"use client";

import Link from "next/link";
import { CompareDemo } from "./CompareDemo";

export function ProjectsNavbar({ onClose }: { onClose: () => void}) {
  return (
    <div className="flex flex-row w-screen h-screen bg-green-midnight items-center justify-center">
      {/* Left Column (Links) */}
      <div className="flex flex-col justify-center items-center flex-1 space-y-4">
        <Link href="/projects-page/web" className="text-white text-lg">
          Web Development
        </Link>
        <Link href="/projects-page/android" className="text-white text-lg">
          Mobile App Development
        </Link>
      </div>
       {/* Middle Divider */}
       <div className="h-[90%] w-[1px] bg-white"></div>
      {/* Right Column (Image) */}
      <div className="flex justify-center items-center flex-1">
        {/* <div className="bg-white w-40 h-40 flex items-center justify-center">
          Image
        </div> */}
        <CompareDemo />
      </div>
    </div>
  );
}
