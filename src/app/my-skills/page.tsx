"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Paralaxx from "../components/paralax";
import { Reveal } from "../components/utilts/Reveal";

const PageSkills = () => {
  return (
    <div
      id="/my-skills"
      className="h-screen w-screen bg-slate-300  dark:bg-gray-800 flex items-center justify-start bg-cover bg-center border-b-2 border-white dark:border-black"
    // style={{ backgroundImage: "url(/image/bg-2.jpg)" }}
    >

      <div className="p-10 md:pl-40 pb-56 md:pb-20 w-[100%] flex flex-col gap-5 z-[10] max-w-[750px]">
        <Reveal>
          <div className="w-[100%] bg-slate-100  dark:bg-slate-800 shadow-purple-800 p-5 rounded-3xl shadow-2xl">
          <Paralaxx title="#Skills" />
            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              modules={[Autoplay]}
              className="max-w-[80%]"
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
              }}
              speed={5000}
              modules={[Autoplay]}
              className="max-w-[80%]"
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>

      </div>

    </div>
  );
};

export default PageSkills;
