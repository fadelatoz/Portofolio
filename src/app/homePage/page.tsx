"use client";
import React, { useEffect, useState, useRef } from "react";
import { HomeButton, Socials } from "@/constants";
import Button from "../components/buttonComponent/page";
import { Link } from 'react-scroll'
import { usePathname } from "next/navigation";
import Transition from "../components/Transition";
import Image from "next/image";
import { useInView, useAnimation, useIsPresent, motion } from "framer-motion";
import { Reveal } from "../components/utilts/Reveal";
import { useTheme } from 'next-themes'
import Paralaxx from "../components/paralax";


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
        className="h-screen w-screen flex items-center justify-start bg-cover bg-center border-b-2 border-white dark:border-black"
        // style={{ backgroundImage: "url(/image/bg-2.jpg)" }}
      >

        <div className="p-10 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <Reveal>
            <div className="w-[100%] bg-slate-100  dark:bg-slate-800 shadow-purple-800 p-5 rounded-3xl shadow-2xl">
              <h1 className=" md:text-[50px] text-[30px] text-black dark:text-white font-semibold">
                Mohamad Fadel
              </h1>
              <h3 className="animate-typing overflow-hidden mb-5 whitespace-nowrap border-r-4 border-r-white pr-5 text-base md:text-4xl text-black dark:text-slate-300 font-bold">Frontend Developer</h3>

              <span className="text-[12px] text-black dark:text-white text-justify font-bold font-mono md:text-[16px]  ">
                Experience in Analyzing, Designing, Developing and Integrating Front-End & Back-End based applications. Experience in developing applications using NodeJs Services, MongoDb, and Restful Web Services. Experience in developing web applications using HTML, CSS,SASS, JavaScript, ReactJS,
                and NextJs. and accustomed to working using SDLC and Agile methods in developing a website.
              </span>

              <div className="flex-col md:flex-row md:flex gap-5 mt-5 ">
                {Socials.map((social) => (
                  <>
                    <Button>
                      <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        className="z-10"

                        width={25}
                        height={25}
                      />
                    </Button>

                  </>

                ))
                }
              </div>
            </div>
          </Reveal>
          <Paralaxx title="# About Me"/>


        </div>

      </div>
    </>





  )
}

export default HomePage

