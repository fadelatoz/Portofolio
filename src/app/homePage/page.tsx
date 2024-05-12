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
            <img className="w-[40%] md:w-[20%] h-[200px]  md:h-[150px] rounded-full" src="./image/me.jpg" alt="Rounded avatar" />
          </div>


          <Reveal>
            <section className='relative grid place-content-center py-10 px-6'>
              <div className='md:max-w-2xl max-w-md text-center grid gap-1'>
                <h1 className='md:text-4xl lg:text-5xl text-3xl text-black font-bold dark:text-white'>
                  Hi I am <span className='underline underline-offset-4 text-primary text-purple-500'>Mohamad Fadel</span> a Front End Developer<span className='text-primary'>.</span>
                </h1>
                <p className='text-[0.8rem] max-w-md mx-auto text-black dark:text-white'>
                  Experience in Analyzing, Designing, Developing and Integrating Front-End & Back-End based applications. Experience in developing applications using NodeJs Services, MongoDb, and Restful Web Services. Experience in developing
                  web applications using HTML, CSS,SASS, JavaScript, ReactJS, and NextJs. and accustomed to working using SDLC and Agile methods in developing a website.<span className='text-primary'>.</span>
                </p>
              </div>
              <div className='flex items-center justify-center gap-3 mt-5'>
                {Socials.map((social) => (
                  <>
                    <Button
                      linkTo={social.linkTo}
                      onClick={() => window.open(social.linkTo, '_blank')
                      }
                    >
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
            </section>
          </Reveal>

        </div>
      </div>
    </>





  )
}

export default HomePage

