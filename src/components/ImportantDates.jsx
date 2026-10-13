import React, { useMemo } from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Card from "./Card";
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
    <section id="dates" className="scroll-mt-20 bg-white py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={true}>Schedule & Deadlines</SectionLabel>
          <SectionHeading>
            Important <em className="font-serif font-normal italic text-ink">Dates</em>
          </SectionHeading>

          {/* Structured Date List: single centered column with no side-by-side overlap */}
          <ol className="relative mx-auto flex w-full max-w-4xl flex-col">
            {datesWithStatus.map((item, idx) => {
              const isNext = item.status === "Next deadline";
              return (
                <Reveal key={item.id} delay={idx * 0.06}>
                  <li className="flex flex-col items-center gap-3 py-8 text-center md:py-10">
                    {/* 1. Date (giant, centered) */}
                    <div
                      className={`whitespace-normal break-words font-sans text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-none tracking-tighter sm:whitespace-nowrap ${
                        isNext ? "text-aurora" : "text-ink"
                      }`}
                    >
                      {item.dateDisplay}
                    </div>

                    {/* 2. Milestone (serif italic, centered) & Description */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] italic leading-tight text-ink">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mx-auto max-w-[44ch] text-small leading-relaxed text-graphite">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* 3. Status Badge (centered) */}
                    <div className="pt-1">
                      <span
                        className={`inline-block rounded-pill px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider ${
                          isNext ? "bg-ink text-white" : "bg-mist-50 text-graphite"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
