import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  href,
  variant = "filled",
  className = "",
  type = "button",
  target,
  rel,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal rounded-xl text-sm md:text-base px-6 py-3 cursor-pointer shadow-md";

  const variants = {
    filled: "bg-gradient-to-r from-royal to-banner text-white hover:from-royal/90 hover:to-banner/90 border border-transparent shadow-royal/20",
    outlined: "bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-banner backdrop-blur-sm",
    outlinedDark: "bg-transparent text-banner border-2 border-banner hover:bg-banner hover:text-white",
    sky: "bg-sky text-banner font-semibold hover:bg-white shadow-sky/20",
    white: "bg-white text-banner font-semibold hover:bg-sky/30 shadow-slate-200",
  };

  const selectedVariant = variants[variant] || variants.filled;
  const hoverScale = shouldReduceMotion ? 1 : 1.04;
  const tapScale = shouldReduceMotion ? 1 : 0.98;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? (rel || "noopener noreferrer") : rel}
        onClick={onClick}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        className={`${baseStyles} ${selectedVariant} ${className}`}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      className={`${baseStyles} ${selectedVariant} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
