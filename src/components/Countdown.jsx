import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

function DigitBox({ value, label }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shadow-black/10">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5 border-b border-white/10 pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-sky/90">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown("2026-12-04T00:00:00+05:30");

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-xs uppercase tracking-widest text-sky/80 font-semibold mb-3">
        Conference Countdown
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        <DigitBox value={days} label="Days" />
        <span className="font-heading text-2xl sm:text-3xl font-bold text-sky/50 -mt-6">:</span>
        <DigitBox value={hours} label="Hours" />
        <span className="font-heading text-2xl sm:text-3xl font-bold text-sky/50 -mt-6">:</span>
        <DigitBox value={minutes} label="Minutes" />
        <span className="font-heading text-2xl sm:text-3xl font-bold text-sky/50 -mt-6">:</span>
        <DigitBox value={seconds} label="Seconds" />
      </div>
    </div>
  );
}
