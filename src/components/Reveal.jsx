import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  y = 20,
  className = "",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`will-change-transform transform-gpu ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
