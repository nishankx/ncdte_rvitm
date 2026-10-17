import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { CONFIG } from "../config";
import { INSTITUTION_DATA } from "../data/institution";

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
    <section
      id="institution"
      ref={sectionRef}
      className="from-[#d6fb00]/12 to-[#ecffb6]/18 relative scroll-mt-20 overflow-hidden bg-gradient-to-bl via-white/85 py-20 md:py-32"
    >
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="from-[#ecffb6]/28 via-[#d6fb00]/16 pointer-events-none absolute -right-28 top-1/4 -z-0 h-[560px] w-[560px] rounded-full bg-gradient-to-l to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#00545f]/14 via-[#ecffb6]/26 pointer-events-none absolute -left-28 bottom-10 -z-0 h-[520px] w-[520px] rounded-full bg-gradient-to-tr to-transparent blur-[140px]"
      />


      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={true}>About RVITM</SectionLabel>
          <SectionHeading>
            About <em className="font-serif font-normal italic text-ink">RVITM</em>
          </SectionHeading>

          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (7 cols): Big Campus Image with gentle parallax, full column width */}
            <div className="w-full lg:col-span-7">
              <Reveal className="h-full w-full">
                <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-lg bg-mist md:min-h-[520px] lg:min-h-[640px]">
                  {!imgError ? (
                    <motion.img
                      style={shouldReduceMotion ? {} : { scale: parallaxScale, y: parallaxY }}
                      src={INSTITUTION_DATA.campusImage}
                      alt="RV Institute of Technology and Management, Bengaluru"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-mist p-8 text-center text-base font-medium text-graphite">
                      RV Institute of Technology and Management Campus
                    </div>
                  )}

                  {/* Frosted caption chip centered at bottom */}
                  <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 select-none whitespace-nowrap rounded-pill bg-white/85 px-4 py-2 font-sans text-[14px] font-semibold text-ink shadow-pill backdrop-blur-md">
                    RVITM · Kothanur, JP Nagar, Bengaluru
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column (5 cols): Description, Facts, Vision/Mission, Map Link */}
            <div className="flex flex-col items-start space-y-8 py-4 text-left lg:col-span-5">
              <Reveal delay={0.1} className="w-full">
                <p className="w-full text-lead font-normal leading-relaxed text-ink/85">
                  {INSTITUTION_DATA.description}
                </p>
              </Reveal>

              {/* Fact Chips */}
              <Reveal delay={0.15} className="w-full">
                <div className="flex flex-wrap gap-2.5">
                  {INSTITUTION_DATA.facts.map((fact, idx) => (
                    <span
                      key={idx}
                      className="inline-flex rounded-md bg-mist-50 px-3.5 py-1.5 text-caption font-semibold uppercase tracking-wider text-graphite"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Institutional Leadership from brochure */}
              <div className="w-full space-y-4 pt-2">
                <Reveal delay={0.2} className="w-full">
                  <div className="space-y-3 text-left">
                    <span className="block text-eyebrow uppercase tracking-widest text-graphite">
                      College Leadership
                    </span>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {INSTITUTION_DATA.leadership?.map((leader, idx) => (
                        <div key={idx} className="rounded-md border border-slate-200/80 bg-white p-3.5 shadow-sm">
                          <p className="font-serif text-base font-semibold italic text-ink">{leader.name}</p>
                          <p className="text-caption text-graphite">{leader.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* View College on Map Button */}
              <Reveal delay={0.3} className="pt-2">
                <Button variant="primary" href={CONFIG.MAP_URL} target="_blank">
                  <svg
                    className="-mt-0.5 mr-1 inline-block h-4 w-4 shrink-0 text-white"
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
        </div>
      </Container>
    </section>
  );
}
