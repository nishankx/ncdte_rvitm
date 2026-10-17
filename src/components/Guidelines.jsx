import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import Card from "./Card";
import { CONFIG } from "../config";

export default function Guidelines({ onOpenModal }) {
  const paperGuidelines = [
    "Papers must be original and unpublished, and not under consideration for publication elsewhere.",
    "Follow the prescribed conference paper template, available on the conference website.",
    "Similarity / AI plagiarism level of the paper must be below 15%.",
    "Authors of accepted papers must register using the designated registration link.",
  ];

  const importantNotes = [
    "Acceptance status will be communicated by email after the peer-review process.",
    "At least one author of each accepted paper or poster must register by paying the applicable fee on or before 25 November 2026.",
    "Accepted and presented papers will be published in relevant ISSN journals indexed in recognized databases.",
    "Selected papers, after extension to full-length versions, will be published in a Scopus-indexed book series.",
  ];

  const indexingPartners = [
    { name: "doi", label: "doi", img: "/images/logos/doi.png" },
    { name: "Google Scholar", label: "Google Scholar", img: "/images/logos/google-scholar.webp" },
    { name: "publons", label: "publons", img: "/images/logos/publons.webp" },
    { name: "CiteFactor", label: "CiteFactor", img: "/images/logos/citefactor.png" },
    { name: "Semantic Scholar", label: "Semantic Scholar", img: "/images/logos/semantic_scholar.png" },
    { name: "Academia.edu", label: "Academia.edu", img: "/images/logos/academia_edu.png" },
  ];

  return (
    <section
      id="guidelines"
      className="from-[#00545f]/8 to-[#ecffb6]/18 relative scroll-mt-20 overflow-hidden bg-gradient-to-br via-white/85 py-20 md:py-32"
    >
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="via-[#ecffb6]/26 pointer-events-none absolute -left-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[#00545f]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/16 via-[#ecffb6]/26 pointer-events-none absolute -right-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tl to-transparent blur-[140px]"
      />

      {/* Seamless Edge Fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-14 bg-gradient-to-b from-white/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-14 bg-gradient-to-t from-white/60 to-transparent"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={false}>Guidelines for Submission</SectionLabel>
          <SectionHeading>
            Guidelines for <em className="font-serif font-normal italic text-ink">Submission</em>
          </SectionHeading>

          {/* Guidelines Two-Column Card */}
          <Reveal delay={0.1} className="w-full">
            <Card onWhite={false} className="w-full !p-8 md:!p-12 lg:!p-14">
              <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Column 1: Paper Presentation */}
                <div className="flex flex-col items-start space-y-6 text-left">
                  <span className="block text-left text-eyebrow uppercase tracking-widest text-graphite">
                    Author Instructions
                  </span>
                  <h3 className="text-left font-serif text-[28px] italic leading-tight text-ink">
                    Paper presentation
                  </h3>

                  <ul className="w-full list-none space-y-3.5">
                    {paperGuidelines.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-left text-body text-ink/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] size-2 shrink-0 rounded-sm bg-[#00545f]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {CONFIG.PAPER_TEMPLATE_URL && CONFIG.PAPER_TEMPLATE_URL.trim() !== "" && (
                    <div className="pt-2">
                      <Button variant="primary" href={CONFIG.PAPER_TEMPLATE_URL} target="_blank">
                        Download Paper Template
                      </Button>
                    </div>
                  )}
                </div>

                {/* Column 2: Important notes */}
                <div className="flex flex-col items-start space-y-6 text-left">
                  <span className="block text-left text-eyebrow uppercase tracking-widest text-graphite">
                    Review & Publication Protocol
                  </span>
                  <h3 className="text-left font-serif text-[28px] italic leading-tight text-ink">
                    Important notes
                  </h3>

                  <ul className="w-full list-none space-y-3.5">
                    {importantNotes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-left text-body text-ink/85"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] size-2 shrink-0 rounded-sm bg-[#00545f]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Publication & Indexing Section matching brochure layout */}
              <div className="mt-14 border-t border-slate-200/80 pt-10 text-left">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                  {/* Left: ISSN Journals */}
                  <div className="lg:col-span-8">
                    <p className="text-small font-medium text-ink/90">
                      Accepted and presented papers will be published in relevant ISSN journals indexed in:
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3.5">
                      {indexingPartners.map((item) => (
                        <div
                          key={item.name}
                          className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-[#EBE2CE] bg-[#F4F0E5]/90 px-3.5 py-1.5 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9EB2AE] hover:bg-white"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="h-7 w-auto max-w-[110px] object-contain mix-blend-multiply"
                            loading="lazy"
                          />
                          <span className="text-caption font-semibold text-[#0F2F31]">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Scopus-indexed book series */}
                  <div className="lg:col-span-4 lg:border-l lg:border-[#EBE2CE] lg:pl-8">
                    <p className="text-small font-medium text-[#0F2F31]/90">
                      Selected papers, after extension to full-length versions, will be published in a Scopus-indexed book series:
                    </p>
                    <div className="mt-5 inline-flex h-12 items-center gap-3 rounded-xl border border-[#E9AA3D]/50 bg-[#EBE2CE]/50 px-4 py-2 shadow-soft backdrop-blur-sm transition-all hover:bg-white/90">
                      <img
                        src="/images/logos/elsevier_scopus.jpg"
                        alt="Elsevier Scopus"
                        className="h-8 w-auto max-w-[140px] object-contain mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row: Centered */}
              <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-slate-200/80 pt-8 text-center sm:flex-row sm:gap-6">
                <span className="text-small text-graphite">
                  Registration deadline for accepted papers or posters: 25 November 2026.
                </span>
                <Button
                  variant="primary"
                  href={CONFIG.REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit your paper →
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
