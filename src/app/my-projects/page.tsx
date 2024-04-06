"use client"

import ProjectCard from '@/app/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (

    <div
      style={{ backgroundImage: "url(/image/bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
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

        <div className=' grid grid-cols-2 p-[20px] gap-5 max-w-[100%] max-h-[700px] overflow-y-auto'>

          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>

    </div>

  )
}

export default Page