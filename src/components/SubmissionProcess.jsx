import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { CONFIG } from "../config";
import { SUBMISSION_PROCESS_DATA } from "../data/process";

export default function SubmissionProcess({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="from-[#ecffb6]/18 to-[#00545f]/8 relative scroll-mt-20 overflow-hidden bg-gradient-to-tr via-white/85 py-20 md:py-32"
    >
      {/* Dispersed Background Gradient Blobs */}
      <div
        aria-hidden="true"
        className="from-[#ecffb6]/28 via-[#d6fb00]/16 pointer-events-none absolute -right-28 top-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-l to-transparent blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="from-[#00545f]/14 via-[#ecffb6]/26 pointer-events-none absolute -left-28 bottom-16 -z-0 h-[540px] w-[540px] rounded-full bg-gradient-to-tr to-transparent blur-[140px]"
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
          <SectionLabel onWhite={false}>Submission Process</SectionLabel>
          <SectionHeading>
            Submission <em className="font-serif font-normal italic text-ink">Process</em>
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
                  className="text-aurora select-none font-serif text-[96px] font-normal tabular-nums leading-none"
                >
                  {stepItem.step}
                </motion.div>

                <h3 className="font-sans text-h3 leading-tight text-ink">{stepItem.title}</h3>

                <p className="mx-auto max-w-[38ch] text-small leading-relaxed text-graphite">
                  {stepItem.desc}
                </p>

                {/* Action Links */}
                {stepItem.hasTemplateLink && CONFIG.PAPER_TEMPLATE_URL && (
                  <div className="flex justify-center pt-2">
                    <a
                      href={CONFIG.PAPER_TEMPLATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption font-semibold uppercase tracking-wider text-ink underline underline-offset-4 transition-colors hover:text-aurora-azure"
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
                      className="text-caption font-semibold uppercase tracking-wider text-ink underline underline-offset-4 transition-colors hover:text-aurora-azure"
                    >
                      Open Google Form ↗
                    </a>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          {/* CTA Row with primary button */}
          <Reveal delay={0.2} className="flex justify-center">
            <Button
              variant="primary"
              href={CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
            >
              Submit your paper →
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
