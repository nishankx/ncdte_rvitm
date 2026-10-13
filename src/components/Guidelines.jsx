import React from 'react';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Button from './Button';
import Card from './Card';
import PresentationFormats from './PresentationFormats';
import { CONFIG } from '../config';

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
    <section id="guidelines" className="py-20 md:py-32 bg-mist scroll-mt-20">
      <Container>
        <SectionLabel onWhite={false}>Guidelines for Submission</SectionLabel>
        <SectionHeading>
          Submission <em className="font-serif italic font-normal text-ink">Guidelines</em>
        </SectionHeading>

        {/* Presentation Formats */}
        <Reveal delay={0.1}>
          <PresentationFormats />
        </Reveal>

        {/* Guidelines Two-Column Card */}
        <Reveal delay={0.2}>
          <Card onWhite={false} className="!p-10 md:!p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Column 1: Paper Presentation */}
              <div className="space-y-6">
                <span className="text-eyebrow uppercase text-graphite tracking-widest block">
                  Author Protocol
                </span>
                <h3 className="font-serif italic text-[28px] text-ink leading-tight">
                  Paper Presentation
                </h3>
                <ul className="space-y-4">
                  {paperGuidelines.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-body text-ink/85">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet mt-2.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {CONFIG.PAPER_TEMPLATE_URL && CONFIG.PAPER_TEMPLATE_URL.trim() !== "" && (
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      href={CONFIG.PAPER_TEMPLATE_URL}
                      target="_blank"
                    >
                      Download Paper Template
                    </Button>
                  </div>
                )}
              </div>

              {/* Column 2: Important Note */}
              <div className="space-y-6">
                <span className="text-eyebrow uppercase text-graphite tracking-widest block">
                  Review & Publication
                </span>
                <h3 className="font-serif italic text-[28px] text-ink leading-tight">
                  Important Note
                </h3>
                <ul className="space-y-4">
                  {importantNotes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-body text-ink/85">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet mt-2.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA Row: no borders, generous space */}
            <div className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <span className="text-small text-graphite">
                Plagiarism level must be strictly under 15% before final paper upload.
              </span>
              <Button
                variant="primary"
                onClick={() => onOpenModal("submission")}
              >
                SUBMIT YOUR PAPERS HERE
              </Button>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
