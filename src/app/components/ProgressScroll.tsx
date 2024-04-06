"use-client"
import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-2 z-50 bg-red-500"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
