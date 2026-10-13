import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Countdown from "./Countdown";
import Button from "./Button";
import Blob from "./Blob";

export default function Hero({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

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
      className="grain relative overflow-hidden bg-white pb-6 pt-5 sm:pb-8 sm:pt-6 md:pb-10 md:pt-8"
    >
      {/* Background Aurora Layers */}
      <Blob className="absolute -right-64 -top-44 -z-10 w-[78vw] max-w-[1000px]" />

      {/* Decorative centered white haze behind headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[20%] -z-10 h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92),transparent_70%)]"
      />

      {/* Top-left soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-10 -z-10 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-aurora-lavender/40 to-aurora-ice/30 opacity-70 blur-3xl"
      />

      {/* Pale lavender haze */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-36 -z-10 h-[260px] w-[500px] rounded-full bg-aurora-lavender/20 blur-[100px]"
      />

      <Container>
        <div className="flex flex-col items-center text-center">

          {/* Accessible Headline */}
          <motion.h1
            aria-label="National Conference on Digital Technology and Engineering, NCDTE-2026"
            variants={headerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="select-none text-center"
          >
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">
              <span
                aria-hidden="true"
                className="h-[2px] w-8 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet sm:h-[3px] sm:w-10"
              />
              <span className="font-sans text-[clamp(0.85rem,1.3vw,1.15rem)] font-bold uppercase tracking-[0.2em] text-ink">
                National Conference on
              </span>
            </div>

            {/* Line 1: Serif text */}
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                variants={lineVariants}
                className="mx-auto block max-w-[18ch] font-serif text-[clamp(1.75rem,3vw,3.25rem)] leading-tight text-ink "
              > Digital Technology <em className="font-serif font-normal italic">and</em>{" "}Engineering
              </motion.span>
            </span>

            {/* Line 2: Mega Sans NCDTE with mathematically centered NCDTE and hanging 2026 */}
            <span className="mt-1 block overflow-hidden pb-[0.04em] sm:mt-2">
              <motion.span
                variants={lineVariants}
                className="relative inline-block font-sans text-[clamp(3.75rem,90vw,15rem)] font-bold leading-[0.88] tracking-tighter text-ink"
              >
                NCDTE
              </motion.span>
            </span>
          </motion.h1>

          {/* Date and Venue: Two Stacked Lines */}
          <div className="mt-10 flex flex-col items-center gap-1.5 text-center sm:gap-2">
            <div className="inline-flex items-center justify-center gap-2.5 leading-none">
              <svg
                className="h-5 w-5 shrink-0 text-ink sm:h-6 sm:w-6"
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
              <span className="text-aurora -mx-1 bg-[linear-gradient(transparent_60%,rgba(139,61,255,0.16)_60%)] px-1 font-sans text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold tracking-tight">
                4th December 2026
              </span>
            </div>

            <div className="inline-flex items-center justify-center gap-2 text-[15px] font-medium leading-none text-ink sm:text-[17px] md:text-[19px]">
              <svg
                className="h-4 w-4 shrink-0 text-ink sm:h-5 sm:w-5"
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

          {/* Lower Hero: Centered Countdown */}
          <div className="mt-20 flex justify-center">
            <Countdown />
          </div>

          {/* Centered Action buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:mt-5 sm:gap-6">
            <Button
              variant="primary"
              onClick={() => onOpenModal("registration")}
              className="h-10 px-5 text-sm sm:h-11"
            >
              Register Now
            </Button>

            <button
              type="button"
              onClick={() => onOpenModal("submission")}
              className="cursor-pointer bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 font-sans text-[13px] font-bold tracking-wide text-ink transition-[background-size] duration-300 hover:bg-[length:100%_2px] sm:text-[14px]"
            >
              SUBMIT YOUR PAPERS HERE
            </button>
          </div>

          {/* Quick Facts Stats Row */}
          <div className="mt-6 grid w-full max-w-4xl grid-cols-2 gap-x-6 gap-y-6 pt-4 sm:mt-8 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-4">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-0.5 text-center">
                <div className="flex items-baseline justify-center gap-1 font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
                  <span>{stat.number}</span>
                  {stat.suffix && (
                    <span className="text-lg font-medium text-graphite sm:text-xl">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-[13px] font-medium text-ink/80 sm:text-[14px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
