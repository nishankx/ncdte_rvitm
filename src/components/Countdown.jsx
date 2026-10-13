import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

function DigitItem({ value, label }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex min-w-[4.5rem] flex-col items-center">
      <div className="relative flex h-16 items-center overflow-hidden sm:h-20">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 28, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: -28, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-6xl font-light tabular-nums tracking-tight text-ink md:text-7xl"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown("2026-12-04T00:00:00+05:30");

  return (
    <div className="flex select-none flex-wrap items-center justify-center gap-8 md:gap-12">
      <DigitItem value={days} label="Days" />
      <DigitItem value={hours} label="Hours" />
      <DigitItem value={minutes} label="Minutes" />
      <DigitItem value={seconds} label="Seconds" />
    </div>
  );
}
