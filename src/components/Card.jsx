import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Card({
  children,
  onWhite = false,
  onDark = false,
  className = "",
  hoverLift = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = "rounded-xl p-7 md:p-9 transition-all duration-300 backdrop-blur-md";
  const bgStyles = onDark
    ? "bg-[#142A2C]/80 border border-[#264548] shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-[#007a87]/60 text-white"
    : onWhite
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
