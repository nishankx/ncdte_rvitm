import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Card from "./Card";
import Glow from "./Glow";
import { WHY_PARTICIPATE_DATA } from "../data/why";

function CleanLineIcon({ type }) {
  const iconClass = "w-5 h-5 text-ink stroke-[1.5]";
  switch (type) {
    case "presentation":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3h20" />
          <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
          <path d="m7 21 5-5 5 5" />
        </svg>
      );
    case "users":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "network":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M12 2v7" />
          <path d="M12 15v7" />
          <path d="M2 12h7" />
          <path d="M15 12h7" />
        </svg>
      );
    case "sparkles":
    default:
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
  }
}

export default function WhyParticipate() {
  return (
    <section
      id="why"
      className="from-[#ecffb6]/18 to-[#d6fb00]/12 relative scroll-mt-20 overflow-hidden bg-gradient-to-bl via-white/85 py-20 md:py-32"
    >
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[#00545f]/15 via-[#ecffb6]/25 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/16 pointer-events-none absolute -right-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tl via-[#ecffb6]/25 to-transparent blur-[140px]"
      />


      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={true}>Why Participate?</SectionLabel>
          <SectionHeading>
            Why <em className="font-serif font-normal italic text-ink">Participate?</em>
          </SectionHeading>

          {/* 4 Cards Grid with Glow behind middle cards */}
          <div className="relative w-full">
            <Glow
              className="pointer-events-none absolute inset-0 m-auto h-96 w-96"
              color="aurora"
            />

            <div className="relative z-10 grid w-full auto-rows-fr grid-cols-1 items-stretch justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_PARTICIPATE_DATA.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.08} className="h-full w-full">
                  <Card
                    onWhite={true}
                    className="flex h-full w-full flex-col items-start justify-between text-left"
                  >
                    <div className="flex w-full flex-col items-start space-y-4 text-left">
                      <div className="flex h-10 w-10 items-center justify-center">
                        <CleanLineIcon type={item.icon} />
                      </div>

                      <h3 className="text-left font-sans text-[18px] font-semibold leading-snug text-ink">
                        {item.title}
                      </h3>

                      <p className="w-full text-small leading-relaxed text-graphite">{item.desc}</p>
                    </div>

                    <div className="mt-6 flex justify-start pt-6">
                      <span className="text-caption font-semibold text-ink transition-colors group-hover:text-aurora-azure">
                        Learn more →
                      </span>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
