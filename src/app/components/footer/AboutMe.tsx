"use-client"
import React from "react"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"


const AboutMe = () => {

    return (
        <div className="mb-6 flex justify-center space-x-1">
            <a
                href='https://www.linkedin.com/in/mohamad-fadel-12a251194/'
                target="_blank"
                type="button"
                className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                data-twe-ripple-init>
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <div className="h-5 w-5  md:h-8 md:w-8  grid place-items-center active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaLinkedin className="h-5 w-5  md:h-8 md:w-8 text-black dark:text-white " /></div>
                </span>
            </a>
            <a
                href="https://github.com/fadelatoz/"
                type="button"
                target="_blank"
                className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                data-twe-ripple-init>
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <div className="h-5 w-5  md:h-8 md:w-8  grid place-items-center active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaGithub className="h-5 w-5 hover:text-red  md:h-8 md:w-8 text-black dark:text-white " /></div>
                </span>
            </a>
            <a
                href='https://www.linkedin.com/in/mohamad-fadel-12a251194/'
                type="button"
                target="_blank"
                className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                data-twe-ripple-init>
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <div className="h-5 w-5  md:h-8 md:w-8  grid place-items-center active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaInstagram className="h-5 w-5  md:h-8 md:w-8 text-black dark:text-white " /></div>
                </span>
            </a>
        </div>
    )
}

export default AboutMe