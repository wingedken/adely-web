"use client";

import { motion } from "framer-motion";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Animate({ children, duration = 0.6, delay = 0, initStyle, animateStyle, containerStyle = { overflow: "hidden" }, ease = "easeInOut" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={containerStyle}
    >
      <motion.div
        initial={initStyle}
        animate={inView ? animateStyle : {}}
        transition={{ duration, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}
