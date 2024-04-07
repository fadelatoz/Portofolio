"use client"

import Image from "next/image";
import HomePage from "./homePage/page";
import PageSkills from "./my-skills/page";
import PageExperience from "./experience/page";
import PageProjects from "./my-projects/page";
import PageResume from "./resume/page";
// import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import ScrollProgress from "./components/ProgressScroll";
import { Reveal } from "./components/utilts/Reveal";



export default function Home() {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/rocket-lunch.png" />
        <link rel="theme-color" content="fff" />
      </Head>
      <ScrollProgress />
      <main style={{ backgroundImage: "url(/image/main-bg.webp)" }}
        className="w-screen-[99vw] h-screen relative">
        <Reveal>
          <HomePage />
        </Reveal>
        <Reveal>
          <PageSkills />
        </Reveal>

        <Reveal>
          <PageExperience />
        </Reveal>
        <Reveal>
          <PageProjects />

        </Reveal>
        <Reveal>

        <PageResume />
        </Reveal>


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
    </>

  );
}