"use client"

import React from "react";
import Image from "next/image";
import Paralaxx from "../components/paralax";

const PageExperience = () => {
  return (
    <div
      id="/experience"
      className="h-screen w-screen bg-white  dark:bg-gray-950 bg-cover bg-center border-b-2 border-white dark:border-black"
    >
      
      <div className="py-5">
        <span className="flex item-center text-black dark:text-white justify-center font-bold text-4xl">Experience</span>
      </div>

      <div className="items-start justify-start p-10 max-h-[650px] overflow-y-auto">
      <Image
        src="/image/astra_logo.png"
        alt="Astra International Logo"
        width={100}
        height={100}
        priority
      />
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-8">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2020 - Present</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Developer</h3>
            <ul className="text-black font-bold dark:text-white text-[9px] md:text-[18px]">
              <li className="text-sm font-normal text-gray-500 dark:text-gray-400">Create and develop the front view of the website based on the design of the UI/UX team that will be displayed and used by the user.</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400">Create and develop content management system (CMS) to make it easier for the operations team to change or adjust the appearance of the website without having to know programming</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400"> Manage website, user experience, design, and bussines flow.</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400"> Connects to the api backend data which will be used to be displayed to the front visible to the user.</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400"> Developed and implemented React Components using NextJs.</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400">  Creating appropriate integration strategies with client – side components and APIs.</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400">  Troubleshooting layout and functional issues across multiple browsers and device.</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400">  Implementing and maintaining scalable front – end architecture utilizing latest javascript/typescript libraries and framework.</li>
              <li className="text-sm  font-normal text-gray-500 dark:text-gray-400">  Utilizing industry best practices for mobile-first and responsive web design.</li>
            </ul>              </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2024 - Present</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">React Native Developer</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PageExperience;
