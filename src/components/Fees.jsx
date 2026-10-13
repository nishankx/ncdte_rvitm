import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import Card from "./Card";
import { FEES_DATA } from "../data/fees";

export default function Fees({ onOpenModal }) {
  return (
    <section
      id="registration"
      className="from-[#00545f]/8 to-[#d6fb00]/12 relative scroll-mt-20 overflow-hidden bg-gradient-to-br via-white/85 py-20 md:py-32"
    >
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="via-[#ecffb6]/26 pointer-events-none absolute -right-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-l from-[#00545f]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/16 via-[#ecffb6]/26 pointer-events-none absolute -left-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tr to-transparent blur-[140px]"
      />

      {/* Decorative Geometric Ring Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-1/3 -z-0 h-80 w-80 rounded-full border border-dashed border-[#00545f]/10"
      />

      {/* Seamless Edge Fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-14 bg-gradient-to-b from-white/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-14 bg-gradient-to-t from-white/60 to-transparent"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={false}>Registration Fee</SectionLabel>
          <SectionHeading>
            Registration <em className="font-serif font-normal italic text-ink">Fee</em>
          </SectionHeading>

          {/* Single centered axis: Price block on top, Card beneath, max-w-3xl mx-auto */}
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-12 text-center">
            {/* Top Block: Giant Fee Numbers & Details */}
            <Reveal className="w-full space-y-6">
              <span className="block text-eyebrow uppercase tracking-widest text-graphite">
                Primary Participation Fee
              </span>

              {/* Giant Rs. 1300 in Satoshi 700 + text-aurora */}
              <div className="text-aurora mt-2 select-none font-sans text-[clamp(5rem,13vw,11rem)] font-bold leading-none tracking-tighter">
                Rs. 1300
              </div>

              {/* Label in Serif Italic 28px */}
              <h3 className="mt-3 font-serif text-[28px] italic leading-tight text-ink">
                {FEES_DATA.main.category}
              </h3>

              {/* Extra Team Members */}
              <p className="pt-2 font-sans text-xl font-medium text-ink">
                {FEES_DATA.extraMembersNote}
              </p>

              {/* Kit Note & Deadline Note */}
              <div className="mx-auto max-w-[54ch] space-y-2 pt-6 text-small text-graphite">
                <p>{FEES_DATA.note}</p>
                <p className="font-medium text-ink">{FEES_DATA.deadlineNotice}</p>
              </div>
            </Reveal>

            {/* Inclusions Card Beneath */}
            <Reveal delay={0.15} className="w-full">
              <Card
                onWhite={false}
                className="flex w-full flex-col items-center space-y-8 !p-8 text-center sm:!p-10"
              >
                <div className="w-full text-left">
                  <span className="mb-2 block text-left text-eyebrow uppercase tracking-widest text-graphite">
                    Delegate Inclusions
                  </span>
                  <h4 className="text-left font-serif text-2xl italic text-ink">
                    What the registration includes
                  </h4>
                </div>

                <ul className="w-full list-none space-y-3">
                  {FEES_DATA.inclusions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-left text-small leading-[1.7] text-ink/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet"
                      />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex w-full justify-center pt-4">
                  <Button
                    variant="primary"
                    onClick={() => onOpenModal("registration")}
                    className="w-full max-w-xs text-sm font-medium"
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
