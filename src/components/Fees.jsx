import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import Card from "./Card";
import DarkPatternBackground from "./DarkPatternBackground";
import { FEES_DATA } from "../data/fees";
import { CONFIG } from "../config";

export default function Fees({ onOpenModal }) {
  const formHref =
    CONFIG.REGISTRATION_FORM_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLSdNOU6DmwyIOC94b-UIRu2Kw4BGqFOmzzVkcpz6GPXwHmL03w/viewform?usp=send_form";

  return (
    <section
      id="registration"
      className="relative scroll-mt-20 overflow-hidden bg-[#0F2F31] py-12 text-white sm:py-16 md:py-20"
    >
      {/* Subtle Dotted Matrix & Concentric Circles Pattern */}
      <DarkPatternBackground circlePosition="both" />
      {/* Top & Bottom Ambient Border Accent Lines matching Navbar/Footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />

      {/* Dispersed Ambient Tech Glows from brochure palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-l from-[#00545f]/40 via-[#007a87]/20 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tr from-[#d6fb00]/16 via-[#ecffb6]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#1B393A]/50 to-transparent blur-[140px]"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onDark>Registration Fee</SectionLabel>
          <SectionHeading className="!text-white">
            Registration <span className="text-aurora">Fee</span>
          </SectionHeading>

          {/* Bold Announcement Notice with Aggressive Flicker */}
          <Reveal delay={0.05} className="mb-8 sm:mb-10 w-full max-w-2xl">
            <div className="flex items-center justify-center gap-3.5 rounded-2xl border-2 border-[#d6fb00] bg-gradient-to-r from-[#00545f]/80 via-[#142A2C] to-[#00545f]/80 px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md animate-flicker">
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d6fb00] opacity-90" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#d6fb00] shadow-[0_0_14px_#d6fb00]" />
              </span>
              <p className="font-sans text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-white">
                <span className="text-[#d6fb00] font-black uppercase tracking-wider underline decoration-[#d6fb00] decoration-2 underline-offset-4 mr-1.5">
                  Important Notice:
                </span>{" "}
                Registrations will commence after paper acceptance.
              </p>
            </div>
          </Reveal>

          {/* Single centered axis: Price block on top, Card beneath */}
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-10 text-center">
            {/* Top Block: Giant Fee Numbers & Details matching brochure banner */}
            <Reveal className="w-full space-y-5">
              <span className="block text-eyebrow uppercase tracking-widest text-white/50">
                Conference Registration
              </span>

              {/* Giant ₹1,300 in Satoshi 700 + text-aurora */}
              <div className="text-aurora mt-2 select-none font-sans text-[clamp(4.5rem,12vw,9.5rem)] font-bold leading-none tracking-tighter drop-shadow-[0_4px_24px_rgba(214,251,0,0.18)]">
                ₹1,300
              </div>

              {/* Category */}
              <h3 className="mt-3 font-serif text-[26px] italic leading-tight text-white sm:text-[30px]">
                {FEES_DATA.main.category}
              </h3>

              {/* Extra Team Members */}
              <div className="inline-flex rounded-full border border-[#007a87]/50 bg-[#00545f]/40 px-5 py-2 font-sans text-base font-semibold text-[#d6fb00] shadow-sm sm:text-lg">
                {FEES_DATA.extraMembersNote}
              </div>

              {/* Kit Note & Deadline Note */}
              <div className="mx-auto max-w-[54ch] space-y-2 pt-4 text-small text-[#9EB2AE] text-justify">
                <p className="font-medium text-white/95 text-justify">{FEES_DATA.note}</p>
                <p className="font-medium text-[#d6fb00] text-justify">{FEES_DATA.deadlineNotice}</p>
                <p className="text-caption text-[#9EB2AE] pt-1 text-justify">
                  Complete your registration via Google Form. Payment procedures will be sent directly to your registered email address following review.
                </p>
              </div>
            </Reveal>

            {/* Inclusions Card Beneath */}
            <Reveal delay={0.15} className="w-full">
              <Card
                onDark
                className="flex w-full flex-col items-center space-y-8 !p-5 sm:!p-8 text-center sm:!p-10"
              >
                <div className="w-full text-left">
                  <span className="mb-2 block text-left text-eyebrow uppercase tracking-widest text-white/50">
                    Fee Inclusions
                  </span>
                  <h4 className="text-left font-serif text-2xl italic text-white">
                    Registration details & publication eligibility
                  </h4>
                </div>

                <ul className="w-full list-none space-y-3">
                  {FEES_DATA.inclusions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-left text-small leading-[1.7] text-white/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet shadow-[0_0_8px_#d6fb00]"
                      />
                      <span className="text-justify">{item.text}</span>
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
