"use client"

import ProjectCard from '@/app/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



const PageProjects = () => {
  return (

    <div
      id='/my-projects'
      // style={{ backgroundImage: "url(/image/background/background_projects.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-slate-300  dark:bg-gray-800 border-b-2 border-white dark:border-black"
    >
      <div
        className="h-[90%] w-[100%] p-6 relative bg-cover bg-center rounded-xl"
      >
        <div className="text-center">
          <h1 className="font-semibold text-white text-[50px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Projects{" "}
            </span>
          </h1>
        </div>

        <div className="bg-slate-100  dark:bg-slate-800 w-[100%] p-5 rounded-3xl shadow-lg">


        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[80%]"
          >
        <div className=' grid grid-cols-2 mr-5 p-[20px] gap-5 max-w-[100%] min-h-[700px] '>
       
            {Projects.map((project, index) => (
              <SwiperSlide className='ml-[20px]' key={index}>

                <ProjectCard
                  key={index}
                  title={project.title}
                  text={project.text}
                  image={project.src}
                />
              </SwiperSlide>

            ))}
        </div>
        </Swiper>
        </div>

      </div>

    </div>

  )
}

export default PageProjects