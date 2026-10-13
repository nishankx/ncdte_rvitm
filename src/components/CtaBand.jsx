import React from 'react';
import Container from './Container';
import Reveal from './Reveal';
import Button from './Button';
import { CONFIG } from '../config';

export default function CtaBand({ onOpenModal }) {
  return (
    <section className="bg-ink text-white py-28 md:py-32 relative overflow-hidden select-none print:hidden">
      {/* Blurred Aurora Blob Behind */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet blur-[120px] opacity-40 pointer-events-none"
      />

      <Container className="text-center relative z-10 space-y-8">
        <Reveal>
          <span className="text-eyebrow uppercase tracking-widest text-white/60 block mb-4">
            NCDTE-2026 · 4 DECEMBER 2026 · BENGALURU
          </span>

          <h2 className="font-sans font-medium text-[clamp(3rem,9vw,9rem)] text-white leading-[1.02] tracking-tighter max-w-[16ch] mx-auto">
            Ready to share <em className="font-serif italic font-normal text-aurora">your research?</em>
          </h2>

          <p className="mt-6 text-lead text-white/70 max-w-[50ch] mx-auto font-normal leading-relaxed">
            Join leading researchers, faculty, and innovators at RV Institute of Technology and Management.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="onDark"
              onClick={() => onOpenModal("submission")}
              className="h-12 text-[15px]"
            >
              SUBMIT YOUR PAPERS HERE
            </Button>

            <Button
              variant="ghostDark"
              onClick={() => onOpenModal("registration")}
              showArrow={false}
              className="h-12 text-[15px]"
            >
              Register Now
            </Button>

            {/* Optional Brochure Link */}
            {CONFIG.BROCHURE_URL && CONFIG.BROCHURE_URL.trim() !== "" && (
              <a
                href={CONFIG.BROCHURE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption uppercase font-semibold tracking-wider text-white/70 hover:text-white transition-colors underline underline-offset-4 py-2 px-3"
              >
                Download Brochure ↗
              </a>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
