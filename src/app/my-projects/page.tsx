"use client"

import ProjectCard from '@/app/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';
import Paralaxx from '../components/paralax';



const PageProjects = () => {
  return (

    <div
      id='/my-projects'
      // style={{ backgroundImage: "url(/image/background/background_projects.jpg)" }}
      className="h-screen w-screen items-center justify-center bg-cover bg-center bg-slate-300  dark:bg-gray-800 border-b-2 border-white dark:border-black"
    >
      <div className="text-center">
        <Paralaxx title='#Projects'/>
      </div>
      <div
        className="h-[90%] w-[100%] md:flex p-6 relative bg-cover bg-center rounded-xl"
      >
        {Projects?.map((v,k) => (
          <div key={k} className="max-w-sm mb-3 md:m-5 w-[100%] md:h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.title}</h5>
              </a>
              <Image
                src={v.src}
                alt=';t'
                key={k}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional

                
              />
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{}</p>
              <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))}

        {/* <div className="bg-slate-100  dark:bg-slate-800 w-[100%] p-5 rounded-3xl shadow-lg">


          {Projects.map((project, index) => (
            <div className=' grid grid-cols-2 mr-5 p-[20px] gap-5 max-w-[100%] min-h-[700px] '>

              <ProjectCard
                key={index}
                title={project.title}
                text={project.text}
                image={project.src}
              />
            </div>


          ))}
        </div>
       */}

      </div>

    </div>

  )
}

export default PageProjects