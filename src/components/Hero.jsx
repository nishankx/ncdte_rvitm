import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from './Container';
import Countdown from './Countdown';
import Button from './Button';
import Blob from './Blob';

export default function Hero({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  const tagChips = [
    "Artificial Intelligence",
    "IoT & Robotics",
    "Cybersecurity",
    "Sustainable Engineering",
  ];

  const quickStats = [
    { number: "04", suffix: "DEC", label: "Conference Date 2026" },
    { number: "RVITM", suffix: "", label: "Bengaluru Campus Venue" },
    { number: "05", suffix: "", label: "Research Tracks" },
    { number: "02", suffix: "NOV", label: "Submission Deadline 2026" },
  ];

  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-white grain pt-[calc(72px+6rem)] pb-20 md:pb-28"
    >
      {/* Background Aurora Layers */}
      <Blob className="absolute -top-28 -right-44 w-[78vw] max-w-[1000px] -z-10" />

      {/* Top-left soft glow: radial-gradient lavender/ice, blur-3xl, opacity .7 */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-0 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-aurora-lavender/40 to-aurora-ice/30 blur-3xl opacity-70 pointer-events-none -z-10"
      />

      {/* Pale lavender haze under headline right side */}
      <div
        aria-hidden="true"
        className="absolute top-48 left-1/3 w-[600px] h-[300px] rounded-full bg-aurora-lavender/20 blur-[100px] pointer-events-none -z-10"
      />

      <Container>
        {/* Tag chips row */}
        <div className="fade-r mb-8 max-w-xl overflow-hidden">
          <div className="flex items-center gap-3">
            {tagChips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex bg-white shadow-pill rounded-pill text-[14px] font-semibold text-ink px-4 py-2 whitespace-nowrap"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Accessible Headline */}
        <motion.h1
          aria-label="National Conference on Digital Technology and Engineering, NCDTE-2026"
          variants={headerContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          className="select-none"
        >
          {/* Eyebrow: text-ink font-bold uppercase text-[clamp(1.05rem,1.7vw,1.4rem)] tracking-[0.2em], preceded by 40x3px aurora bar */}
          <div className="flex items-center gap-3 mb-8">
            <span
              aria-hidden="true"
              className="w-10 h-[3px] rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet shrink-0"
            />
            <span className="text-ink font-bold uppercase text-[clamp(1.05rem,1.7vw,1.4rem)] tracking-[0.2em]">
              National Conference on
            </span>
          </div>

          {/* Line 1: Serif text */}
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span
              variants={lineVariants}
              className="block font-serif text-serifxl text-ink"
            >
              Digital Technology <em className="font-serif italic font-normal">and</em> Engineering
            </motion.span>
          </span>

          {/* Line 2: Mega Sans NCDTE with optical alignment */}
          <span className="block overflow-hidden pb-[0.04em] mt-2 sm:mt-4">
            <motion.span
              variants={lineVariants}
              className="block font-sans text-mega text-ink -ml-[0.045em]"
            >
              NCDTE
              <em className="font-serif italic font-normal text-aurora text-[0.24em] tracking-normal align-top ml-3">
                2026
              </em>
            </motion.span>
          </span>
        </motion.h1>

        {/* Date and Venue: Two Stacked Lines */}
        <div className="mt-10 space-y-3">
          <div className="inline-flex items-center gap-3">
            <svg
              className="w-6 h-6 text-ink shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-sans font-bold text-[clamp(2rem,3.8vw,3.5rem)] tracking-tight text-aurora bg-[linear-gradient(transparent_60%,rgba(139,61,255,0.16)_60%)] px-1 -mx-1">
              4th December 2026
            </span>
          </div>

          <div className="flex items-center gap-2 text-ink font-medium text-[20px] md:text-[22px]">
            <svg
              className="w-5 h-5 text-ink shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>RV Institute of Technology and Management, Bengaluru</span>
          </div>
        </div>

        {/* Lower Hero Row: Countdown & Action buttons */}
        <div className="mt-12 md:mt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <Countdown />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0">
            <Button
              variant="primary"
              onClick={() => onOpenModal("registration")}
              className="h-12 text-[15px]"
            >
              Register Now
            </Button>

            <button
              type="button"
              onClick={() => onOpenModal("submission")}
              className="font-sans font-bold text-[15px] tracking-wide text-ink cursor-pointer bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_2px] transition-[background-size] duration-300 pb-0.5"
            >
              SUBMIT YOUR PAPERS HERE
            </button>
          </div>
        </div>

        {/* Quick Facts Stats Row: Clean 4-column row, whitespace separated, no borders */}
        <div className="mt-20 md:mt-24 pt-8 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-sans font-bold text-5xl md:text-7xl text-ink tracking-tight flex items-baseline gap-1.5">
                <span>{stat.number}</span>
                {stat.suffix && (
                  <span className="text-2xl font-medium text-graphite">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-[16px] md:text-[17px] font-medium text-ink/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
