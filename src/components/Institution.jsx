import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Button from './Button';
import { CONFIG } from '../config';
import { INSTITUTION_DATA } from '../data/institution';

export default function Institution() {
  const [imgError, setImgError] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.0]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="institution" ref={sectionRef} className="py-20 md:py-32 bg-white scroll-mt-20">
      <Container>
        <SectionLabel onWhite={true}>About RVITM</SectionLabel>
        <SectionHeading>
          About <em className="font-serif italic font-normal text-ink">RVITM</em>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column (7 cols): Big Campus Image with gentle parallax */}
          <div className="lg:col-span-7 -mx-6 sm:mx-0">
            <Reveal className="h-full">
              <div className="relative h-full min-h-[360px] md:min-h-[560px] lg:min-h-[700px] rounded-none sm:rounded-lg overflow-hidden bg-mist">
                {!imgError ? (
                  <motion.img
                    style={
                      shouldReduceMotion
                        ? {}
                        : { scale: parallaxScale, y: parallaxY }
                    }
                    src={INSTITUTION_DATA.campusImage}
                    alt="RV Institute of Technology and Management, Bengaluru"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-mist flex items-center justify-center text-graphite text-base p-8 text-center font-medium">
                    RV Institute of Technology and Management Campus
                  </div>
                )}

                {/* Frosted caption chip bottom-left */}
                <div className="absolute bottom-6 left-6 z-10 bg-white/80 backdrop-blur-md rounded-pill px-4 py-2 text-[14px] font-semibold text-ink shadow-pill select-none">
                  RVITM · Kothanur, JP Nagar, Bengaluru
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Description, Facts, Vision/Mission, Map Link */}
          <div className="lg:col-span-5 self-center space-y-8 py-4">
            <Reveal delay={0.1}>
              <p className="text-lead text-ink/85 leading-relaxed font-normal">
                {INSTITUTION_DATA.description}
              </p>
            </Reveal>

            {/* Fact Chips */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-2.5">
                {INSTITUTION_DATA.facts.map((fact, idx) => (
                  <span
                    key={idx}
                    className="inline-flex px-3.5 py-1.5 rounded-md bg-mist-50 text-caption font-semibold text-graphite uppercase tracking-wider"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Vision and Mission as Two Plain Text Blocks with Serif Italic Subheadings */}
            <div className="space-y-6 pt-2">
              <Reveal delay={0.2}>
                <div className="space-y-2">
                  <h3 className="font-serif italic text-2xl text-ink">
                    Institution Vision
                  </h3>
                  <p className="text-small text-graphite leading-relaxed">
                    {INSTITUTION_DATA.vision}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="space-y-2">
                  <h3 className="font-serif italic text-2xl text-ink">
                    Institution Mission
                  </h3>
                  <p className="text-small text-graphite leading-relaxed">
                    {INSTITUTION_DATA.mission}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* View College on Map Button */}
            <Reveal delay={0.3} className="pt-2">
              <Button
                variant="primary"
                href={CONFIG.MAP_URL}
                target="_blank"
              >
                <svg
                  className="w-4 h-4 mr-1 text-white shrink-0 inline-block -mt-0.5"
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
                VIEW COLLEGE ON MAP
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
