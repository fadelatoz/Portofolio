"use client"
import React, { useEffect, useState, useRef } from "react";
import { useInView, useAnimation, useIsPresent, motion, useScroll, useMotionValueEvent } from "framer-motion";





interface props {
  children: React.ReactNode;
  width?: 'fit-content'
}

export const RevealThree = ({ children, width = 'fit-content' }: props) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const mainControls = useAnimation()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest)
  })

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref} >
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(600px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.0s"
        }}
      >
        {children}
      </motion.div>

    </div>

  )
}

