import React from 'react';
import Reveal from './Reveal';
import Button from './Button';
import { Calendar, MapPin, Send } from 'lucide-react';

export default function CtaBand({ onOpenModal }) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-banner via-royal to-indigoDeep text-white relative overflow-hidden print:hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-plum/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky uppercase tracking-widest mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>Call for Submissions Open</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight">
            READY TO SHARE YOUR RESEARCH?
          </h2>

          <p className="mt-4 font-heading font-medium text-sky tracking-wider text-sm sm:text-base md:text-lg">
            NCDTE-2026 · 4 DECEMBER 2026 · BENGALURU
          </p>

          <p className="mt-2 text-slate-200 text-xs sm:text-sm max-w-xl mx-auto">
            Join visionary researchers, students, and academicians at RV Institute of Technology and Management.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="filled"
              onClick={() => onOpenModal("submission")}
              className="w-full sm:w-auto font-heading font-bold uppercase tracking-wider text-sm sm:text-base px-8 py-3.5 shadow-xl shadow-black/20"
            >
              SUBMIT YOUR PAPERS HERE
            </Button>
            <Button
              variant="outlined"
              onClick={() => onOpenModal("registration")}
              className="w-full sm:w-auto font-heading font-semibold uppercase tracking-wider text-sm sm:text-base px-8 py-3.5"
            >
              Register Now
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
