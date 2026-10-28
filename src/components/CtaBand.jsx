import React from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";
import DarkPatternBackground from "./DarkPatternBackground";
import { CONFIG } from "../config";

export default function CtaBand({ onOpenModal }) {
  return (
    <section className="relative select-none bg-ink py-14 text-white sm:py-18 md:py-20">
      {/* Subtle Dotted Matrix & Concentric Circles Pattern */}
      <DarkPatternBackground circlePosition="center" />
      {/* Blurred Aurora Blob Behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto h-[360px] w-[520px] rounded-full bg-gradient-to-r from-[#00545f]/80 via-[#007a87]/70 to-[#d6fb00]/40 opacity-20 blur-[130px] sm:w-[720px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6fb00]/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/20 to-transparent"
      />

      <Container>
        <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
          <Reveal className="w-full">
            <span className="mb-4 block text-eyebrow uppercase tracking-widest text-white/60">
              NCDTE-2026 · 4 DECEMBER 2026 · BENGALURU
            </span>

            <h2 className="mx-auto max-w-[18ch] font-sans text-[clamp(2.75rem,7.5vw,7.5rem)] font-bold leading-[1.04] tracking-tight text-white">
              Ready to share{" "}
              <span className="text-aurora">your research?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[50ch] text-lead font-normal leading-relaxed text-white/70 text-justify">
              Join leading researchers, faculty, and innovators at RV Institute of Technology and
              Management.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="onDark"
                href={CONFIG.REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 text-[15px]"
              >
                Submit your paper
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
