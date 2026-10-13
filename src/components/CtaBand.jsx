import React from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";
import { CONFIG } from "../config";

export default function CtaBand({ onOpenModal }) {
  return (
    <section className="relative select-none bg-ink py-28 text-white md:py-32 ">
      {/* Blurred Aurora Blob Behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto h-[400px] w-[600px] rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet opacity-40 blur-[120px] sm:w-[800px]"
      />

      <Container>
        <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
          <Reveal className="w-full">
            <span className="mb-4 block text-eyebrow uppercase tracking-widest text-white/60">
              NCDTE-2026 · 4 DECEMBER 2026 · BENGALURU
            </span>

            <h2 className="mx-auto max-w-[16ch] font-sans text-[clamp(3rem,9vw,9rem)] font-medium leading-[1.02] tracking-tighter text-white">
              Ready to share{" "}
              <em className="text-aurora font-serif font-normal italic">your research?</em>
            </h2>

            <p className="mx-auto mt-6 max-w-[50ch] text-lead font-normal leading-relaxed text-white/70">
              Join leading researchers, faculty, and innovators at RV Institute of Technology and
              Management.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
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
                  className="px-3 py-2 text-caption font-semibold uppercase tracking-wider text-white/70 underline underline-offset-4 transition-colors hover:text-white"
                >
                  Download Brochure ↗
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
