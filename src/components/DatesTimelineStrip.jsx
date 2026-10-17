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
        {/* Timeline wrapper with horizontal line connecting all dots */}
        <div className="relative mx-auto max-w-4xl px-2 sm:px-4">
          {/* Dots and Labels Grid - Always 4 columns so they stay on a single horizontal line */}
          <div className="grid grid-cols-4 gap-x-1 sm:gap-x-4">
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
                    className={`mb-1.5 inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold tracking-tight transition-transform duration-200 group-hover:-translate-y-0.5 sm:mb-2 sm:px-2.5 sm:text-[11px] ${
                      isSubmission
                        ? "bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/30"
                        : isConference
                        ? "bg-[#00545f] text-[#d6fb00] shadow-sm"
                        : "bg-[#00545f]/8 text-[#00545f]"
                    }`}
                  >
                    {item.dateDisplay.replace(" 2026", "")}
                  </span>

                  {/* Dot with continuous connecting horizontal line segments */}
                  <div className="relative my-1 flex h-6 w-full items-center justify-center">
                    {/* Connecting line to the left (for all except the first dot) */}
                    {index > 0 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 right-1/2 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#00545f]/30 via-[#007a87]/50 to-[#00545f]/40"
                      />
                    )}

                    {/* Connecting line to the right (for all except the last dot) */}
                    {index < dates.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#00545f]/40 via-[#007a87]/50 to-[#d6fb00]/70"
                      />
                    )}

                    {/* Pulsing ring for the submission deadline */}
                    {isSubmission && (
                      <span className="absolute z-10 inline-flex h-5 w-5 animate-ping rounded-full bg-rose-400 opacity-60" />
                    )}

                    {/* Outer Ring */}
                    <div
                      className={`relative z-20 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-125 sm:h-4 sm:w-4 ${
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
                  <p className="mt-1.5 text-[10px] font-semibold leading-tight text-ink group-hover:text-[#00545f] sm:mt-2 sm:text-[12px] md:text-[13px]">
                    {item.id === "notification" ? (
                      <>
                        <span className="block sm:hidden">Acceptance Notice</span>
                        <span className="hidden sm:inline">Notification of Acceptance</span>
                      </>
                    ) : item.id === "submission" ? (
                      <>
                        <span className="block sm:hidden">Submission Due</span>
                        <span className="hidden sm:inline">Submission Deadline</span>
                      </>
                    ) : (
                      item.title
                    )}
                  </p>

                  {/* Subtle Subtitle or Year */}
                  <span className="mt-0.5 text-[9px] font-medium text-graphite/80 sm:text-[10px]">
                    2026
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
