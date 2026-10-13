import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
  target,
  rel,
  showArrow = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora-azure focus-visible:outline-offset-2 rounded-pill text-sm cursor-pointer select-none group";

  const variants = {
    primary: "bg-ink text-white h-11 px-5 shadow-sm hover:bg-ink/90",
    soft: "bg-white/70 backdrop-blur-xl shadow-pill text-ink h-11 px-5 hover:bg-white/90",
    onDark: "bg-white text-ink h-11 px-5 shadow-sm hover:bg-white/95",
    ghostDark: "bg-white/10 text-white h-11 px-5 backdrop-blur-md hover:bg-white/20",
    // Supporting older variant names mapped to new theme
    filled: "bg-ink text-white h-11 px-5 shadow-sm hover:bg-ink/90",
    outlined: "bg-white/70 backdrop-blur-xl shadow-pill text-ink h-11 px-5 hover:bg-white/90",
    outlinedDark: "bg-ink text-white h-11 px-5 shadow-sm hover:bg-ink/90",
    sky: "bg-white text-ink h-11 px-5 shadow-pill hover:bg-white/90",
    white: "bg-white text-ink h-11 px-5 shadow-soft hover:bg-white/95",
  };

  const selectedVariant = variants[variant] || variants.primary;
  const hoverScale = shouldReduceMotion ? 1 : 1.03;
  const tapScale = shouldReduceMotion ? 1 : 0.98;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">
          ↗
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        onClick={onClick}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        className={`${baseStyles} ${selectedVariant} ${className}`}
        {...props}
      >
        {content}
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
      {content}
    </motion.button>
  );
}
