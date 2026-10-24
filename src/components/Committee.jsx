import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PersonCard from "./PersonCard";
import ContactDesk from "./ContactDesk";
import LightPatternBackground from "./LightPatternBackground";
import { COMMITTEE_GROUPS } from "../data/committee";

export default function Committee() {
  const tiers = [
    // Line 1 (4 members): Chief Patron (1) + Patrons (3)
    {
      id: "patrons-tier",
      groups: [
        COMMITTEE_GROUPS[0], // CHIEF PATRON (1)
        COMMITTEE_GROUPS[1], // PATRONS (3)
      ],
    },
    // Line 2 (4 members): General Chair (1) + General Co-Chair (1) + Program Chair (1) + Conference Chair (1)
    {
      id: "chairs-tier",
      groups: [
        COMMITTEE_GROUPS[2], // GENERAL CHAIR (1)
        COMMITTEE_GROUPS[3], // GENERAL CO-CHAIR (1)
        COMMITTEE_GROUPS[4], // PROGRAM CHAIR (1)
        COMMITTEE_GROUPS[5], // CONFERENCE CHAIR (1)
      ],
    },
    // Line 3 (8 members): Advisory Members (4) + Coordinators (4)
    {
      id: "advisory-coordinators-tier",
      groups: [
        COMMITTEE_GROUPS[6], // ADVISORY MEMBERS (4)
        COMMITTEE_GROUPS[7], // COORDINATORS (4)
      ],
    },
  ];

  return (
    <section
      id="committee"
      className="from-[#ecffb6]/18 to-[#00545f]/8 relative scroll-mt-20 overflow-hidden bg-gradient-to-tr via-white/85 py-12 sm:py-16 md:py-20"
    >
      {/* Subtle Precision Plus-Grid & Diamond Drafting Lattice */}
      <LightPatternBackground accent="diamond" accentPosition="left" />
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="from-[#ecffb6]/28 pointer-events-none absolute -left-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-br via-[#00545f]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/16 via-[#ecffb6]/26 pointer-events-none absolute -right-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tl to-transparent blur-[140px]"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={true}>Organizing Leadership</SectionLabel>
          <SectionHeading>
            Our Committee
          </SectionHeading>

          {/* Committee Tiers with Y-Bars */}
          <div className="w-full space-y-10 sm:space-y-12">
            {tiers.map((tier, tIdx) => (
              <Reveal key={tier.id} delay={tIdx * 0.08} className="w-full">
                <div className="flex flex-wrap items-stretch justify-center gap-y-10 w-full">
                  {tier.groups.map((group, gIdx) => (
                    <React.Fragment key={group.roleGroup}>
                      {/* Sub-section Committee */}
                      <div className="flex flex-col items-center text-center px-3 sm:px-5 lg:px-6">
                        {/* Sub-section Heading in Serif Italic */}
                        <h3 className="mb-4 sm:mb-6 font-serif text-lg sm:text-xl lg:text-[1.5rem] italic text-ink tracking-tight whitespace-nowrap">
                          {group.roleGroup}
                        </h3>

                        {/* Members with minimal compact photos */}
                        <div className="flex items-start justify-center gap-2.5 sm:gap-3.5 lg:gap-4">
                          {group.members.map((member, mIdx) => (
                            <PersonCard
                              key={mIdx}
                              member={member}
                              isChief={group.roleGroup === "CHIEF PATRON"}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Y-bar (Vertical Divider between Sub-sections) */}
                      {gIdx < tier.groups.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-[#00545f]/30 to-transparent mx-2 my-2 shrink-0"
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Horizontal divider between tiers */}
                {tIdx < tiers.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mx-auto mt-10 sm:mt-12 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#00545f]/20 to-transparent"
                  />
                )}
              </Reveal>
            ))}
          </div>

          {/* Conference Helpdesk dark card centered below groups */}
          <Reveal delay={0.2} className="w-full">
            <ContactDesk />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
