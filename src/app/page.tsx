"use client"

import HomePage from "./homePage/page";
import PageSkills from "./my-skills/page";
import PageExperience from "./experience/page";
import PageProjects from "./my-projects/page";
import PageResume from "./resume/page";
import Head from "next/head";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);


  function Page({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <section>
        <div ref={ref}>
          {/* <ScrollProgress />
          <HomePage />
          <PageSkills />
          <PageExperience /> */}
          <PageProjects />        
          </div>
        <motion.h2 style={{ y }}>{`#001`}</motion.h2>
      </section>
    );
  }
}


export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const testFetch = () => {
    fetch('https://portofolio-74bce-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json')
    .then((res) => {
      // console.log(res)
    })
  }

  useEffect (() => {
    return () => testFetch()
  },[])

  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/sw.js')
  //       .then(registration => {
  //         console.log('Service Worker registration successful with scope: ', registration.scope);
  //       }).catch(error => {
  //         console.log('Service Worker registration failed: ', error);
  //       });
  //   }
  // }, []);

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/redux.png" sizes="any" />
        <link rel="theme-color" content="fff" />
      </Head>
      <HomePage />
      <PageExperience/>
      <PageSkills />
      <PageProjects />        
    </>

  );
}