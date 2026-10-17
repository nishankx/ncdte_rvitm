import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

function DigitItem({ value, label }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex min-w-[3.5rem] flex-col items-center sm:min-w-[4rem]">
      <div className="relative flex h-11 items-center overflow-hidden sm:h-13">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={shouldReduceMotion ? { opacity: 0 } : { y: 12, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: -12, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-3xl font-light tabular-nums tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/70 sm:text-[12px]">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown("2026-12-04T00:00:00+05:30");

  return (
    <div className="flex select-none flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <DigitItem value={days} label="Days" />
      <DigitItem value={hours} label="Hours" />
      <DigitItem value={minutes} label="Minutes" />
      <DigitItem value={seconds} label="Seconds" />
    </div>
  );
}
