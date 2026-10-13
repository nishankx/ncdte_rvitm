import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { TRACKS_DATA } from '../data/tracks';

export default function Tracks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="tracks" className="py-20 md:py-32 bg-white scroll-mt-20">
      <Container>
        <SectionLabel onWhite={true}>Call for papers</SectionLabel>
        <SectionHeading>
          Call for <em className="font-serif italic font-normal text-ink">papers</em>
        </SectionHeading>

        <Reveal delay={0.1} className="max-w-[60ch] mx-auto text-center mb-16 md:mb-24">
          <p className="text-lead text-ink/85 font-normal leading-relaxed">
            Authors are invited to contribute to the conference by submitting original research papers that present significant research findings, project outcomes, experimental studies, and industrial experiences in the following areas, but not limited to:
          </p>
        </Reveal>

        {/* Typography-Led List: Rows separated by 48-64px whitespace, NO borders */}
        <div className="space-y-12 md:space-y-16">
          {TRACKS_DATA.map((track, idx) => {
            const formattedNum = String(track.id).padStart(2, '0');
            return (
              <Reveal key={track.id} delay={idx * 0.06}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { x: 12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 cursor-default select-none"
                >
                  {/* Giant Serif Numeral */}
                  <span className="font-serif text-[clamp(4rem,9vw,9rem)] leading-none text-ink/15 group-hover:text-aurora transition-colors duration-300 shrink-0 tabular-nums">
                    {formattedNum}
                  </span>

                  {/* Eyebrow, Title & Description */}
                  <div className="flex-1 space-y-2">
                    <span className="text-eyebrow uppercase text-graphite tracking-widest block">
                      {track.number}
                    </span>
                    <h3 className="font-sans font-medium text-[clamp(1.5rem,3.2vw,3rem)] leading-tight tracking-tight text-ink group-hover:text-ink/90 transition-colors flex items-center justify-between gap-4">
                      <span>{track.title}</span>
                      <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-ink hidden sm:inline-block">
                        ↗
                      </span>
                    </h3>
                    <p className="text-small text-graphite leading-relaxed max-w-[56ch] pt-2">
                      {track.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
