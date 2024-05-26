"use-client"
import React from "react";
import { Reveal } from "../utilts/Reveal";
import AboutMe from "./AboutMe";





const FooterComponents = () => {

  return (
    <div className="w-full bg-white dark:bg-gray-950">
      <Reveal>
      <footer
        className="flex flex-col items-center bg-white dark:bg-gray-950 text-center text-surface  dark:text-white">
        <div className="container pt-9">
         <AboutMe/>
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