"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsNavbar } from "./ui/ProjectsNavbar";

export default function Menubar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      {/* Menubar */}
      <div className="relative z-20 w-[17rem] p-1 m-5 border-cyan-50 rounded-2xl border-2">
        <div className="w-[16.3rem] p-5 border-cyan-50 rounded-lg border-2 flex items-center justify-between">
          {/* Hamburger/X Button */}
          <div
            onClick={() => setIsActive(!isActive)}
            className="cursor-pointer flex items-center justify-center"
          >
            <div
              className={`relative h-4 w-6
                  before:content-[''] after:content-['']
                  before:h-[1px] before:w-full before:bg-white before:absolute before:left-0
                  after:h-[1px] after:w-full after:bg-white after:absolute after:left-0
                  before:transition-transform before:duration-300
                  after:transition-transform after:duration-300
                  ${
                    isActive
                      ? "before:rotate-45 before:top-1/2 before:-translate-y-1/2 after:-rotate-45 after:top-1/2 after:-translate-y-1/2"
                      : "before:top-[20%] after:top-[80%]"
                  }`}
            ></div>
          </div>

          {/* Menu Links */}
          <Link className="text-white mx-4" href="/">
            Portfolio
          </Link>
          <span className="text-white">|</span>
          <Link className="text-white mx-4" href="/projects-page">
            Projects
          </Link>
        </div>
      </div>

      {/* Overlay for ProjectsNavbar */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-green-900 z-10"
          >
            <ProjectsNavbar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
