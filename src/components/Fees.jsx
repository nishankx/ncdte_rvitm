import React from 'react';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Button from './Button';
import Card from './Card';
import { FEES_DATA } from '../data/fees';

export default function Fees({ onOpenModal }) {
  return (
    <section id="registration" className="py-20 md:py-32 bg-mist scroll-mt-20">
      <Container>
        <SectionLabel onWhite={false}>Registration Fee</SectionLabel>
        <SectionHeading>
          Registration <em className="font-serif italic font-normal text-ink">Fee</em>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column (7 cols): Giant Fee Numbers & Details */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="text-eyebrow uppercase text-graphite tracking-widest block">
                Primary Participation Fee
              </span>

              {/* Giant Rs. 1300 in Satoshi 700 + text-aurora */}
              <div className="font-sans font-bold text-[clamp(5rem,13vw,11rem)] leading-none tracking-tighter text-aurora select-none mt-2">
                Rs. 1300
              </div>

              {/* Label in Serif Italic 28px */}
              <h3 className="font-serif italic text-[28px] text-ink leading-tight mt-3">
                {FEES_DATA.main.category}
              </h3>

              {/* Extra Team Members */}
              <p className="font-sans text-xl font-medium text-ink pt-2">
                {FEES_DATA.extraMembersNote}
              </p>

              {/* Kit Note & Deadline Note: no borders */}
              <div className="space-y-2 pt-6 text-small text-graphite max-w-[54ch]">
                <p>{FEES_DATA.note}</p>
                <p className="text-small font-medium text-ink">
                  {FEES_DATA.deadlineNotice}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 cols): "What the registration includes" Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <Card onWhite={false} className="!p-8 sm:!p-10 space-y-8">
                <div>
                  <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-2">
                    Delegate Inclusions
                  </span>
                  <h4 className="font-serif italic text-2xl text-ink">
                    What the registration includes
                  </h4>
                </div>

                <ul className="space-y-4">
                  {FEES_DATA.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-small leading-[1.7] text-ink/80">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet mt-2.5 shrink-0"
                      />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    onClick={() => onOpenModal("registration")}
                    className="w-full text-sm font-medium"
                  >
                    Register Now
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
