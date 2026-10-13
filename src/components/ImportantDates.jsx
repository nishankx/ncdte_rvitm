import React, { useMemo } from 'react';
import Container from './Container';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Card from './Card';
import { IMPORTANT_DATES, CONTACT_DETAILS } from '../data/dates';
import { CONFIG } from '../config';

export default function ImportantDates() {
  const datesWithStatus = useMemo(() => {
    const now = new Date().getTime();
    let hasFoundNext = false;

    return IMPORTANT_DATES.filter((item) => item.visible !== false).map((item) => {
      const itemTime = new Date(item.isoDate).getTime();
      let status = "Upcoming";

      if (item.badgeOverride) {
        status = item.badgeOverride;
      } else if (now > itemTime) {
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
    <section id="dates" className="py-20 md:py-32 bg-white scroll-mt-20">
      <Container>
        <SectionLabel onWhite={true}>Schedule & Deadlines</SectionLabel>
        <SectionHeading>
          Important <em className="font-serif italic font-normal text-ink">Dates</em>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column (8 cols): Giant Date List */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            {datesWithStatus.map((item, idx) => {
              const isNext = item.status === "Next deadline";
              return (
                <Reveal key={item.id} delay={idx * 0.06}>
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] items-center gap-6 py-2 select-none">
                    {/* Col 1: Giant Date in Satoshi 700 */}
                    <div
                      className={`font-sans font-bold text-[clamp(3.5rem,9vw,8rem)] leading-none tracking-tighter ${
                        isNext ? "text-aurora" : "text-ink"
                      }`}
                    >
                      {item.dateDisplay}
                    </div>

                    {/* Col 2: Milestone in Serif Italic & Description */}
                    <div className="space-y-1.5">
                      <h3 className="font-serif italic text-[clamp(1.5rem,3vw,2.5rem)] text-ink leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-small text-graphite leading-relaxed max-w-[42ch]">
                        {item.description}
                      </p>
                    </div>

                    {/* Col 3: Tiny Status Badge */}
                    <div className="flex items-center md:justify-end">
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-pill ${
                          isNext
                            ? "bg-ink text-white"
                            : "bg-mist-50 text-graphite"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column (4 cols): Contact Numbers Card (vertically centered on desktop) */}
          <div className="lg:col-span-4 lg:self-center">
            <Reveal delay={0.2}>
              <Card onWhite={true} className="space-y-6">
                <div>
                  <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-2">
                    Inquiries & Helpline
                  </span>
                  <h3 className="font-serif italic text-2xl text-ink">
                    Contact Numbers
                  </h3>
                  <p className="text-caption text-graphite mt-1">
                    Direct assistance for paper submission and author inquiries.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {CONTACT_DETAILS.phones.map((phone, pIdx) => (
                    <a
                      key={pIdx}
                      href={`tel:+91${phone.number}`}
                      className="block p-3.5 rounded-md bg-white hover:bg-mist transition-colors group shadow-sm"
                    >
                      <span className="text-[11px] text-graphite uppercase tracking-wider block font-medium">
                        {phone.label}
                      </span>
                      <span className="font-sans font-medium text-lg sm:text-[20px] tabular-nums text-ink group-hover:text-aurora-azure transition-colors">
                        +91 {phone.number}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-graphite uppercase tracking-wider block font-medium mb-1">
                    Email Correspondence
                  </span>
                  <a
                    href={`mailto:${CONFIG.EMAIL}`}
                    className="font-sans text-small text-ink hover:text-aurora-azure transition-colors break-all"
                  >
                    {CONFIG.EMAIL}
                  </a>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
