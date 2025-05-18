"use client";

import Link from "next/link";
import { CompareDemo } from "./CompareDemo";

interface Props {
  onClose: () => void;
}

export function ProjectsNavbar({ onClose }: Props) {
  return (
    <div className="flex flex-row w-screen h-screen bg-green-midnight items-center justify-center relative">
      
      {/* Left Column (Links) */}
      <div className="flex flex-col justify-center items-center flex-1 space-y-4">
        <Link href="/project-page/web" prefetch className="text-white text-lg" onClick={onClose}>
          Web Development
        </Link>
        <Link href="/project-page/android" prefetch className="text-white text-lg" onClick={onClose}>
          Mobile App Development
        </Link>
      </div>

      {/* Middle Divider */}
<div className="hidden sm:flex h-[90%] w-[1px] bg-white"></div>

{/* Right Column (Image) */}
<div className="hidden sm:flex justify-center items-center flex-1">
  <CompareDemo />
</div>
    </div>
  );
}