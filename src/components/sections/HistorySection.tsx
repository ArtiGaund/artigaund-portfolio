import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import AnimatedContent from "../animation/AnimatedContent";
import SectionTitle from "../sub-components/SectionTitle";


export default function HistorySection() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col">
          <div>
              <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Gssoc'24 & Ssoc'24</h4>
          </div>
          <span className="text-blue-400 my-[10px]">May 2024 - Aug 2024</span>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Work as a Contributor for Gssoc'24 for Open Source Program
          </p>


          <div>
              <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Freelancing</h4>
          </div>
          <span className="text-blue-400 my-[10px]">2020 - Present</span>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Work as a Full Stack Developer
          </p>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col">
          
          <div>
              <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
                National Institute of Technology, Warangal (NITW)
                </h4>
          </div>
          <span className="text-blue-400 my-[10px]">2017 - 2020</span>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Master Of Computer Applications (MCA)
          </p>


          <div>
              <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
                Bundelkhand University
              </h4>
          </div>
          <span className="text-blue-400 my-[10px]">2014 - 2017</span>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Bachelor Of Science in Information Technology ( Bsc(I.T.) )
          </p>
        </div>
      ),
    },
    {
      title: "About Me",
      content: (
        <div className="flex flex-col">
          
          <div>
              <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
                National Institute of Technology, Warangal (NITW)
                </h4>
          </div>
          <span className="text-blue-400 my-[10px]">2017 - 2020</span>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Master Of Computer Applications (MCA)
          </p>


          <div>
              <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
                Bundelkhand University
              </h4>
          </div>
          <span className="text-blue-400 my-[10px]">2014 - 2017</span>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Bachelor Of Science in Information Technology ( Bsc(I.T.) )
          </p>
        </div>
      ),
    },
  ];
  return (
     <AnimatedContent direction="vertical" distance={150} delay={200}>
    <section className="mt-[150px] flex flex-col justify-center items-center mb-[150px]">
       <div className="relative border border-blue-700 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 w-full max-w-7xl p-8">
  {/* All content above noise */}
  <div className="relative z-10">
    <SectionTitle
             title=" History & Experience" 
             className="w-[30rem]"
             />
    {/* <div className="px-8 flex flex-col justify-center items-center">
      <h2 className="mx-auto max-w-7xl ml-4 text-neutral-200 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold">
       
      </h2>
    </div> */}
    <Timeline data={data} />
  </div>
</div>

    </section>
    </AnimatedContent>
  );
}
