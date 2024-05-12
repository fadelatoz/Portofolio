"use client";
import React, { useEffect, useState, useRef } from "react";
import { HomeButton, Socials } from "@/constants";
import Button from "@components/buttonComponent/page";
import { Link } from 'react-scroll'
import { usePathname } from "next/navigation";
import Transition from "../components/Transition";
import Image from "next/image";
import { useInView, useAnimation, useIsPresent, motion } from "framer-motion";
import { Reveal } from "@components/utilts/Reveal";
import { useTheme } from 'next-themes'
import AboutMe from "../components/footer/AboutMe";
import { RevealRight } from "../components/utilts/RevealRight";
import { RevealThree } from "../components/utilts/Reveal3";


interface props {
  children: JSX.Element;
  width?: 'fit-content'
}



const HomePage = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");
  const { setTheme, resolvedTheme } = useTheme()


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);


  return (
    <>
      <div
        id="/"
        className="h-screen w-screen bg-white  dark:bg-gray-950 justify-center items-center flex bg-cover bg-center border-b-2 border-black dark:border-white"
      // style={{ backgroundImage: "url(/image/bg-2.jpg)" }}
      >
        <div className="image ">
          <div className=" flex items-center justify-center" >
            <img className="w-[40%] md:w-[20%] h-[200px]  md:h-[150px] rounded-full" src="./image/Fadel.png" alt="Rounded avatar" />
          </div>


          <section className='relative grid place-content-center py-10 px-6'>
              <div className='md:max-w-2xl max-w-md text-center grid gap-1'>
              <Reveal>
                <h1 className='md:text-4xl lg:text-5xl text-3xl text-black font-bold dark:text-white'>
                  Hi There I am <span className='underline underline-offset-4 text-primary text-purple-500'>Mohamad Fadel</span> a Front End Developer<span className='text-primary'>.</span>
                </h1>
                </Reveal>
                <RevealThree>
                <p className='text-[0.9rem] font-mono mt-2 max-w-md mx-auto text-black dark:text-white'>
                  Goal-oriented Mid-Level Frontend Developer with knowledge of HTML, CSS, JavaScript,
                  React, Nextjs, and React Native who wants to use technical proficiency and creativity to develop engaging user
                  experiences and advance in a professional career. Want to leverage effective debugging, code optimization, and
                  project collaboration capabilities to produce applications that meet user expectations.
                </p>
                </RevealThree>
              </div>
            <RevealRight>
              <div className='flex items-center justify-center gap-3 mt-5'>
                <AboutMe />
              </div>
            </RevealRight>

          </section>

        </div>
      </div>
    </>





  )
}

export default HomePage

