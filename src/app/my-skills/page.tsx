"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Paralaxx from "../components/paralax";
import { Reveal } from "../components/utilts/Reveal";
import { SkillsCard } from "@/constants";
import Skills from "../components/Skills";

const PageSkills = () => {
  return (
    <div
      id="/my-skills"
      className="h-screen w-screen bg-white  dark:bg-gray-950 bg-cover bg-center border-b-2 border-black dark:border-white"
    // style={{ backgroundImage: "url(/image/bg-2.jpg)" }}
    >
      <div className="py-5">
        <span className="flex item-center text-black dark:text-white justify-center font-bold text-4xl">My Skills</span>
        <span className="flex items-center text-black dark:text-white justify-center">Some of my skills, i learnt in my journey of
          self thought coding.
        </span>
      </div>

      <div className=" flex items-center justify-center">
        <Skills />
      </div>
      <div className="grid grid-cols-1 p-10 gap-1 md:grid-cols-4 md:gap-4 md:ml-6 max-h-[300px] overflow-y-auto">
        {SkillsCard.map((v, k) => (
          <div key={k} className="place-items-center p-5 bg-gray-100 dark:bg-gray-900 rounded-md active:bg-secondary md:hover:bg-green-700 transition cursor-pointer hover:scale-95">
            <p className="text-2xl text-black dark:text-white md:hover:text-white">{v.title}</p>
            <p className="text-sm text-left rtl:text-right pt-3 text-gray-500 dark:text-gray-400">{v.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PageSkills;
