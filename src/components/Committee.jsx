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
  return (
    <section
      id="committee"
      className="from-[#ecffb6]/18 to-[#00545f]/8 relative scroll-mt-20 overflow-hidden bg-gradient-to-tr via-white/85 py-20 md:py-32"
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
            Our <em className="font-serif font-normal italic text-ink">Committee</em>
          </SectionHeading>

          <div className="w-full space-y-16 md:space-y-24">
            {COMMITTEE_GROUPS.map((group, groupIdx) => {
              const isChief = group.roleGroup === "CHIEF PATRON";

              return (
                <Reveal key={groupIdx} delay={groupIdx * 0.05}>
                  <div className="space-y-10 text-center">
                    {/* Group Heading in Serif Italic text-h3 centered */}
                    <h3 className="font-serif text-h3 italic text-ink">{group.roleGroup}</h3>

                    {/* Centered flex-wrap grid: last rows are centered */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-14">
                      {group.members.map((member, mIdx) => (
                        <div
                          key={mIdx}
                          className={
                            isChief
                              ? "w-full max-w-[320px]"
                              : "w-[calc(50%-1rem)] md:w-[calc(33.333%-1.4rem)] xl:w-[calc(25%-1.5rem)]"
                          }
                        >
                          <PersonCard member={member} isChief={isChief} />
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
