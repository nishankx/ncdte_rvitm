import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <SectionLabel>Frequently Asked Questions</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight mt-2">
            Everything You Need to Know
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Direct clarifications on submissions, topics, publication venues, and registration criteria.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id} delay={index * 0.04}>
                <div className="rounded-2xl border border-slate-200 overflow-hidden transition-colors hover:border-royal/40 bg-slate-50/50">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-royal focus:ring-inset"
                  >
                    <span className="font-heading font-semibold text-base sm:text-lg text-ink pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-royal shrink-0 w-8 h-8 rounded-full bg-sky/30 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 whitespace-pre-line">
                          {faq.answer}
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
    </section>
  );
}
