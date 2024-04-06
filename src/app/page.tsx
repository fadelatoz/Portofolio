"use client"

import Image from "next/image";
import HomePage from "./homePage/page";
import PageSkills from "./my-skills/page";
import PageProjects from "./my-projects/page";
import PageResume from "./resume/page";

import { Reveal } from "./components/utilts/Reveal";

export default function Home() {
  return (
    <main className="w-screen-[99vw] h-screen relative">
      <HomePage/>
      <PageSkills/>
      <PageProjects/>
      <PageResume/>


      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/image/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/image/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}