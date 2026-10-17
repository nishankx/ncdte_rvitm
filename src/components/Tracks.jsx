import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TRACKS_DATA, CALL_FOR_PAPERS_INTRO } from "../data/tracks";

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#ecffb6]/15 via-white/85 to-[#d6fb00]/10 py-12 sm:py-16 md:py-20"
    >
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#00545f]/15 via-[#ecffb6]/25 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/16 pointer-events-none absolute -right-24 bottom-0 -z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl via-[#ecffb6]/25 to-transparent blur-[140px]"
      />


      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={true}>Call for Papers</SectionLabel>
          <SectionHeading className="!mb-3 sm:!mb-4">
            Call for <em className="font-serif font-normal italic text-ink">Papers</em>
          </SectionHeading>

          <Reveal delay={0.08} className="mx-auto mb-8 max-w-[72ch] sm:mb-10">
            <p className="text-small font-normal leading-relaxed text-ink/85 sm:text-[16px]">
              {CALL_FOR_PAPERS_INTRO}
            </p>
          </Reveal>

          {/* Panel List: Matching the brochure's Track badges and descriptions */}
          <div className="mx-auto w-full max-w-4xl space-y-3 sm:space-y-4">
            {TRACKS_DATA.map((track, idx) => (
              <Reveal key={track.id} delay={idx * 0.04}>
                <div className="group flex flex-col gap-3 rounded-lg border border-slate-200/90 bg-white p-4 text-left shadow-sm transition-all duration-200 hover:border-[#00545f]/40 hover:shadow-soft sm:flex-row sm:items-center sm:gap-6 sm:p-5">
                  {/* Left: Track Badge styled just like the brochure */}
                  <div className="inline-flex shrink-0 items-center justify-center rounded bg-[#00545f] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#d6fb00] shadow-sm sm:w-28 sm:px-4 sm:py-2">
                    {track.number}
                  </div>

                  {/* Right: Track Title */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-sans text-[16px] font-semibold leading-snug tracking-tight text-ink sm:text-[17px] md:text-[18px]">
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
