import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Countdown from "./Countdown";
import Button from "./Button";
import Blob from "./Blob";
import { CONFIG } from "../config";

export default function Hero({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const campusY = useTransform(scrollY, [0, 600], [0, 45]);
  const campusScale = useTransform(scrollY, [0, 600], [1, 1.04]);

  const quickStats = [
    { number: "04", suffix: "DEC", label: "Conference Date 2026" },
    { number: "RVITM", suffix: "", label: "Bengaluru Campus Venue" },
    { number: "06", suffix: "", label: "Research Tracks" },
    { number: "10", suffix: "NOV", label: "Submission Deadline 2026" },
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
      className="grain relative isolate overflow-hidden bg-transparent pb-6 pt-5 sm:pb-8 sm:pt-6 md:pb-10 md:pt-8"
    >
      {/* RVITM College Campus Background with Framer Motion */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        style={shouldReduceMotion ? {} : { y: campusY, scale: campusScale }}
        initial={shouldReduceMotion ? { opacity: 0.38 } : { opacity: 0 }}
        animate={{ opacity: 0.38 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src="/images/rvitm-campusb.png"
          alt="RVITM Campus"
          className="h-full w-full object-cover object-center contrast-[1.05] saturate-[0.5] filter"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.03, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Soft Vignette and Seamless Blending Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/15 to-white/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45)_15%,transparent_80%)]" />
      </motion.div>

      {/* Background Aurora Layers & Dispersed Light Overlay */}
      {/* Top-Right Morphing Blob */}

      {/* Top-Left Ambient Mist */}
      <div
        aria-hidden="true"
        className="from-[#00545f]/18 via-[#ecffb6]/32 pointer-events-none absolute -left-28 -top-16 z-0 h-[560px] w-[560px] rounded-full bg-gradient-to-br to-transparent blur-[140px]"
      />

      {/* Mid-Right Lime Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 z-0 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gradient-to-l from-[#d6fb00]/20 via-[#ecffb6]/30 to-transparent blur-[140px]"
      />

      {/* Bottom-Left Soft Teal Aura */}
      <div
        aria-hidden="true"
        className="from-[#00545f]/16 via-[#ecffb6]/28 pointer-events-none absolute -bottom-14 -left-32 z-0 h-[580px] w-[580px] rounded-full bg-gradient-to-tr to-transparent blur-[140px]"
      />

      {/* Bottom-Right Pale Chartreuse Glow */}
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/18 pointer-events-none absolute -bottom-14 -right-24 z-0 h-[520px] w-[520px] rounded-full bg-gradient-to-tl via-[#ecffb6]/30 to-transparent blur-[140px]"
      />

      {/* Seamless Edge Fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-12 bg-gradient-to-b from-white/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-12 bg-gradient-to-t from-white/60 to-transparent"
      />

      <Container className="relative z-10">
        <div className="mb-4 text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#00545f] sm:text-sm">
            RV Institute of Technology and Management®
          </p>
          <p className="mt-1 text-xs font-medium text-graphite sm:text-sm">
            Coordinated by Department of Computer Science and Engineering · CSE Cluster
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          {/* Accessible Headline */}
          <motion.h1
            aria-label="National Conference on Digital Technology & Engineering, NCDTE-2026"
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
                className="mx-auto block max-w-[18ch] font-serif text-[clamp(1.75rem,3vw,3.25rem)] leading-tight text-ink"
              >
                {" "}
                Digital Technology <em className="font-serif font-normal italic">&amp;</em>{" "}
                Engineering
              </motion.span>
            </span>

            {/* Line 2: Mega Sans NCDTE with mathematically centered NCDTE and hanging 2026 */}
            <span className="mt-1 block overflow-hidden pb-[0.04em] sm:mt-2">
              <motion.span
                variants={lineVariants}
                className="relative inline-block bg-gradient-to-r from-[#00545f] via-[#007b89] to-[#d6fb00] bg-clip-text font-sans text-[clamp(3.5rem,30vw,15rem)] font-black leading-[0.88] tracking-tighter text-transparent drop-shadow-[0_10px_30px_rgba(0,84,95,0.20)]"
              >
                NCDTE
              </motion.span>
            </span>
          </motion.h1>

          {/* Date and Venue: Two Stacked Lines */}
          <div className="mt-5 flex flex-col items-center gap-1.5 text-center sm:mt-6 sm:gap-2">
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
              <span className="-mx-1 bg-[linear-gradient(transparent_60%,#ecffb6_60%)] px-1 font-sans text-[clamp(1.35rem,2.4vw,2.2rem)] font-bold tracking-tight text-[#00545f]">
                4 December 2026
              </span>
            </div>

            <div className="inline-flex items-center justify-center gap-2 text-[14px] font-medium leading-none text-ink sm:text-[16px] md:text-[18px]">
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
              <span className="text-[clamp(0.9rem,1.4vw,1.1rem)]">
                RV Institute of Technology and Management, Bengaluru
              </span>
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
              href={CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-6 text-sm sm:h-11"
            >
              Submit your paper →
            </Button>

            <Button
              variant="ghost"
              href={CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-5 text-sm sm:h-11"
              showArrow={false}
            >
              Register Now
            </Button>
          </div>

          {/* Quick Facts Stats Row */}
          <div className="mt-5 grid w-full max-w-4xl grid-cols-2 gap-x-6 gap-y-4 pt-2 sm:mt-6 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-4 sm:pt-4">
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
