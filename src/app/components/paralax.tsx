"use client"


import React, { useEffect, useState, useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import { Reveal } from "./utilts/Reveal";



function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Paralaxx({ title, children }: { title: string, children?: React.ReactNode }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 250);

    return (
        <section>
            <div ref={ref}>
            </div>
            <Reveal>
            <motion.h2 className="text-[20px] md:text-[50px] text-transparent bg-clip-text bg-gradient-to-r font-mono from-purple-500 to-red-500 font-bold" style={{ y }}>
                {title}
            </motion.h2>
            </Reveal>

        </section>
    );
}

export default Paralaxx
