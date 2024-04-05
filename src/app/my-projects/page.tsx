"use client"

import ProjectCard from '@/app/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  console.log(Projects)
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 p-[20px] gap-5 max-w-[100%] max-h-[700px] overflow-y-auto'>
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
  )
}

export default Page