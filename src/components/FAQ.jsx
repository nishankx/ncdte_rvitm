import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Container from "./Container";
import SectionLabel from "./SectionLabel";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FAQS_DATA } from "../data/faqs";
import { CONFIG } from "../config";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-mist py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionLabel onWhite={false}>Frequently Asked Questions</SectionLabel>
          <SectionHeading>
            Frequently asked <em className="font-serif font-normal italic text-ink">questions</em>
          </SectionHeading>

          {/* Stacked Items, max-w-3xl mx-auto */}
          <div className="mx-auto w-full max-w-3xl space-y-3">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <Reveal key={faq.id} delay={index * 0.03}>
                  <div className="rounded-lg bg-white px-7 py-6 shadow-soft transition-all duration-200">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-question-${faq.id}`}
                      onClick={() => toggleItem(faq.id)}
                      className="relative flex w-full cursor-pointer items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora-azure"
                    >
                      <span className="block text-left font-sans text-lead font-medium leading-snug text-ink">
                        {faq.question}
                      </span>

                      {/* +/- icon */}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`shrink-0 text-2xl font-light transition-colors ${
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
                          animate={
                            shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }
                          }
                          exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="w-full whitespace-pre-line pt-4 text-body font-normal text-graphite">
                            <p>{faq.answer}</p>
                            {faq.hasMapLink && (
                              <div className="mt-3 flex justify-start">
                                <a
                                  href={CONFIG.MAP_URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-caption font-semibold uppercase tracking-wider text-ink underline underline-offset-4 transition-colors hover:text-aurora-azure"
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
        </div>
      </Container>
    </section>
  );
}
