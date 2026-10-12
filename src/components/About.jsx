import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import { BookOpen, Share2, Building2 } from 'lucide-react';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const chips = [
    {
      title: "Exchange Knowledge",
      desc: "Share innovative ideas and emerging developments across digital technology and engineering domains.",
      icon: BookOpen,
    },
    {
      title: "Interdisciplinary Collaboration",
      desc: "Foster cross-domain partnerships to address modern engineering and technological challenges.",
      icon: Share2,
    },
    {
      title: "Academia-Industry Interaction",
      desc: "Encourage meaningful dialogue between researchers, faculty, industry leaders, and students.",
      icon: Building2,
    },
  ];

  const chipsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const chipItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white bg-dots-pattern scroll-mt-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <SectionLabel>About NCDTE-2026</SectionLabel>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight leading-tight">
                Empowering Innovation Through Collaborative Research & Engineering
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  The National Conference on Digital Technology and Engineering (NCDTE-2026) serves as a platform for researchers, academicians, industry professionals, and students to exchange knowledge, share innovative ideas, and discuss emerging developments in digital technology and engineering.
                </p>
                <p>
                  The conference provides an avenue for presenting cutting-edge research, technological innovations, and practical solutions addressing contemporary challenges. NCDTE-2026 aims to foster interdisciplinary collaboration, encourage meaningful academic and industry interactions, and promote research-driven advancements in technology and engineering.
                </p>
              </div>
            </Reveal>
          </div>

          {/* 3 Highlight Chips */}
          <div className="lg:col-span-5">
            <motion.div
              variants={chipsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-4"
            >
              {chips.map((chip, index) => {
                const Icon = chip.icon;
                return (
                  <motion.div
                    key={index}
                    variants={chipItem}
                    whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-royal/40 transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-royal/10 text-royal shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-ink text-base">
                        {chip.title}
                      </h3>
                      <p className="text-muted text-xs sm:text-sm mt-1 leading-relaxed">
                        {chip.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
