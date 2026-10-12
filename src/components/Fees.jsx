import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import Button from './Button';
import { FEES_DATA } from '../data/fees';
import { CheckCircle2, AlertCircle, PackageCheck, Users } from 'lucide-react';

export default function Fees({ onOpenModal }) {
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
    <section id="registration" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <SectionLabel>Registration Fee</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight mt-2">
            Affordable & Transparent Pricing
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-2xl leading-relaxed">
            Choose your applicable participation category. Each paper presentation requires registration by at least one author.
          </p>
        </Reveal>

        {/* Bold white-on-indigo panel */}
        <div className="mt-10 bg-indigoDeep text-white rounded-2xl p-6 sm:p-10 shadow-card border border-indigo-900/60 relative overflow-hidden">
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-royal/30 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
          >
            {/* Main Card */}
            <motion.div
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="bg-white/10 border-2 border-sky/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md relative"
            >
              <div className="absolute -top-3 right-6 bg-sky text-banner text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                Full Registration
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky/20 text-sky flex items-center justify-center">
                    <PackageCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-sky tracking-wider uppercase">
                      Primary Author / Delegate
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                      {FEES_DATA.main.category}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                    {FEES_DATA.main.amount}
                  </span>
                  <span className="text-slate-300 text-sm">/ participant</span>
                </div>

                <p className="mt-4 text-slate-200 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {FEES_DATA.main.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-sky">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-sky" />
                  <span>Includes Official Conference Registration Kit</span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  variant="filled"
                  onClick={() => onOpenModal("registration")}
                  className="w-full font-heading font-bold uppercase tracking-wider"
                >
                  Register Now
                </Button>
              </div>
            </motion.div>

            {/* Secondary Card */}
            <motion.div
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-slate-300 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                      Additional Attendees
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                      {FEES_DATA.secondary.category}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                    {FEES_DATA.secondary.amount}
                  </span>
                  <span className="text-slate-300 text-sm">/ extra member</span>
                </div>

                <p className="mt-4 text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {FEES_DATA.secondary.description}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  variant="outlined"
                  onClick={() => onOpenModal("registration")}
                  className="w-full font-heading font-semibold uppercase tracking-wider"
                >
                  Register Co-Author
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Important note & deadline banner inside the panel */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-slate-200">
            <div className="flex items-center gap-2.5">
              <PackageCheck className="w-5 h-5 text-sky shrink-0" />
              <span>
                <strong>Note:</strong> {FEES_DATA.note}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-sky bg-white/10 px-4 py-2 rounded-xl border border-sky/20">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium">
                {FEES_DATA.deadlineNotice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
