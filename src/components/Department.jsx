import React from 'react';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Card from './Card';
import { department } from '../data/departments';

export default function Department() {
  return (
    <section id="department" className="py-20 md:py-32 bg-mist scroll-mt-20">
      <Container>
        <SectionLabel onWhite={false}>Department</SectionLabel>
        <SectionHeading>
          Computer Science & <em className="font-serif italic font-normal text-ink">Engineering</em>
        </SectionHeading>

        {/* Centered two-column grid of equal-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: HoD, description, focus areas */}
          <Reveal className="h-full">
            <Card onWhite={false} className="h-full flex flex-col justify-between">
              <div>
                <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-2">
                  Head of Department
                </span>
                <h3 className="font-serif italic text-[32px] text-ink leading-tight mb-6">
                  {department.hod}
                </h3>
                <p className="text-body text-ink/85 leading-relaxed mb-8">
                  {department.desc}
                </p>
              </div>

              <div>
                <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-3">
                  Focus Areas
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {department.focus.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex px-3.5 py-2 rounded-md bg-mist-50 text-[15px] font-semibold text-graphite select-none"
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
              <Card onWhite={false} className="h-full">
                <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-2">
                  Strategic Direction
                </span>
                <h4 className="font-serif italic text-2xl text-ink mb-3">
                  Department Vision
                </h4>
                <p className="text-body text-ink/85 leading-relaxed">
                  {department.vision}
                </p>
              </Card>
            </Reveal>

            {/* Mission Card */}
            <Reveal delay={0.15} className="flex-1">
              <Card onWhite={false} className="h-full">
                <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-2">
                  Commitment to Excellence
                </span>
                <h4 className="font-serif italic text-2xl text-ink mb-3">
                  Department Mission
                </h4>
                <ul className="space-y-3">
                  {department.mission.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body text-ink/85">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet mt-2.5 shrink-0"
                      />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
