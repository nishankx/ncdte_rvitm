import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import Card from "./Card";
import { FEES_DATA } from "../data/fees";
import { CONFIG } from "../config";

export default function Fees({ onOpenModal }) {
  const formHref =
    CONFIG.REGISTRATION_FORM_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLSfVttXz-rb-C6C21Xz5obDIeep6rOzu0NIhewn3Eus3gDnUCQ/viewform?usp=publish-editor";

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


      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={false}>Registration Fee</SectionLabel>
          <SectionHeading>
            Registration <em className="font-serif font-normal italic text-ink">Fee</em>
          </SectionHeading>

          {/* Single centered axis: Price block on top, Card beneath */}
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-10 text-center">
            {/* Top Block: Giant Fee Numbers & Details matching brochure banner */}
            <Reveal className="w-full space-y-5">
              <span className="block text-eyebrow uppercase tracking-widest text-graphite">
                Conference Registration
              </span>

              {/* Giant ₹1,300 in Satoshi 700 + text-aurora */}
              <div className="text-aurora mt-2 select-none font-sans text-[clamp(4.5rem,12vw,9.5rem)] font-bold leading-none tracking-tighter">
                ₹1,300
              </div>

              {/* Category */}
              <h3 className="mt-3 font-serif text-[26px] italic leading-tight text-ink sm:text-[30px]">
                {FEES_DATA.main.category}
              </h3>

              {/* Extra Team Members */}
              <div className="inline-flex rounded-full bg-[#00545f]/10 px-5 py-2 font-sans text-base font-semibold text-[#00545f] sm:text-lg">
                {FEES_DATA.extraMembersNote}
              </div>

              {/* Kit Note & Deadline Note */}
              <div className="mx-auto max-w-[54ch] space-y-2 pt-4 text-small text-graphite">
                <p className="font-medium text-ink/90">{FEES_DATA.note}</p>
                <p className="font-medium text-[#00545f]">{FEES_DATA.deadlineNotice}</p>
                <p className="text-caption text-graphite pt-1">
                  Complete your registration via Google Form. Payment procedures will be sent directly to your registered email address following review.
                </p>
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
                    Fee Inclusions
                  </span>
                  <h4 className="text-left font-serif text-2xl italic text-ink">
                    Registration details & publication eligibility
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
                    href={formHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs text-sm font-medium"
                  >
                    Register via Google Form ↗
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
