"use-client"
import React, { useEffect, useState,useRef } from "react";
import { useInView,useAnimation,useIsPresent,motion } from "framer-motion";





interface props {
    children : JSX.Element;
    width? : 'fit-content'
  }
  
  export const Reveal = ({children ,width ='fit-content'} : props) => {
    const ref = useRef(null)
    const isInView = useInView(ref , {once : false})

    const mainControls = useAnimation()

    useEffect (() => {
      console.log(isInView)

      if(isInView){
        mainControls.start('visible')
      }
    },[isInView])

    return (
      <div ref={ref} >
        <motion.div
          variants={{
            hidden : {opacity : 0,y:75},
            visible : {opacity:1, y:0},
          }}
          initial = "hidden"
          animate = {mainControls}
          transition={{duration : 0.15,delay : 0.15,ease: "easeOut",}}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden : {opacity : 0,y:75},
            visible : {opacity:1, y:0},
          }}
          initial = "hidden"
          animate = {mainControls}
          transition={{duration : 0.5,delay : 0.25}}
        >
        </motion.div>
        
      </div>
      
    )
  }
  
  