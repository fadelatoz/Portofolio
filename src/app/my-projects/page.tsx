"use client"

import ProjectCard from '@/app/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';
import Paralaxx from '../components/paralax';
import { FaHtml5 } from "react-icons/fa";
import { RevealRight } from '../components/utilts/RevealRight';
import Slider from '../components/Slider/slider';

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


const PageProjects = () => {
  return (
    <div
      id='/my-projects'
      className="h-screen w-screen bg-white  dark:bg-gray-950 bg-cover bg-center border-b-2 border-black dark:border-white"
    >
      <div className="py-5">
        <span className="flex item-center  text-black dark:text-white justify-center font-bold text-4xl">Projects</span>
      </div>
      <div className="grid grid-cols-1  gap-1 p-10 md:grid-cols-4 md:gap-4 max-h-[800px] overflow-y-auto">
        {Projects?.map((v, k) => (
          <div key={k} className="place-items-center hidden md:block p-5 text-sm font-serif bg-gray-100 dark:bg-gray-900 rounded-md active:bg-secondary md:hover:bg-green-700 transition cursor-pointer hover:scale-95">
            <p className="text-2xl text-black justify-center text-center text-[18px] dark:text-white md:hover:text-white">{v.title}</p>
            <Image
              src={v.src}
              alt=';t'
              key={k}
              width={0}
              height={0}
              sizes="100vw"
              className='mt-3'
              style={{ width: '100%', height: 'auto' }}
            />
            {/* <p className="text-sm text-left rtl:text-right pt-3 text-gray-500 dark:text-gray-400 mt-3">{v.text}</p> */}
            <p className='mt-4 font-bold text-black dark:text-white'>Tech Stack</p>
            <p className='text-black dark:text-white'>{v.techStack.toString()}</p>
          </div>
        ))}
      </div>

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
          {Projects?.map((v, k) => (
            <div key={k} className="place-items-center md:hidden p-5 text-sm font-serif bg-gray-100 dark:bg-gray-900 rounded-md active:bg-secondary md:hover:bg-green-700 transition cursor-pointer hover:scale-95">
              <p className="text-2xl text-black justify-center text-center text-[18px] dark:text-white md:hover:text-white">{v.title}</p>
              <Image
                src={v.src}
                alt=';t'
                key={k}
                width={0}
                height={0}
                sizes="100vw"
                className='mt-3'
                style={{ width: '100%', height: 'auto' }}
              />
              {/* <p className="text-sm text-left rtl:text-right pt-3 text-gray-500 dark:text-gray-400 mt-3">{v.text}</p> */}
              <p className='mt-4 font-bold text-black dark:text-white'>Tech Stack</p>
              <p className='text-black dark:text-white'>{v.techStack.toString()}</p>
            </div>
          ))}
        </Slider>
      </RevealRight>

    </div>
  )
}

export default PageProjects 