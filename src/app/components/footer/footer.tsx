"use-client"
import { Socials } from "@/constants";
import React from "react";
import Button from "@components/buttonComponent/page";
import Image from "next/image";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Reveal } from "../utilts/Reveal";





const FooterComponents = () => {

  return (
    <div className="w-full bg-white dark:bg-gray-950">
      <Reveal>
      <footer
        className="flex flex-col items-center bg-white dark:bg-gray-950 text-center text-surface  dark:text-white">
        <div className="container pt-9">
          <div className="mb-6 flex justify-center space-x-1">
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init>
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <div className="h-5 w-5  md:h-8 md:w-8  grid place-items-center active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaGithub className="h-5 w-5  md:h-8 md:w-8 text-black dark:text-white " /></div>
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/mohamad-fadel-12a251194/'
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init>
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <div className="h-5 w-5  md:h-8 md:w-8  grid place-items-center active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaLinkedin className="h-5 w-5  md:h-8 md:w-8 text-black dark:text-white " /></div>
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/mohamad-fadel-12a251194/'
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init>
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <div className="h-5 w-5  md:h-8 md:w-8  grid place-items-center active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaInstagram className="h-5 w-5  md:h-8 md:w-8 text-black dark:text-white " /></div>
              </span>
            </a>
          </div>
        </div>

        <div className="w-full bg-white dark:bg-gray-950 p-4 text-center grid text-black gap-4  dark:text-white">
          <span className="font-bold">Email</span>
          <span className="font-serif fo">
            mohamad.fadel196@gmail.com</span>
          <span className="font-bold">Phone</span>
          <span>+6283894535352</span>
          <span className="font-bold">Location</span>
          <span className="font-mono">Jakarta</span>

        </div>

        <div className="w-full font-sans font-bold bg-white dark:bg-gray-950 p-4 text-center text-black  dark:text-white">
          © 2024 Copyright :
          <a href="https://tw-elements.com/"> Mohamad Fadel</a>
        </div>
      </footer>
      </Reveal>
    </div>
  )
}

export default FooterComponents