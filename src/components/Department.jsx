import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Card from "./Card";
import LightPatternBackground from "./LightPatternBackground";
import { department } from "../data/departments";

export default function Department() {
  return (
    <section
      id="department"
      className="from-[#00545f]/8 to-[#d6fb00]/12 relative scroll-mt-20 overflow-hidden bg-gradient-to-tr via-white/85 py-12 sm:py-16 md:py-20"
    >
      {/* Subtle Precision Plus-Grid & Hexagonal Tech Lattice */}
      <LightPatternBackground accent="hex" accentPosition="left" />
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="via-[#ecffb6]/26 pointer-events-none absolute -left-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[#00545f]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/16 via-[#ecffb6]/26 pointer-events-none absolute -right-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tl to-transparent blur-[140px]"
      />


      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={false}>Organizing Department</SectionLabel>
          <SectionHeading>
            Department of Computer Science &amp; Engineering
          </SectionHeading>

          <p className="mb-10 max-w-[65ch] text-small sm:text-body text-graphite leading-relaxed text-justify">
            {department.desc}
          </p>

          {/* Two-column grid: Vision (left) & Mission (right) */}
          <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8 text-left">
            {/* Left Card: Department Vision & Leadership */}
            <Reveal className="h-full lg:col-span-5">
              <Card
                onWhite={false}
                className="flex h-full flex-col justify-between p-5 sm:p-8"
              >
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#00545f]" />
                    <span className="text-eyebrow text-[2.5rem] uppercase tracking-widest text-graphite font-bold">
                      Department Vision
                    </span>
                  </div>

                  <div className="relative rounded-2xl bg-gradient-to-br from-[#00545f]/8 via-[#ecffb6]/25 to-transparent p-4 sm:p-6 border border-[#00545f]/15">
                    <span className="font-serif text-4xl text-[#00545f]/40 leading-none select-none block mb-1">
                      “
                    </span>
                    <p className="font-serif text-[2rem] italic leading-relaxed text-ink -mt-3 text-justify">
                      {department.vision}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200/80 pt-5 space-y-2">
                  <span className="block text-eyebrow uppercase tracking-widest text-graphite">
                    Department Leadership
                  </span>
                  <p className="font-serif text-xl font-semibold italic text-ink">
                    {department.hod}
                  </p>
                  <p className="text-caption text-graphite">
                    {department.hodRole}
                  </p>
                  <p className="text-caption text-graphite/80 pt-1">
                    {department.institution}
                  </p>
                </div>
              </Card>
            </Reveal>

            {/* Right Card: Department Mission (M1 - M4) */}
            <Reveal delay={0.1} className="h-full lg:col-span-7">
              <Card
                onWhite={false}
                className="flex h-full flex-col justify-between p-5 sm:p-8"
              >
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-aurora-cyan to-aurora-lime" />
                    <span className="text-eyebrow mb-5 text-[2.5rem] uppercase tracking-widest text-graphite font-bold">
                     Department Mission
                    </span>
                  </div>

                  <div className="space-y-3.5 mt-10">
                    {department.mission.map((item) => (
                      <div
                        key={item.code}
                        className="group flex items-start gap-3 rounded-xl border border-[#00545f]/10 bg-white/70 p-3.5 sm:p-4 transition-all duration-200 hover:bg-white hover:border-[#00545f]/25 hover:shadow-soft"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00545f] text-white font-sans text-xs font-bold tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
                          {item.code}
                        </span>
                        <div className="flex-1">
                          <p className="text-small text-ink/90 leading-relaxed text-justify">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200/80 pt-4">
                  <span className="text-caption text-graphite">
                    Department of Computer Science &amp; Engineering · RVITM Bengaluru
                  </span>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
