'use client';

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";
import ThemeSwitch from "./buttonComponent/ThemeSwitch";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";

const NavbarMenu = ({ isMobile } : any) => (
  <ul className={`flex ${isMobile ? 'bg-black-400 m-5 flex-col' : 'bg-transparent'} font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0`}>
    {NavLinks?.map((nav, k) => (
      <li key={k} className="cursor-pointer mb-5">
        <Link
          to={nav.link}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={isMobile ? 1000 : 100}
          isDynamic={true}
          spyThrottle={500}
          className="pl-4 min-w-[20%]"
        >
          <span className={`text-${nav.link === '/' ? 'transparent' : 'white'} z-50 font-bold text-[20px] bg-clip-text bg-gradient-to-r from-purple-500 to-red-500`}>
            {nav.name}
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [openNavbar, setOpenNavbar] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (process.browser) {
      console.log(window.location.href);
    }
  }, [scrollYProgress]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="fixed backdrop-blur-xl top-0 z-[40] w-full h-[45px] dark:bg-gray-800 shadow-zinc-400 p-5 shadow-md flex justify-between items-center px-10 md:px-20">
        <h1 className="text-white text-[25px] font-mono font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Fadel
          </span>
        </h1>
        <ThemeSwitch />
        <button onClick={() => setOpenNavbar(!openNavbar)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="w-full hidden md:block md:w-auto" id="navbar-multi-level">
          <NavbarMenu isMobile={false} />
        </div>
      </div>
      {openNavbar && (
        <div className="w-full top-[3rem] md:hidden md:w-auto fixed bg-gray-800 z-50" id="navbar-multi-level">
          <NavbarMenu isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
