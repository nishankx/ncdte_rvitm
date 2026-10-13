import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { FAQS_DATA } from '../data/faqs';
import { CONFIG } from '../config';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-mist scroll-mt-20">
      <Container className="max-w-[880px]">
        <SectionLabel onWhite={false}>Frequently Asked Questions</SectionLabel>
        <SectionHeading>
          Frequently asked <em className="font-serif italic font-normal text-ink">questions</em>
        </SectionHeading>

        {/* Stacked Items, 12px Gap */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id} delay={index * 0.03}>
                <div className="bg-white shadow-soft rounded-lg px-7 py-6 transition-all duration-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora-azure"
                  >
                    <span className="font-sans font-medium text-lead text-ink pr-6 leading-snug">
                      {faq.question}
                    </span>

                    {/* +/- icon that rotates 45deg when open and turns aurora */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-2xl font-light shrink-0 transition-colors ${
                        isOpen ? "text-aurora font-medium" : "text-graphite"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-body text-graphite whitespace-pre-line font-normal">
                          <p>{faq.answer}</p>
                          {faq.hasMapLink && (
                            <div className="mt-3">
                              <a
                                href={CONFIG.MAP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-caption uppercase font-semibold tracking-wider text-ink hover:text-aurora-azure transition-colors underline underline-offset-4"
                              >
                                View on Google Maps ↗
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
