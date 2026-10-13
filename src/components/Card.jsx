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

  const baseStyles = "rounded-lg p-7 md:p-9 transition-all duration-300 backdrop-blur-md";
  const bgStyles = onWhite
    ? "bg-white/85 border border-[#00545f]/10 shadow-soft hover:shadow-lift hover:border-[#00545f]/20"
    : "bg-white/95 border border-[#00545f]/10 shadow-soft hover:shadow-lift hover:border-[#00545f]/20";

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
