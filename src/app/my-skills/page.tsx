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
import Slider from "../components/Slider/slider";
import { RevealRight } from "../components/utilts/RevealRight";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 390 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  }
};


const PageSkills = () => {
  return (
    <div
      id="/my-skills"
      className="h-screen w-screen bg-white  dark:bg-gray-950 bg-cover bg-center  border-b-2 border-black dark:border-white"
    // style={{ backgroundImage: "url(/image/bg-2.jpg)" }}
    >
      <div className="py-5">
        <span className="flex item-center text-black dark:text-white justify-center font-bold text-4xl">My Skills</span>
      </div>

      <Reveal>
      <div className=" flex items-center justify-center">
        <Skills />
      </div>
      </Reveal>

      <RevealRight>
      <Slider 
       responsive={responsive}
       autoPlay={true}
       swipeable={true}
       draggable={true}
       showDots={true}
       infinite={true}
       partialVisible={true}
        >
          {SkillsCard.map((v, k) => (
            <div key={k} className="place-items-center min-h-full  p-5 md:mr-4 bg-gray-100 dark:bg-gray-900 rounded-md active:bg-secondary md:hover:bg-green-700 transition cursor-pointer hover:scale-95">
              <p className="text-2xl text-black dark:text-white text-justify md:hover:text-white">{v.title}</p>
              <p className="text-sm  rtl:text-right pt-3 text-justify text-gray-500 dark:text-gray-400">{v.desc}</p>

            </div>
          ))}
      </Slider>
      </RevealRight>




    </div>
  );
};

export default PageSkills;
