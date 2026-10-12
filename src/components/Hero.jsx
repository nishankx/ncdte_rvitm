import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Countdown from './Countdown';
import Button from './Button';
import { Calendar, MapPin, Layers, Clock } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const quickFacts = [
    {
      icon: Calendar,
      primary: "4 DEC 2026",
      secondary: "CONFERENCE DATE",
    },
    {
      icon: MapPin,
      primary: "RVITM, BENGALURU",
      secondary: "VENUE",
    },
    {
      icon: Layers,
      primary: "05",
      secondary: "TRACKS",
    },
    {
      icon: Clock,
      primary: "2 NOV 2026",
      secondary: "SUBMISSION DEADLINE",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden bg-white">
      {/* 5.1 Identity strip */}
      <div className="bg-royal text-white border-b border-white/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-2.5">
            {!imgError ? (
              <img
                src="/images/rvitm-logo.png"
                alt="RVITM Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-full bg-white p-0.5 shadow-sm"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white/20 border border-white/40 flex items-center justify-center font-bold text-xs text-sky">
                RV
              </div>
            )}
            <span className="font-heading font-semibold tracking-wide">
              RV Institute of Technology and Management®
            </span>
          </div>
          <div className="text-center sm:text-right text-[11px] sm:text-xs text-sky/90 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 inline text-sky shrink-0" />
            <span>Sy. No. 171/5, Kothanur, 8th Phase, JP Nagar, Bengaluru - 560076, Karnataka, India</span>
          </div>
        </div>
      </div>

      {/* Background Dots + Animated Gradient Blobs */}
      <div className="relative bg-dots-pattern pt-8 pb-16 md:pt-12 md:pb-20">
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-royal/10 blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-sky/30 blur-3xl pointer-events-none"
            />
          </>
        )}

        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Banner with Chevron Cut */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto my-4 max-w-4xl"
          >
            <div className="relative [clip-path:polygon(0_0,100%_0,calc(100%-24px)_100%,24px_100%)] sm:[clip-path:polygon(0_0,100%_0,calc(100%-36px)_100%,36px_100%)] bg-gradient-to-r from-banner to-banner-light text-white px-6 sm:px-14 py-10 sm:py-14 text-center shadow-xl">
              {/* College Subheading / Crest Wordmark */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-3 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20"
              >
                <span className="w-2 h-2 rounded-full bg-sky animate-ping" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-sky">
                  Department of Computer Science and Engineering Presents
                </span>
              </motion.div>

              {/* H1 Heading with sequential fade-up */}
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-5xl uppercase tracking-tight leading-tight sm:leading-snug"
              >
                NATIONAL CONFERENCE ON <br className="hidden sm:inline" />
                DIGITAL TECHNOLOGY AND ENGINEERING
              </motion.h1>

              {/* Highlight Tag & Date Line */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
              >
                <span className="font-heading font-black text-2xl sm:text-3xl text-sky tracking-wider drop-shadow-sm">
                  NCDTE-2026
                </span>
                <span className="hidden sm:inline text-white/40 font-bold">•</span>
                <span className="text-base sm:text-xl font-medium text-white/95 tracking-wide flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-sky" />
                  4th December 2026
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  variant="filled"
                  onClick={() => onOpenModal("submission")}
                  className="w-full sm:w-auto font-heading font-bold tracking-wide uppercase shadow-lg shadow-black/20"
                >
                  SUBMIT YOUR PAPERS HERE
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => onOpenModal("registration")}
                  className="w-full sm:w-auto font-heading font-semibold tracking-wide uppercase"
                >
                  Register Now
                </Button>
              </motion.div>
            </div>

            {/* Thin dark bar beneath chevron banner */}
            <div className="h-2 w-3/4 mx-auto bg-ink/80 rounded-b-md shadow-sm" />
          </motion.div>

          {/* Countdown timer */}
          <div className="mt-8 sm:mt-12 max-w-xl mx-auto bg-indigoDeep rounded-2xl p-6 sm:p-8 text-white shadow-card border border-white/10">
            <Countdown />
          </div>

          {/* Quick-facts strip (4 stat cards) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {quickFacts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-card transition-all duration-200 flex flex-col items-center text-center justify-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky/30 text-banner flex items-center justify-center mb-2.5 group-hover:bg-banner group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-heading font-extrabold text-sm sm:text-base text-ink tracking-tight">
                    {fact.primary}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-muted tracking-wider uppercase mt-0.5">
                    {fact.secondary}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
