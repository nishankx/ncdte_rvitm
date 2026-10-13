import React from 'react';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Card from './Card';
import Glow from './Glow';
import { WHY_PARTICIPATE_DATA } from '../data/why';

function CleanLineIcon({ type }) {
  const iconClass = "w-5 h-5 text-ink stroke-[1.5]";
  switch (type) {
    case "presentation":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 3h20" />
          <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
          <path d="m7 21 5-5 5 5" />
        </svg>
      );
    case "users":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "network":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
  }
}

export default function WhyParticipate() {
  return (
    <section id="why" className="py-20 md:py-32 bg-white scroll-mt-20 relative overflow-hidden">
      <Container className="relative">
        <SectionLabel onWhite={true}>Why Participate?</SectionLabel>
        <SectionHeading>
          Why <em className="font-serif italic font-normal text-ink">Participate?</em>
        </SectionHeading>

        {/* 4 Cards Grid with Glow behind middle cards */}
        <div className="relative">
          {/* Centered Glow behind middle cards */}
          <Glow className="left-1/4 right-1/4 top-1/4 bottom-1/4 w-96 h-96 mx-auto pointer-events-none" color="aurora" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr items-stretch relative z-10">
            {WHY_PARTICIPATE_DATA.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08} className="h-full">
                <Card onWhite={true} className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <CleanLineIcon type={item.icon} />
                    </div>

                    <h3 className="font-sans font-semibold text-[18px] text-ink leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-small text-graphite leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6">
                    <span className="text-caption font-semibold text-ink group-hover:text-aurora-azure transition-colors">
                      Learn more →
                    </span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
