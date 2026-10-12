import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import PersonCard from './PersonCard';
import { COMMITTEE_GROUPS } from '../data/committee';

export default function Committee() {
  const shouldReduceMotion = useReducedMotion();

  const gridContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const gridItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="committee" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <SectionLabel>Organizing Leadership</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight mt-2">
            Conference Committee
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-3xl leading-relaxed">
            Distinguished academicians, administrators, and coordinators guiding NCDTE-2026.
          </p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {COMMITTEE_GROUPS.map((group, groupIdx) => {
            // Determine column layout based on number of members
            const count = group.members.length;
            let colClasses = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
            if (count === 1) {
              colClasses = "grid-cols-1 max-w-sm mx-auto";
            } else if (count === 2) {
              colClasses = "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto";
            } else if (count === 3) {
              colClasses = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto";
            }

            return (
              <div key={groupIdx} className="pt-2">
                <div className="flex items-center gap-4 mb-6">
                  <SectionLabel className="mb-0">
                    {group.roleGroup}
                  </SectionLabel>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className={`grid gap-6 ${colClasses}`}
                >
                  {group.members.map((member, mIdx) => (
                    <motion.div key={mIdx} variants={gridItem}>
                      <PersonCard member={member} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
