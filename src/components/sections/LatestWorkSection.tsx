"use client";
import { ExpandableCard } from "../cards/ExpandableCard";



export default function LatestWorkSection() {
    return(
        <div className="flex flex-row items-center justify-between">
            <div className="w-1/3">
                Latest Work section
            </div> 
            <div className="w-2/3">
                <ExpandableCard />
            </div>
        </div>
    )
}