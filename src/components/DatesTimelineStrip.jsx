import React from "react";
import Container from "./Container";
import { IMPORTANT_DATES } from "../data/dates";

export default function DatesTimelineStrip() {
  const dates = IMPORTANT_DATES.filter((item) => item.visible !== false);

  return (
    <section
      aria-label="Conference Timeline Milestones"
      className="relative z-10 -mt-2 mb-2 w-full overflow-hidden py-6 sm:py-8"
    >
      <Container>
        {/* Timeline wrapper with horizontal scroll support on tiny screens */}
        <div className="relative mx-auto max-w-4xl px-4">
          {/* Continuous Horizontal Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-8 right-8 top-[38px] hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#00545f]/20 via-[#007a87]/40 via-[#d6fb00] to-[#00545f]/20 sm:block"
          />

          {/* Dots and Labels Grid */}
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
            {dates.map((item, index) => {
              const isSubmission = item.id === "submission";
              const isConference = item.highlight || item.id === "conference";

              return (
                <div
                  key={item.id || index}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Date badge on top */}
                  <span
                    className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-tight transition-transform duration-200 group-hover:-translate-y-0.5 ${
                      isSubmission
                        ? "bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/30"
                        : isConference
                        ? "bg-[#00545f] text-[#d6fb00] shadow-sm"
                        : "bg-[#00545f]/8 text-[#00545f]"
                    }`}
                  >
                    {item.dateDisplay.replace(" 2026", "")}
                  </span>

                  {/* Dot on the horizontal line */}
                  <div className="relative my-1 flex h-6 w-6 items-center justify-center">
                    {/* Pulsing ring for the submission deadline */}
                    {isSubmission && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60" />
                    )}

                    {/* Outer Ring */}
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                        isSubmission
                          ? "border-rose-500 bg-white shadow-sm shadow-rose-500/30"
                          : isConference
                          ? "border-[#00545f] bg-[#d6fb00] shadow-sm"
                          : "border-[#00545f] bg-white group-hover:border-[#007a87]"
                      }`}
                    >
                      {/* Inner Dot */}
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isSubmission
                            ? "bg-rose-500"
                            : isConference
                            ? "bg-[#00545f]"
                            : "bg-[#00545f]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Milestone Title */}
                  <p className="mt-2 text-[12px] font-semibold leading-tight text-ink group-hover:text-[#00545f] sm:text-[13px]">
                    {item.title}
                  </p>

                  {/* Subtle Subtitle or Year */}
                  <span className="mt-0.5 text-[10px] font-medium text-graphite/80">
                    {item.dateDisplay.includes("2026") ? "2026" : ""}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
