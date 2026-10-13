import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { CONFIG } from "../config";

export default function About() {
  const highlights = [
    {
      title: "Exchange Knowledge",
      desc: "Share innovative ideas and emerging developments across digital technology and engineering domains.",
    },
    {
      title: "Interdisciplinary Collaboration",
      desc: "Foster cross-domain partnerships to address modern engineering and technological challenges.",
    },
    {
      title: "Academia-Industry Interaction",
      desc: "Encourage meaningful dialogue between researchers, faculty, industry leaders, and students.",
    },
  ];

  return (
    <section
      id="about"
      className="from-[#ecffb6]/18 to-[#00545f]/8 relative scroll-mt-20 overflow-hidden bg-gradient-to-br via-white/85 py-20 md:py-32"
    >
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="from-[#00545f]/14 via-[#ecffb6]/28 pointer-events-none absolute -left-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-br to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#d6fb00]/16 via-[#ecffb6]/28 pointer-events-none absolute -right-28 bottom-12 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tl to-transparent blur-[140px]"
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
        <div className="flex flex-col items-center">
          <SectionLabel onWhite={false}>About NCDTE-2026</SectionLabel>
          <SectionHeading>
            About <em className="text-aurora font-serif font-normal italic">NCDTE-2026</em>
          </SectionHeading>

          {/* Justified Editorial Paragraphs */}
          <Reveal delay={0.1} className="mx-auto w-full max-w-[62ch]">
            <div className="space-y-6 text-center text-lead font-normal leading-relaxed text-ink/85">
              <p>
                The National Conference on Digital Technology and Engineering (NCDTE-2026) serves as
                a platform for researchers, academicians, industry professionals, and students to
                exchange knowledge, share innovative ideas, and discuss emerging developments in
                digital technology and engineering.
              </p>
              <p>
                The conference provides an avenue for presenting cutting-edge research,
                technological innovations, and practical solutions addressing contemporary
                challenges. NCDTE-2026 aims to foster interdisciplinary collaboration, encourage
                meaningful academic and industry interactions, and promote research-driven
                advancements in technology and engineering.
              </p>
            </div>
          </Reveal>

          {/* Three Highlight Items: subheadings to the left, content justified */}
          <Reveal delay={0.2} className="mt-14 w-full">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start space-y-2.5 text-left">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet"
                    />
                    <h4 className="text-left font-sans text-[17px] font-semibold text-ink">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-small leading-relaxed text-graphite">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Brochure Button */}
          {CONFIG.BROCHURE_URL && CONFIG.BROCHURE_URL.trim() !== "" && (
            <Reveal delay={0.25} className="mt-12 flex justify-center">
              <Button variant="primary" href={CONFIG.BROCHURE_URL} target="_blank">
                Download Conference Brochure
              </Button>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
