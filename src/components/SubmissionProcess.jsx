import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Button from './Button';
import { CONFIG } from '../config';
import { SUBMISSION_PROCESS_DATA } from '../data/process';

export default function SubmissionProcess({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-20 md:py-32 bg-mist scroll-mt-20">
      <Container>
        <SectionLabel onWhite={false}>Submission Process</SectionLabel>
        <SectionHeading>
          Submission <em className="font-serif italic font-normal text-ink">Process</em>
        </SectionHeading>

        {/* 3x2 Grid: No cards, no connector lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-24 mb-16 md:mb-24">
          {SUBMISSION_PROCESS_DATA.map((stepItem, idx) => (
            <Reveal key={stepItem.step} delay={idx * 0.08} className="space-y-4 group">
              {/* Giant Serif Numeral: turns text-aurora in view */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0.15 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-serif text-[96px] leading-none text-aurora font-normal select-none tabular-nums"
              >
                {stepItem.step}
              </motion.div>

              <h3 className="font-sans text-h3 text-ink leading-tight">
                {stepItem.title}
              </h3>

              <p className="text-small text-graphite leading-relaxed max-w-[38ch]">
                {stepItem.desc}
              </p>

              {/* Action Links */}
              {stepItem.hasTemplateLink && CONFIG.PAPER_TEMPLATE_URL && (
                <div className="pt-2">
                  <a
                    href={CONFIG.PAPER_TEMPLATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caption uppercase font-semibold tracking-wider text-ink hover:text-aurora-azure transition-colors underline underline-offset-4"
                  >
                    Download Template ↗
                  </a>
                </div>
              )}

              {stepItem.isMailto && (
                <div className="pt-2">
                  <a
                    href={`mailto:${CONFIG.EMAIL}?subject=NCDTE-2026%20Paper%20Submission`}
                    className="text-caption uppercase font-semibold tracking-wider text-ink hover:text-aurora-azure transition-colors underline underline-offset-4"
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
      </Container>
    </section>
  );
}
