"use client";
import { NavLinks } from "@/constants";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import {Link} from 'react-scroll'

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  const [windowPath,setWindowPath] = useState<string>('')

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  useEffect(() => {
    if(process?.browser){
      setWindowPath(window.location.href)
    }
  },[isRouting])


  console.log(windowPath)

  return (
    <div
      className="fixed z-[50] bottom-[0%] left-[26%] sm:left-[41%]  w-[50%] md:w-[20%] max-h-[100px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
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
        className="mb-[10px] pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] cursor-pointer ${
              windowPath?.includes(nav.name) ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
