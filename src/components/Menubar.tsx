"use client"
import Link from "next/link";

export default function Menubar() {
    return(
        <div className="w-50 p-1 m-5 border-cyan-50 rounded-2xl border-2">
            <div className="w-50 p-5 border-cyan-50 rounded-lg border-2">
            <div>
                <Link href="/">Portfolio</Link>
                <text className="p-4">|</text>
                <Link href="/projects-page">Projects</Link>
            </div>
            </div>
        </div>
    )
}