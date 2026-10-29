import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Countdown from "./Countdown";
import Button from "./Button";
import { CONFIG } from "../config";
import { ALL_LOGOS } from "../data/affiliations";

export default function Hero({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const campusY = useTransform(scrollY, [0, 600], [0, 40]);
  const campusScale = useTransform(scrollY, [0, 600], [1, 1.03]);

  const leftLogos = ALL_LOGOS.slice(0, 4);
  const rightLogos = ALL_LOGOS.slice(4, 8);

  const quickStats = [
    { number: "04", suffix: "DEC", label: "Conference Date 2026" },
    { number: "RVITM", suffix: "", label: "Bengaluru Campus Venue" },
    { number: "06", suffix: "", label: "Research Tracks" },
    { number: "15", suffix: "NOV", label: "Submission Deadline 2026" },
  ];

  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const headerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="home"
      className= "mt-5 grain relative isolate overflow-hidden bg-transparent"
    >
      {/* RVITM College Campus Background with Framer Motion */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden will-change-transform transform-gpu"
        style={shouldReduceMotion ? {} : { y: campusY, scale: campusScale }}
        initial={shouldReduceMotion ? { opacity: 0.38 } : { opacity: 0 }}
        animate={{ opacity: 0.38 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <motion.img
          src="/images/rvitm-campusb.png"
          alt="RVITM Campus"
          className="h-full w-full object-cover object-center contrast-[1.05] saturate-[0.5] filter will-change-transform transform-gpu"
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
      <Container className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Vertical Logo Stack: 4 logos blended seamlessly without boundaries */}
          <div className="hidden md:flex flex-col items-center justify-center gap-6 lg:gap-8 shrink-0 w-28 lg:w-36 ml-2 lg:ml-6">
            {leftLogos.map((logo) => (
              <div
                key={logo.name}
                title={logo.fullName || logo.name}
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.img}
                  alt={logo.alt || logo.fullName || logo.name}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[120px] lg:max-w-[145px] object-contain mix-blend-multiply"
                  loading="eager"
                />
              </div>
            ))}
          </div>

          {/* Center Column: Existing Hero Content */}
          <div className="flex-1 max-w-4xl min-w-0">
            <div className="text-center">
              <img
                src="/icons/College_logo.png"
                alt="RV Institute of Technology and Management"
                className="mx-auto h-[10rem] w-auto object-contain mix-blend-multiply"
              />
              <p className="mt-4 text-center text-xs font-medium text-graphite sm:text-sm">
                Organized by Department of Computer Science and Engineering - CSE Cluster
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

                {/* Line 1: Digital Technology & Engineering */}
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    variants={lineVariants}
                    className="mx-auto block max-w-auto font-sans font-bold text-[clamp(1.75rem,3vw,3.25rem)] leading-tight text-ink"
                  >
                    Digital Technology &amp; Engineering
                  </motion.span>
                </span>

                {/* Line 2: Mega Sans NCDTE with mathematically centered NCDTE and hanging 2026 */}
                <span className="mt-1 block overflow-hidden pb-[0.04em] sm:mt-2">
                  <motion.span
                    variants={lineVariants}
                    className="relative inline-block bg-gradient-to-r from-[#00545f] via-[#007b89] to-[#d6fb00] bg-clip-text font-sans text-[clamp(3.5rem,16vw,10rem)] font-black leading-[0.88] tracking-tighter text-transparent drop-shadow-[0_10px_30px_rgba(0,84,95,0.20)]"
                  >
                    NCDTE 
                  </motion.span>
                </span>
                <span className="mt-1 inline-block bg-gradient-to-r from-[#00545f] via-[#007b89] to-[#d6fb00] bg-clip-text font-sans text-[80px] font-black leading-[0.88] tracking-tighter text-transparent drop-shadow-[0_10px_30px_rgba(0,84,95,0.20)]">2026</span>
                  <motion.div
                    variants={lineVariants}
                    className="relative bg-gradient-to-r from-[#ff0000] via-[#ff8c00] to-[#ffff00] bg-clip-text font-sans text-[clamp(2rem,7vw,3rem)] font-black leading-[0.88] tracking-tighter text-transparent drop-shadow-[0_10px_30px_rgba(255,69,0,0.20)]"
                  >
                     [ HYBRID MODE ]
                  </motion.div>
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

              {/* Centered Action buttons */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:mt-5 sm:gap-4">
                <Button
                  variant="primary"
                  href={CONFIG.REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-6 text-sm sm:h-11"
                >
                  Submit your paper
                </Button>
                {CONFIG.BROCHURE_1_URL && (
                  <Button
                    variant="soft"
                    href={CONFIG.BROCHURE_1_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 text-xs sm:h-11 sm:text-sm border border-ink/15"
                  >
                    Brochure 1
                  </Button>
                )}
                {CONFIG.BROCHURE_2_URL && (
                  <Button
                    variant="soft"
                    href={CONFIG.BROCHURE_2_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 text-xs sm:h-11 sm:text-sm border border-ink/15"
                  >
                    Brochure 2
                  </Button>
                )}
                {CONFIG.PAPER_TEMPLATE_URL && (
                  <Button
                    variant="soft"
                    href={CONFIG.PAPER_TEMPLATE_URL}
                    download={CONFIG.PAPER_TEMPLATE_NAME || "IJSRP-paper-submission-format-single-column.docx"}
                    className="h-10 px-4 text-xs sm:h-11 sm:text-sm border border-ink/15"
                  >
                    Paper Submission Format
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Vertical Logo Stack: 4 logos blended seamlessly without boundaries */}
          <div className="hidden md:flex flex-col items-center justify-center gap-6 lg:gap-8 shrink-0 w-28 lg:w-36 mr-2 lg:mr-6">
            {rightLogos.map((logo) => (
              <div
                key={logo.name}
                title={logo.fullName || logo.name}
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.img}
                  alt={logo.alt || logo.fullName || logo.name}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[120px] lg:max-w-[145px] object-contain mix-blend-multiply"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile only row below md without boundaries */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:hidden">
          {ALL_LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center p-1">
              <img
                src={logo.img}
                alt={logo.name}
                className="h-9 w-auto max-w-[85px] object-contain mix-blend-multiply"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
