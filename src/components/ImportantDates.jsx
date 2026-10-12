import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import { IMPORTANT_DATES, CONTACT_DETAILS } from '../data/dates';
import { Calendar, Phone, Mail, Clock, CheckCircle, Sparkles } from 'lucide-react';

export default function ImportantDates() {
  const shouldReduceMotion = useReducedMotion();

  // Auto-compute status badge for each date
  const datesWithStatus = useMemo(() => {
    const now = new Date().getTime();
    let hasFoundNext = false;

    return IMPORTANT_DATES.map((item) => {
      const itemTime = new Date(item.isoDate).getTime();
      let status = "Upcoming";

      if (now > itemTime) {
        status = "Closed";
      } else if (!hasFoundNext) {
        status = "Next deadline";
        hasFoundNext = true;
      } else {
        status = "Upcoming";
      }

      return {
        ...item,
        status,
      };
    });
  }, []);

  return (
    <section id="dates" className="py-16 md:py-24 bg-white scroll-mt-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <SectionLabel>Schedule & Deadlines</SectionLabel>
        </Reveal>

        {/* Heading "IMPORTANT DATES" (bold, dark outlined / brochure style) */}
        <Reveal delay={0.1}>
          <div className="mt-2 mb-10">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight uppercase drop-shadow-sm">
              IMPORTANT DATES
            </h2>
            <div className="h-1.5 w-24 bg-royal rounded-full mt-3" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Animated Timeline (7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Connecting Vertical Line */}
            <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-slate-200" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-royal via-banner to-plum"
            />

            <div className="space-y-8 relative">
              {datesWithStatus.map((dateItem, idx) => {
                const isHighlight = dateItem.highlight;
                const isNext = dateItem.status === "Next deadline";
                const isClosed = dateItem.status === "Closed";

                let badgeStyles = "bg-slate-100 text-slate-700 border-slate-200";
                if (isClosed) {
                  badgeStyles = "bg-rose-50 text-rose-700 border-rose-200";
                } else if (isNext) {
                  badgeStyles = "bg-emerald-50 text-emerald-700 border-emerald-300 font-bold animate-pulse";
                } else {
                  badgeStyles = "bg-sky/20 text-banner border-sky/40";
                }

                return (
                  <motion.div
                    key={dateItem.id}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                    whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 sm:gap-6 pl-1 sm:pl-2 group"
                  >
                    {/* Pop-in Dot */}
                    <motion.div
                      initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 350, damping: 20, delay: idx * 0.15 }}
                      className={`relative z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                        isHighlight
                          ? "bg-plum text-white ring-4 ring-plum/20"
                          : isNext
                          ? "bg-emerald-600 text-white ring-4 ring-emerald-200"
                          : isClosed
                          ? "bg-slate-400 text-white ring-4 ring-slate-100"
                          : "bg-royal text-white ring-4 ring-sky/40"
                      }`}
                    >
                      {isHighlight ? (
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ) : (
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -3 }}
                      className={`flex-1 rounded-2xl p-5 border transition-all duration-200 ${
                        isHighlight
                          ? "bg-gradient-to-br from-indigoDeep to-banner text-white border-transparent shadow-card"
                          : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-royal/30"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full border ${
                            isHighlight
                              ? "bg-plum text-white border-pink-400/40 font-semibold"
                              : badgeStyles
                          }`}
                        >
                          {dateItem.status}
                        </span>

                        <div className={`flex items-center gap-1.5 text-xs font-semibold ${isHighlight ? "text-sky" : "text-royal"}`}>
                          <Clock className="w-3.5 h-3.5" />
                          <span>IST (UTC +5:30)</span>
                        </div>
                      </div>

                      <h3
                        className={`font-heading font-bold text-lg sm:text-xl ${
                          isHighlight ? "text-white" : "text-ink"
                        }`}
                      >
                        {dateItem.title}
                      </h3>

                      <div
                        className={`font-heading font-extrabold text-base sm:text-lg mt-1 tracking-tight ${
                          isHighlight ? "text-sky" : "text-banner"
                        }`}
                      >
                        {dateItem.dateDisplay}
                      </div>

                      <p
                        className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                          isHighlight ? "text-slate-200" : "text-muted"
                        }`}
                      >
                        {dateItem.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Beside the timeline: Contact Numbers Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-royal text-white flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-ink">
                      Contact Numbers
                    </h3>
                    <p className="text-muted text-xs sm:text-sm">
                      Have questions regarding deadlines or registration?
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {CONTACT_DETAILS.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:+91${phone.number}`}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-royal hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky/30 text-banner flex items-center justify-center group-hover:bg-banner group-hover:text-white transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="font-mono font-bold text-sm sm:text-base text-ink group-hover:text-royal transition-colors">
                          {phone.number}
                        </span>
                      </div>
                      <span className="text-xs text-muted font-medium uppercase tracking-wide">
                        Call
                      </span>
                    </a>
                  ))}
                </div>

                {/* Email Us */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}?subject=NCDTE-2026%20Inquiry`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-indigoDeep text-white hover:bg-banner transition-colors group shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 text-sky flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs text-sky font-semibold uppercase tracking-wider block">
                        Email Us
                      </span>
                      <span className="font-medium text-xs sm:text-sm truncate block text-slate-100 group-hover:text-white">
                        {CONTACT_DETAILS.email}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
