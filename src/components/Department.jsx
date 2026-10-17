import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Card from "./Card";
import { department } from "../data/departments";

export default function Department() {
  return (
    <section
      id="department"
      className="from-[#00545f]/8 to-[#d6fb00]/12 relative scroll-mt-20 overflow-hidden bg-gradient-to-tr via-white/85 py-20 md:py-32"
    >
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
            Computer Science &amp;{" "}
            <em className="font-serif font-normal italic text-ink">Engineering</em>
          </SectionHeading>

          {/* Two-column grid of equal-height cards */}
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {/* Left Card: Department Coordination & Leadership */}
            <Reveal className="h-full">
              <Card
                onWhite={false}
                className="flex h-full flex-col items-start justify-between text-left"
              >
                <div className="w-full">
                  <span className="mb-2 block text-left text-eyebrow uppercase tracking-widest text-graphite">
                    Conference Coordination
                  </span>
                  <h3 className="mb-4 text-left font-serif text-[28px] italic leading-tight text-ink">
                    {department.cluster}
                  </h3>
                  <p className="mb-6 w-full text-body leading-relaxed text-ink/85">
                    {department.desc}
                  </p>
                </div>

                <div className="w-full space-y-3 border-t border-slate-200/80 pt-5">
                  <div>
                    <p className="font-serif text-lg font-semibold italic text-ink">{department.dean}</p>
                    <p className="text-caption text-graphite">{department.deanRole}</p>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold italic text-ink">{department.hod}</p>
                    <p className="text-caption text-graphite">{department.hodRole}</p>
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Right Card: Coordinators from Brochure */}
            <Reveal delay={0.1} className="h-full">
              <Card
                onWhite={false}
                className="flex h-full flex-col items-start justify-between text-left"
              >
                <div className="w-full">
                  <span className="mb-2 block text-left text-eyebrow uppercase tracking-widest text-graphite">
                    Department Faculty Coordinators
                  </span>
                  <h4 className="mb-6 text-left font-serif text-2xl italic text-ink">
                    Organizing Coordinators
                  </h4>

                  <ul className="w-full list-none space-y-3.5">
                    {department.coordinators.map((coord, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-left text-small text-ink/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-[#00545f]"
                        />
                        <span>{coord}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 w-full border-t border-slate-200/80 pt-4">
                  <span className="text-caption text-graphite">
                    Coordinated by Department of Computer Science and Engineering · CSE Cluster, RVITM
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
