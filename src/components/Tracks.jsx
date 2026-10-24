import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import DarkPatternBackground from "./DarkPatternBackground";
import { TRACKS_DATA, CALL_FOR_PAPERS_INTRO } from "../data/tracks";

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative scroll-mt-20 overflow-hidden bg-[#0F2F31] py-12 text-white sm:py-16 md:py-20"
    >
      {/* Subtle Dotted Matrix & Concentric Circles Pattern */}
      <DarkPatternBackground circlePosition="right" />
      {/* Top & Bottom Ambient Border Accent Lines matching Navbar/Footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />

      {/* Dispersed Ambient Tech Glows from brochure palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-0 -z-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#00545f]/45 via-[#007a87]/20 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 -z-0 h-[520px] w-[520px] rounded-full bg-gradient-to-tl from-[#d6fb00]/16 via-[#ecffb6]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#1B393A]/50 to-transparent blur-[120px]"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onDark>Call for Papers</SectionLabel>
          <SectionHeading className="!mb-3 !text-white sm:!mb-4">
            Call for <span className="text-aurora">Papers</span>
          </SectionHeading>

          <Reveal delay={0.08} className="mx-auto mb-8 max-w-[72ch] sm:mb-10">
            <p className="text-small font-normal leading-relaxed text-white/80 sm:text-[16px]">
              {CALL_FOR_PAPERS_INTRO}
            </p>
          </Reveal>

          {/* Panel List: Matching the brochure's Track badges and descriptions */}
          <div className="mx-auto w-full max-w-4xl space-y-3 sm:space-y-4">
            {TRACKS_DATA.map((track, idx) => (
              <Reveal key={track.id} delay={idx * 0.04}>
                <div className="group flex flex-col gap-3 rounded-xl border border-[#264548] bg-[#142A2C]/80 p-4 text-left shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-200 hover:border-[#007a87]/70 hover:bg-[#183437]/95 hover:shadow-[0_8px_25px_rgba(0,122,135,0.2)] sm:flex-row sm:items-center sm:gap-6 sm:p-5">
                  {/* Left: Track Badge styled just like the brochure */}
                  <div className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#007a87]/40 bg-[#00545f] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#d6fb00] shadow-sm sm:w-28 sm:px-4 sm:py-2">
                    {track.number}
                  </div>

                  {/* Right: Track Title */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-sans text-[16px] font-semibold leading-snug tracking-tight text-white sm:text-[17px] md:text-[18px]">
                      {track.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
