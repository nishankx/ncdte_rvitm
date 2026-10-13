import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function Blob({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 80]);

  const morphPath1 = "M120 760 C80 560 220 420 330 330 C430 250 400 90 560 40 C700 -5 820 120 800 300 C780 480 700 560 640 680 C590 780 200 880 120 760 Z";
  const morphPath2 = "M140 740 C110 540 250 440 350 340 C450 260 440 110 580 60 C720 10 830 150 790 320 C760 490 690 580 620 700 C560 800 190 860 140 740 Z";

  return (
    <motion.div
      style={shouldReduceMotion ? {} : { y: parallaxY }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 800 800"
        className="w-[78vw] max-w-[1000px] h-auto overflow-visible opacity-90"
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -26, 0],
                rotate: [0, 4, 0],
                scale: [1, 1.04, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="aG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E0FF" />
            <stop offset="45%" stopColor="#1F6BFF" />
            <stop offset="100%" stopColor="#9B4DFF" />
          </linearGradient>
          <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <motion.path
          fill="url(#aG)"
          filter="url(#soft)"
          d={morphPath1}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [morphPath1, morphPath2, morphPath1],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}
