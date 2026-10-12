import React from 'react';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import Button from './Button';
import { CONFIG } from '../config';
import { FileText, CheckCircle2, AlertTriangle, Download, ArrowRight, ShieldCheck, Mail, BookOpen } from 'lucide-react';

export default function Guidelines({ onOpenModal }) {
  const paperGuidelines = [
    "Submitted papers must be original and unpublished and should not be under consideration for publication elsewhere.",
    "Authors are requested to follow the prescribed conference paper template, available on the conference website.",
    "The similarity/plagiarism level of the submitted paper should be below 15%.",
    "Authors of accepted papers must complete the registration process using the designated registration link.",
  ];

  const importantNotes = [
    "The acceptance status of submitted papers will be communicated to the authors via email following the peer-review process.",
    "At least one author of each accepted paper or poster must complete registration by paying the applicable registration fee on or before November 20, 2026.",
    "Selected papers will be published in relevant ISSN Journal.",
  ];

  return (
    <section id="guidelines" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <SectionLabel>Guidelines for Submission</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight mt-2">
            Author Guidelines & Peer-Review Policy
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-3xl leading-relaxed">
            Please adhere to the official conference submission requirements and publication standards outlined below.
          </p>
        </Reveal>

        {/* Bold white-on-indigo panel */}
        <div className="mt-10 bg-indigoDeep text-white rounded-2xl p-6 sm:p-10 shadow-card border border-indigo-900/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-royal/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {/* Group 1: Paper Presentation */}
            <div className="bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/15 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-sky/20 text-sky flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider text-sky uppercase">Section A</span>
                    <h3 className="font-heading font-bold text-xl text-white">Paper Presentation</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                  {paperGuidelines.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Paper Template button (hidden if CONFIG.PAPER_TEMPLATE_URL is empty) */}
              {CONFIG.PAPER_TEMPLATE_URL && CONFIG.PAPER_TEMPLATE_URL.trim() !== "" && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    variant="sky"
                    href={CONFIG.PAPER_TEMPLATE_URL}
                    target="_blank"
                    className="w-full sm:w-auto font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Paper Template
                  </Button>
                </div>
              )}
            </div>

            {/* Group 2: Important Note */}
            <div className="bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/15 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-plum/30 text-pink-300 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider text-pink-300 uppercase">Section B</span>
                    <h3 className="font-heading font-bold text-xl text-white">Important Note</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                  {importantNotes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-sky shrink-0" />
                <span>Publication confirmation: Selected papers will be published in relevant ISSN Journal.</span>
              </div>
            </div>
          </div>

          {/* Primary CTA below: SUBMIT YOUR PAPERS HERE */}
          <div className="mt-10 pt-8 border-t border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-left">
              <h4 className="font-heading font-bold text-lg text-white">
                Ready to submit your manuscript?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Ensure plagiarism is under 15% before final paper upload.
              </p>
            </div>
            <Button
              variant="filled"
              onClick={() => onOpenModal("submission")}
              className="w-full sm:w-auto font-heading font-bold uppercase tracking-wider text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-royal/40"
            >
              SUBMIT YOUR PAPERS HERE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
