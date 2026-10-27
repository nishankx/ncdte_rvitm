import React, { useMemo } from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Card from "./Card";
import LightPatternBackground from "./LightPatternBackground";
import { IMPORTANT_DATES, CONTACT_DETAILS } from "../data/dates";
import { CONFIG } from "../config";

export default function ImportantDates() {
  const datesWithStatus = useMemo(() => {
    const now = new Date().getTime();
    let hasFoundNext = false;

    return IMPORTANT_DATES.filter((item) => item.visible !== false).map((item) => {
      const itemTime = new Date(item.isoDate).getTime();
      let status = "Upcoming";

      if (item.badgeOverride) {
        status = item.badgeOverride;
      } else if (now > itemTime) {
        status = "Closed";
      } else if (!hasFoundNext) {
        status = "Next deadline";
        hasFoundNext = true;
      } else {
        status = "Upcoming";
      }

      return {
        ...item,
        status,
      };
    });
  }, []);

  return (
    <section
      id="dates"
      className="from-[#d6fb00]/12 to-[#ecffb6]/18 relative scroll-mt-20 overflow-hidden bg-gradient-to-b via-white/85 py-12 sm:py-16 md:py-20"
    >
      {/* Subtle Precision Plus-Grid & Hexagonal Tech Lattice */}
      <LightPatternBackground accent="hex" accentPosition="right" />
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
          <SectionLabel onWhite={true}>Schedule & Deadlines</SectionLabel>
          <SectionHeading>
            Important Dates
          </SectionHeading>
        </div>

        {/* Structured Horizontal Timeline Rows */}
        <ol className="relative mx-auto mt-8 sm:mt-10 md:mt-12 w-full divide-y divide-[#00545f]/15">
          {datesWithStatus.map((item, idx) => {
            const isNext = item.status === "Next deadline";
            return (
              <Reveal key={item.id} delay={idx * 0.05}>
                <li className="group py-6 sm:py-8 lg:py-9 transition-colors duration-200 hover:bg-white/40 px-3 sm:px-5 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 sm:gap-4 lg:gap-6 w-full text-left">
                    {/* 1. Date: Large, bold & responsive */}
                    <div className="md:col-span-5 lg:col-span-4 flex items-center justify-between md:block">
                      <span
                        className={`font-sans text-4xl font-extrabold tracking-tight leading-none ${
                          isNext ? "text-aurora" : "text-ink"
                        }`}
                      >
                        {item.dateDisplay}
                      </span>
                      {/* Badge shown next to date on mobile screens */}
                      <span
                        className={`md:hidden inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                          isNext ? "bg-ink text-white shadow-sm" : "bg-white/90 text-graphite border border-ink/10"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* 2. Milestone Title: Serif italic */}
                    <div className="md:col-span-3 lg:col-span-3">
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.85rem] italic text-ink leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* 3. Description: Clean readable graphite copy */}
                    <div className="md:col-span-4 lg:col-span-3">
                      {item.description && (
                        <p className="text-xs sm:text-sm text-graphite leading-relaxed text-justify">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* 4. Status Badge on md+ */}
                    <div className="hidden md:flex md:col-span-12 lg:col-span-2 items-center md:justify-start lg:justify-end">
                      <span
                        className={`inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm ${
                          isNext ? "bg-ink text-white shadow-ink/20" : "bg-white/90 text-graphite border border-ink/10"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
