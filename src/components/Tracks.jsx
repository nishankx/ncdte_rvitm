import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import { TRACKS_DATA } from '../data/tracks';

function TrackIcon({ iconType }) {
  const iconClass = "w-7 h-7 sm:w-8 sm:h-8";
  switch (iconType) {
    case "cpu":
      // AI Chip
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case "bot":
      // Smart Systems / IoT / Robotics
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4M8 15h.01M16 15h.01" />
        </svg>
      );
    case "shield-network":
      // Computing / Communication / Cybersecurity
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "circuit":
      // Advanced Engineering / Electronics / Intelligent Systems
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <path d="M6 6h.01M6 18h.01M18 6h.01M18 18h.01M10 10v4M14 10v4" />
        </svg>
      );
    case "leaf-gear":
    default:
      // Sustainable Engineering / Emerging Applications
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
  }
}

export default function Tracks() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="tracks" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <SectionLabel>Call for papers</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight mt-2">
            Conference Tracks & Scope
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-4xl leading-relaxed">
            Authors are invited to contribute to the conference by submitting original research papers that present significant research findings, project outcomes, experimental studies, and industrial experiences in the following areas, but not limited to:
          </p>
        </Reveal>

        {/* Bold white-on-indigo panel */}
        <div className="mt-10 bg-indigoDeep text-white rounded-2xl p-6 sm:p-10 shadow-card border border-indigo-900/60 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal/20 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            {TRACKS_DATA.map((track) => (
              <motion.div
                key={track.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="bg-white/10 hover:bg-white/[0.16] border border-white/15 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-bold text-xs tracking-widest text-sky bg-white/10 px-3 py-1 rounded-full border border-sky/30">
                      {track.number}
                    </span>
                    <div className="text-sky group-hover:scale-110 group-hover:text-white transition-all duration-300">
                      <TrackIcon iconType={track.icon} />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-sky transition-colors leading-snug">
                    {track.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed font-light border-t border-white/10 pt-4">
                  {track.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
