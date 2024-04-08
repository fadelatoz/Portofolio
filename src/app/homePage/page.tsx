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
import Head from "next/head";
import PageExperience from "../experience/page";

interface props {
  children: JSX.Element;
  width?: 'fit-content'
}



const HomePage = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

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
        className="h-screen w-screen flex items-center justify-start bg-cover bg-center"
        // style={{ backgroundImage: "url(/image/main-bg.webp)" }}
      >

        <div className="p-10 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <Reveal>
            <h1 className=" md:text-[50px] text-[30px] text-white font-semibold">
              Mohamad Fadel
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                Frontend Developer
              </span>
            </h1>
              <p className="text-[12px] text-justify md:text-[16px] md:text-gray-200 md:block ">
                Experience in Analyzing, Designing, Developing and Integrating Front-End & Back-End based applications. Experience in developing applications using NodeJs Services, MongoDb, and Restful Web Services. Experience in developing web applications using HTML, CSS,SASS, JavaScript, ReactJS,
                and NextJs. and accustomed to working using SDLC and Agile methods in developing a website.
              </p>

          </Reveal>


          <Reveal>
            <div className="flex-col md:flex-row md:flex gap-5">
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

          </Reveal>
        </div>
      </div>
    </>





  )
}

export default HomePage

