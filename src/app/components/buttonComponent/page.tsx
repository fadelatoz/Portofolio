'use-client'
import React from 'react'


interface button {
  text?: string;
  children? : React.ReactNode
}



const Button: React.FC<button> = ({ text, children }: button) => {

  return (
    <div className="relative cursor-pointer p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
      
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative px-3 py-1  md:px-6 md:py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">{children}</span>
      </span>

    </div>
  )
}


export default Button

