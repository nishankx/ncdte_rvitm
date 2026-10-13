import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TRACKS_DATA } from "../data/tracks";

export default function Tracks() {
  return (
    <section id="tracks" className="scroll-mt-20 bg-white py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={true}>Call for papers</SectionLabel>
          <SectionHeading>
            Call for <em className="font-serif font-normal italic text-ink">papers</em>
          </SectionHeading>

          <Reveal delay={0.1} className="mx-auto mb-16 max-w-[62ch] text-center md:mb-24">
            <p className="text-lead font-normal leading-relaxed text-ink/85">
              Authors are invited to contribute to the conference by submitting original research
              papers that present significant research findings, project outcomes, experimental
              studies, and industrial experiences in the following areas, but not limited to:
            </p>
          </Reveal>

          {/* Typography-Led List: Rows separated by whitespace only, single centered axis */}
          <div className="w-full space-y-12 md:space-y-16">
            {TRACKS_DATA.map((track, idx) => {
              const formattedNum = String(track.id).padStart(2, "0");
              return (
                <Reveal key={track.id} delay={idx * 0.06}>
                  <div className="group flex cursor-default select-none flex-col items-center gap-2 text-center">
                    {/* Giant Serif Numeral */}
                    <span className="group-hover:text-aurora font-serif text-[clamp(4rem,9vw,9rem)] tabular-nums leading-none text-ink/15 transition-colors duration-300">
                      {formattedNum}
                    </span>

                    {/* Eyebrow */}
                    <span className="block text-eyebrow uppercase tracking-widest text-graphite">
                      {track.number}
                    </span>

                    {/* Title */}
                    <h3 className="font-sans text-[clamp(1.5rem,3.2vw,3rem)] font-medium leading-tight tracking-tight text-ink">
                      {track.title}
                    </h3>

                    {/* Description */}
                    <p className="mx-auto max-w-[62ch] pt-1 text-small leading-relaxed text-graphite">
                      {track.description}
                    </p>
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
