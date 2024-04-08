'use client';

import { Socials, HomeButton, NavLinks } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";
import ThemeSwitch from "./buttonComponent/ThemeSwitch";



const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [openNavbar, setOpenNavbar] = useState(false)

  useEffect(() => {
    if (process.browser) {
      console.log(window.location.href)
    }
  }, [scrollYProgress])


  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="fixed bg-opacity-50 top-0 z-[40] w-full h-[65px] bg-black  flex justify-between items-center px-10 md:px-20">
        <h1 className="text-white text-[25px] font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Developer{" "}
          </span>
        </h1>
        <ThemeSwitch/>



        <button onClick={() => setOpenNavbar(!openNavbar)} data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className=" w-full hidden md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex bg-transparent flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm bg-transparent text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li aria-labelledby="dropdownNavbarLink">
                    <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                       
                       <ThemeSwitch/>
                        {NavLinks?.map((nav, k) => (
                          <li key={k}>
                            <Link
                              key={nav.name}
                              activeClass="active"
                              to={nav.link}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={50}
                              duration={500}
                              delay={1000}
                              isDynamic={true}
                              // onSetActive={this.handleSetActive}
                              // onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                              spyThrottle={500}
                              className="mb-[10px] pl-4 min-w-[20%]"
                            >
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                                {nav.name}
                              </span>
                            </Link>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </li>

                </ul>

              </div>
            </li>

            {NavLinks?.map((nav, k) => (
              <li key={k} className="cursor-pointer">
                <Link
                  key={nav.name}
                  activeClass="active"
                  to={nav.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
                  // onSetActive={this.handleSetActive}
                  // onSetInactive={this.handleSetInactive}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className="mb-[10px] pl-4 min-w-[20%]" >
                  {nav.link === '/' ?
                    <span className="text-transparent z-50 font-bold text-[20px] bg-clip-text bg-gradient-to-r from-red-100 to-red-500">
                      {nav.name}
                    </span>
                    :
                    <span className="text-white z-50 font-bold text-[20px] bg-clip-text bg-gradient-to-r">
                      {nav.name}
                    </span>
                  }
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openNavbar &&
        <div className=" w-full top-[4rem] md:hidden md:w-auto fixed bg-black bg-opacity-50 z-50" id="navbar-multi-level">
          <ul className="flex bg-black-400 border-none mar m-5 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm bg-transparent text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li aria-labelledby="dropdownNavbarLink">
                    <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        {NavLinks?.map((nav, k) => (
                          <li key={k}>
                            <Link
                              key={nav.name}
                              activeClass="active"
                              to={nav.link}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={50}
                              duration={500}
                              delay={1000}
                              isDynamic={true}
                              // onSetActive={this.handleSetActive}
                              // onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                              spyThrottle={500}
                              className="mb-[10px] pl-4 min-w-[20%]"
                            >
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                                {nav.name}
                              </span>
                            </Link>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </li>

                </ul>

              </div>
            </li>

            {NavLinks?.map((nav, k) => (
              <li key={k} className="cursor-pointer mb-5">
                <Link
                  key={nav.name}
                  activeClass="active"
                  to={nav.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
                  // onSetActive={this.handleSetActive}
                  // onSetInactive={this.handleSetInactive}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className="mb-[10px] pl-4 min-w-[20%]" >
                  {nav.link === '/' ?
                    <span className="text-transparent z-50 font-bold text-[20px] bg-clip-text bg-gradient-to-r from-red-100 to-red-500">
                      {nav.name}
                    </span>
                    :
                    <span className="text-white z-50 font-bold text-[20px] bg-clip-text bg-gradient-to-r">
                      {nav.name}
                    </span>
                  }
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
    </nav>
  );
};

export default Navbar;
