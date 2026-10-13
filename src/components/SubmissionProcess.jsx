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
    <section id="process" className="scroll-mt-20 bg-mist py-20 md:py-32">
      <Container>
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

                <p className="mx-auto max-w-[38ch] text-justify text-small leading-relaxed text-graphite">
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

                {stepItem.isMailto && (
                  <div className="flex justify-center pt-2">
                    <a
                      href={`mailto:${CONFIG.EMAIL}?subject=NCDTE-2026%20Paper%20Submission`}
                      className="text-caption font-semibold uppercase tracking-wider text-ink underline underline-offset-4 transition-colors hover:text-aurora-azure"
                    >
                      Email Submission ↗
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
              onClick={() => onOpenModal("submission")}
              className="text-sm font-medium"
            >
              SUBMIT YOUR PAPERS HERE
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
