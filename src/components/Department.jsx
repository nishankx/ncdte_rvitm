import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Card from "./Card";
import { department } from "../data/departments";

export default function Department() {
  return (
    <section id="department" className="scroll-mt-20 bg-mist py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={false}>Department</SectionLabel>
          <SectionHeading>
            Computer Science &{" "}
            <em className="font-serif font-normal italic text-ink">Engineering</em>
          </SectionHeading>

          {/* Two-column grid of equal-height cards */}
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {/* Left Card: HoD, description, focus areas - all centered */}
            <Reveal className="h-full">
              <Card
                onWhite={false}
                className="flex h-full flex-col items-center justify-between text-center"
              >
                <div>
                  <span className="mb-2 block text-eyebrow uppercase tracking-widest text-graphite">
                    Head of Department
                  </span>
                  <h3 className="mb-6 font-serif text-[32px] italic leading-tight text-ink">
                    {department.hod}
                  </h3>
                  <p className="mx-auto mb-8 max-w-[50ch] text-body leading-relaxed text-ink/85">
                    {department.desc}
                  </p>
                </div>

                <div className="w-full">
                  <span className="mb-3 block text-eyebrow uppercase tracking-widest text-graphite">
                    Focus Areas
                  </span>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {department.focus.map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-flex select-none rounded-md bg-mist-50 px-3.5 py-2 text-[15px] font-semibold text-graphite"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Right Column: Two stacked Cards for Vision & Mission */}
            <div className="flex flex-col gap-6">
              {/* Vision Card */}
              <Reveal delay={0.1} className="flex-1">
                <Card
                  onWhite={false}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <span className="mb-2 block text-eyebrow uppercase tracking-widest text-graphite">
                    Strategic Direction
                  </span>
                  <h4 className="mb-3 font-serif text-2xl italic text-ink">Department Vision</h4>
                  <p className="mx-auto max-w-[50ch] text-body leading-relaxed text-ink/85">
                    {department.vision}
                  </p>
                </Card>
              </Reveal>

              {/* Mission Card */}
              <Reveal delay={0.15} className="flex-1">
                <Card
                  onWhite={false}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <span className="mb-2 block text-eyebrow uppercase tracking-widest text-graphite">
                    Commitment to Excellence
                  </span>
                  <h4 className="mb-3 font-serif text-2xl italic text-ink">Department Mission</h4>
                  {/* Bullet list per Part 4 rules */}
                  <ul className="mx-auto w-fit max-w-full list-none space-y-3">
                    {department.mission.map((m, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-left text-body text-ink/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet"
                        />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
