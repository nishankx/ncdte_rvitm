import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import DarkPatternBackground from "./DarkPatternBackground";
import { CONFIG } from "../config";
import { SUBMISSION_PROCESS_DATA } from "../data/process";

export default function SubmissionProcess({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-[#0F2F31] py-20 text-white md:py-32"
    >
      {/* Subtle Dotted Matrix & Concentric Circles Pattern */}
      <DarkPatternBackground circlePosition="left" />
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
        className="pointer-events-none absolute -right-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-l from-[#00545f]/40 via-[#007a87]/20 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tr from-[#d6fb00]/16 via-[#ecffb6]/15 to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#1B393A]/50 to-transparent blur-[140px]"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel onDark>Submission Process</SectionLabel>
          <SectionHeading className="!text-white">
            Submission <em className="text-aurora font-serif font-normal italic">Process</em>
          </SectionHeading>

          {/* 3x2 Grid: each step flex flex-col items-center text-center, numeral above title */}
          <div className="mb-16 grid w-full grid-cols-1 justify-items-center gap-x-16 gap-y-16 md:mb-24 md:grid-cols-2 md:gap-y-24 lg:grid-cols-3">
            {SUBMISSION_PROCESS_DATA.map((stepItem, idx) => (
              <Reveal
                key={stepItem.step}
                delay={idx * 0.08}
                className="group flex flex-col items-center space-y-4 text-center"
              >
                {/* Giant Serif Numeral: turns text-aurora in view */}
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0.15 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-aurora select-none font-serif text-[96px] font-normal tabular-nums leading-none drop-shadow-[0_4px_24px_rgba(214,251,0,0.15)]"
                >
                  {stepItem.step}
                </motion.div>

                <h3 className="font-sans text-h3 leading-tight text-white">{stepItem.title}</h3>

                <p className="mx-auto max-w-[38ch] text-small leading-relaxed text-[#9EB2AE]">
                  {stepItem.desc}
                </p>

                {/* Action Links */}
                {stepItem.hasTemplateLink && CONFIG.PAPER_TEMPLATE_URL && (
                  <div className="flex justify-center pt-2">
                    <a
                      href={CONFIG.PAPER_TEMPLATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption font-semibold uppercase tracking-wider text-[#d6fb00] underline underline-offset-4 transition-colors hover:text-white"
                    >
                      Download Template ↗
                    </a>
                  </div>
                )}

                {stepItem.hasFormLink && (
                  <div className="flex justify-center pt-2">
                    <a
                      href={CONFIG.REGISTRATION_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption font-semibold uppercase tracking-wider text-[#d6fb00] underline underline-offset-4 transition-colors hover:text-white"
                    >
                      Open Google Form ↗
                    </a>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          {/* CTA Row with onDark button */}
          <Reveal delay={0.2} className="flex justify-center">
            <Button
              variant="onDark"
              href={CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold"
            >
              Submit your paper →
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
