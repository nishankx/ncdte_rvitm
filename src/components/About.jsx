import React from "react";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import DarkPatternBackground from "./DarkPatternBackground";
import { CONFIG } from "../config";

export default function About() {
  const highlights = [
    {
      title: "Exchange Knowledge & Ideas",
      desc: "Brings together researchers, academicians, industry professionals and students to exchange knowledge, share ideas and explore emerging developments in digital technology and engineering.",
    },
    {
      title: "Cutting-Edge Innovations",
      desc: "Showcases cutting-edge research, innovations and practical solutions to contemporary challenges in engineering and technology.",
    },
    {
      title: "Meaningful Collaboration",
      desc: "Fosters interdisciplinary collaboration and meaningful academia-industry interaction across modern computing disciplines.",
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#0F2F31] py-20 text-white md:py-32"
    >
      {/* Subtle Dotted Matrix & Concentric Circles Pattern */}
      <DarkPatternBackground circlePosition="both" />
      {/* Top & Bottom Ambient Border Accent Lines matching Navbar/Footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />

      {/* Dispersed Ambient Tech Glows from brochure palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[#00545f]/40 via-[#007a87]/20 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-12 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tl from-[#d6fb00]/16 via-[#ecffb6]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 -z-0 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#E9AA3D]/10 via-[#1B393A]/50 to-transparent blur-[150px]"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          <SectionLabel onDark>About NCDTE-2026</SectionLabel>
          <SectionHeading className="!text-white">
            About <em className="text-aurora font-serif font-normal italic">NCDTE-2026</em>
          </SectionHeading>

          {/* Exact text from brochure */}
          <Reveal delay={0.1} className="mx-auto w-full max-w-[68ch]">
            <div className="space-y-6 text-center text-lead font-normal leading-relaxed text-white/85">
              <p>
                NCDTE-2026 brings together researchers, academicians, industry professionals and
                students to exchange knowledge, share ideas and explore emerging developments in
                digital technology and engineering. It showcases cutting-edge research, innovations
                and practical solutions to contemporary challenges, fostering interdisciplinary
                collaboration and meaningful academia-industry interaction.
              </p>
            </div>
          </Reveal>

          {/* Three Highlight Cards */}
          <Reveal delay={0.2} className="mt-14 w-full">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-start rounded-2xl border border-[#264548] bg-[#142A2C]/80 p-6 text-left shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#007a87]/60 hover:bg-[#183437]/90"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet shadow-[0_0_10px_#d6fb00]"
                    />
                    <h4 className="font-sans text-[17px] font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-sans text-small leading-relaxed text-[#9EB2AE]">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Brochure Button */}
          {CONFIG.BROCHURE_URL && CONFIG.BROCHURE_URL.trim() !== "" && (
            <Reveal delay={0.25} className="mt-12 flex justify-center">
              <Button variant="onDark" href={CONFIG.BROCHURE_URL} target="_blank">
                Download Conference Brochure
              </Button>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
