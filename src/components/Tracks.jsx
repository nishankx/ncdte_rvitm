import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TRACKS_DATA } from "../data/tracks";

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#ecffb6]/15 via-white/85 to-[#d6fb00]/10 py-10 sm:py-12 md:py-14"
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

      {/* Seamless Edge Fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-10 bg-gradient-to-b from-white/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-10 bg-gradient-to-t from-white/60 to-transparent"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={true}>Call for papers</SectionLabel>
          <SectionHeading className="!mb-3 sm:!mb-4">
            Call for <em className="font-serif font-normal italic text-ink">papers</em>
          </SectionHeading>

          <Reveal delay={0.08} className="mx-auto mb-5 max-w-[68ch] sm:mb-6">
            <p className="text-small font-normal leading-relaxed text-ink/85 sm:text-[15px]">
              Authors are invited to contribute to the conference by submitting original research
              papers that present significant research findings, project outcomes, experimental
              studies, and industrial experiences in the following areas, but not limited to:
            </p>
          </Reveal>

          {/* Panel List: Repeating track panels one below the other */}
          <div className="mx-auto w-full max-w-4xl space-y-2.5 sm:space-y-3">
            {TRACKS_DATA.map((track, idx) => {
              const formattedNum = String(track.id).padStart(2, "0");
              return (
                <Reveal key={track.id} delay={idx * 0.04}>
                  <div className="group flex items-start gap-4 rounded-lg border border-slate-100 bg-mist-50/75 px-4 py-3 transition-all duration-200 hover:border-aurora-azure/25 hover:bg-mist-50 hover:shadow-soft sm:items-center sm:gap-6 sm:px-6 sm:py-3.5">
                    {/* Left: Track Number */}
                    <div className="flex shrink-0 items-center justify-center pt-0.5 sm:pt-0">
                      <span className="font-serif text-2xl font-normal tabular-nums text-ink/30 transition-colors duration-200 group-hover:text-aurora-azure sm:text-3xl md:text-4xl">
                        {formattedNum}
                      </span>
                    </div>

                    {/* Right: Heading on top, Description on bottom */}
                    <div className="flex min-w-0 flex-1 flex-col space-y-1 text-left">
                      <h3 className="text-left font-sans text-[15px] font-semibold leading-snug tracking-tight text-ink sm:text-[16px] md:text-[17px]">
                        {track.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-graphite sm:text-[13.5px]">
                        {track.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
