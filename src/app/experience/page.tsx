"use client"

import React from "react";
import Image from "next/image";
import Paralaxx from "../components/paralax";

const PageExperience = () => {
  return (
    <div
      id="/experience"
      // style={{ backgroundImage: "url(/image/bg-3.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-slate-300  dark:bg-gray-800 border-b-2 border-white dark:border-black"
    >
      <div
        className="h-[90%] w-[100%] p-6 relative bg-cover bg-center rounded-xl"
      >
        <div className="text-center">
         <Paralaxx title="#Experience"/>
        </div>

          <div className="bg-slate-100  dark:bg-slate-800 w-[100%] p-5 rounded-3xl shadow-lg">
            <div className="rounded-r p-5">
              <div >
                <Image
                  src="/image/astra_logo.png"
                  alt="trees"
                  width={200}
                  height={200}
                />
                <span className="text-[16px] md:text-[18px] text-white dark:text-slate-800 font-bold font-mono">Frontend Developer
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">
                    PT.Astra International Tbk.
                  </span>
                </span>
                <br></br>
                <span className="font-mono text-[16px] md:text-[18px] text-white dark:text-slate-800">June 2020 - Present</span>
              </div>

              <div className="pt-[20px]">
                <ul className="text-black font-bold dark:text-white text-[9px] md:text-[18px] font-mono">
                  <li className="list-disc">Create and develop the front view of the website based on the design of the UI/UX team that will be displayed and used by the user.</li>
                  <li className="list-disc">Create and develop content management system (CMS) to make it easier for the operations team to change or adjust the appearance of the website without having to know programming</li>
                  <li className="list-disc"> Manage website, user experience, design, and bussines flow.</li>
                  <li className="list-disc"> Connects to the api backend data which will be used to be displayed to the front visible to the user.</li>
                  <li className="list-disc"> Developed and implemented React Components using NextJs.</li>
                  <li className="list-disc">  Creating appropriate integration strategies with client – side components and APIs.</li>
                  <li className="list-disc">  Troubleshooting layout and functional issues across multiple browsers and device.</li>
                  <li className="list-disc">  Implementing and maintaining scalable front – end architecture utilizing latest javascript/typescript libraries and framework.</li>
                  <li className="list-disc">  Utilizing industry best practices for mobile-first and responsive web design.</li>
                </ul>
              </div>
            </div>

          </div>




      </div>
    </div>

  );
};

export default PageExperience;
