import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Card({
  children,
  onWhite = false,
  className = "",
  hoverLift = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = "rounded-lg p-7 md:p-9 transition-shadow duration-300";
  const bgStyles = onWhite
    ? "bg-mist-50 shadow-none hover:shadow-soft"
    : "bg-white shadow-soft hover:shadow-lift";

  const hoverMotion = !shouldReduceMotion && hoverLift ? { y: -4 } : {};

  return (
    <motion.div
      whileHover={hoverMotion}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`${baseStyles} ${bgStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
