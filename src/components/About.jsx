import React from 'react';
import Container from './Container';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import Button from './Button';
import { CONFIG } from '../config';

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
    <section id="about" className="py-20 md:py-32 bg-mist scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Label & Heading */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex justify-start mb-5">
                <span className="inline-flex items-center text-eyebrow uppercase px-3 py-2 rounded-pill tracking-widest bg-white text-ink shadow-pill">
                  About NCDTE-2026
                </span>
              </div>
              <h2 className="font-sans text-h2 text-ink leading-tight tracking-tight">
                About <em className="font-serif italic font-normal text-aurora">NCDTE-2026</em>
              </h2>
            </Reveal>

            {/* Brochure Button */}
            {CONFIG.BROCHURE_URL && CONFIG.BROCHURE_URL.trim() !== "" && (
              <Reveal delay={0.2} className="mt-8">
                <Button
                  variant="primary"
                  href={CONFIG.BROCHURE_URL}
                  target="_blank"
                >
                  Download Conference Brochure
                </Button>
              </Reveal>
            )}
          </div>

          {/* Right Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.1}>
              <div className="text-lead text-ink/85 max-w-[62ch] space-y-6 font-normal">
                <p>
                  The National Conference on Digital Technology and Engineering (NCDTE-2026) serves as a platform for researchers, academicians, industry professionals, and students to exchange knowledge, share innovative ideas, and discuss emerging developments in digital technology and engineering.
                </p>
                <p>
                  The conference provides an avenue for presenting cutting-edge research, technological innovations, and practical solutions addressing contemporary challenges. NCDTE-2026 aims to foster interdisciplinary collaboration, encourage meaningful academic and industry interactions, and promote research-driven advancements in technology and engineering.
                </p>
              </div>
            </Reveal>

            {/* Three Plain Highlight Items with Aurora Gradient Dots, No borders */}
            <Reveal delay={0.25}>
              <div className="pt-6 space-y-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet mt-2 shrink-0"
                    />
                    <div>
                      <h4 className="font-sans font-semibold text-[17px] text-ink">
                        {item.title}
                      </h4>
                      <p className="text-small text-graphite mt-1 leading-relaxed max-w-[56ch]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
