"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsNavbar } from "./ProjectsNavbar";

export default function Menubar() {
  const [isActive, setIsActive] = useState(false);
  const [hidePortfolio, setHidePortfolio] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.9;
      setHidePortfolio(scrollY>heroHeight);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const outerWidth = hidePortfolio ? "w-[11rem]" : "w-[17rem]";
  const innerHeight = hidePortfolio ? "w-[10.5rem]" : "w-[16.3rem]";



  return (
    <div className="relative">
      {/* Menubar */}
     <div
        className={`relative z-20 p-1 m-5 border-cyan-50 rounded-2xl border-2 transition-all duration-300 ${outerWidth}`}
      >
        <div
          className={`p-5 border-cyan-50 rounded-lg border-2 flex items-center justify-between transition-all duration-300 ${innerWidth}`}
        >
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
          {!hidePortfolio && (
            <>
            <Link className={`mx-4 transition-opacity duration-300 ${
              isActive
                ? "text-white opacity-40 pointer-events-none cursor-default"
                : isActive
                ? "text-gray-800"
                : "text-white"
            }`}
            href="/">
            Portfolio
          </Link>
          <span className="text-white">|</span>  
          </>
        )
          }
          
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
            <ProjectsNavbar onClose = { () => setIsActive(false) }/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
