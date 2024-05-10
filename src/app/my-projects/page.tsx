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




const PageProjects = () => {
  return (

    <div
      id='/my-projects'
      className="h-screen w-screen bg-white  dark:bg-gray-950 bg-cover bg-center border-b-2 border-white dark:border-black"
    >
     <div className="py-5">
        <span className="flex item-center text-black dark:text-white justify-center font-bold text-4xl">Projects</span>
      </div>
        <div className="grid grid-cols-1 gap-1 p-10 md:grid-cols-4 md:gap-4">
          {Projects?.map((v, k) => (
            <div key={k} className="place-items-center p-5 bg-gray-100 dark:bg-gray-900 rounded-md active:bg-secondary md:hover:bg-green-700 transition cursor-pointer hover:scale-95">
              <p className="text-2xl text-black dark:text-white md:hover:text-white">{v.title}</p>
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
              <p className="text-sm text-left rtl:text-right pt-3 text-gray-500 dark:text-gray-400 mt-3">{v.text}</p>
              <p className='mt-4'>Tech Stack</p>
              <div className='grid grid-cols-12 gap-12'>
                <div className="h-4 w-4 mt-4 md:h-6 md:w-6 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaHtml5 className="h-4 w-4 text-black dark:text-white" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default PageProjects