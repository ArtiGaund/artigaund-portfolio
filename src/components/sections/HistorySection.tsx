import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

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
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
