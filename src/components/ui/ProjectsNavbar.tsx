"use client";

import Link from "next/link";

export function ProjectsNavbar() {
  return (
    <div className="flex flex-row w-screen h-screen bg-green-midnight items-center justify-center">
      {/* Left Column (Links) */}
      <div className="flex flex-col justify-center items-center flex-1 space-y-4">
        <Link href="#" className="text-white text-lg">
          Web Development
        </Link>
        <Link href="#" className="text-white text-lg">
          Mobile App Development
        </Link>
      </div>

      {/* Right Column (Image) */}
      <div className="flex justify-center items-center flex-1">
        <div className="bg-white w-40 h-40 flex items-center justify-center">
          Image
        </div>
      </div>
    </div>
  );
}
