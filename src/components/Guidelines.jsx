import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import Card from "./Card";
import PresentationFormats from "./PresentationFormats";
import { CONFIG } from "../config";

export default function Guidelines({ onOpenModal }) {
  const paperGuidelines = [
    "Submitted papers must be original and unpublished and should not be under consideration for publication elsewhere.",
    "Authors are requested to follow the prescribed conference paper template, available on the conference website.",
    "The similarity/plagiarism level of the submitted paper should be below 15%.",
    "Authors of accepted papers must complete the registration process using the designated registration link.",
  ];

  const importantNotes = [
    "The acceptance status of submitted papers will be communicated to the authors via email following the peer-review process.",
    "At least one author of each accepted paper or poster must complete registration by paying the applicable registration fee on or before November 20, 2026.",
    "Selected papers will be published in relevant ISSN Journal.",
  ];

  return (
    <section id="guidelines" className="scroll-mt-20 bg-mist py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={false}>Guidelines for Submission</SectionLabel>
          <SectionHeading>
            Submission <em className="font-serif font-normal italic text-ink">Guidelines</em>
          </SectionHeading>

          {/* Presentation Formats */}
          <Reveal delay={0.1} className="w-full">
            <PresentationFormats />
          </Reveal>

          {/* Guidelines Two-Column Card */}
          <Reveal delay={0.2} className="w-full">
            <Card onWhite={false} className="w-full !p-10 md:!p-14">
              <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Column 1: Paper Presentation */}
                <div className="flex flex-col items-start space-y-6 text-left">
                  <span className="block text-left text-eyebrow uppercase tracking-widest text-graphite">
                    Author Protocol
                  </span>
                  <h3 className="text-left font-serif text-[28px] italic leading-tight text-ink">
                    Paper Presentation
                  </h3>

                  <ul className="w-full list-none">
                    {paperGuidelines.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-left text-body text-ink/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet"
                        />
                        <span className="text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {CONFIG.PAPER_TEMPLATE_URL && CONFIG.PAPER_TEMPLATE_URL.trim() !== "" && (
                    <div className="pt-4">
                      <Button variant="primary" href={CONFIG.PAPER_TEMPLATE_URL} target="_blank">
                        Download Paper Template
                      </Button>
                    </div>
                  )}
                </div>

                {/* Column 2: Important Note */}
                <div className="flex flex-col items-start space-y-6 text-left">
                  <span className="block text-left text-eyebrow uppercase tracking-widest text-graphite">
                    Review & Publication
                  </span>
                  <h3 className="text-left font-serif text-[28px] italic leading-tight text-ink">
                    Important Note
                  </h3>

                  <ul className="w-full list-none">
                    {importantNotes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-left text-body text-ink/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet"
                        />
                        <span className="text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA Row: Centered */}
              <div className="mt-14 flex flex-col items-center justify-center gap-4 pt-8 text-center sm:flex-row sm:gap-6">
                <span className="text-small text-graphite">
                  Plagiarism level must be strictly under 15% before final paper upload.
                </span>
                <Button variant="primary" onClick={() => onOpenModal("submission")}>
                  SUBMIT YOUR PAPERS HERE
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
