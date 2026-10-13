import React from 'react';
import Card from './Card';
import { PRESENTATION_FORMATS_DATA } from '../data/formats';

export default function PresentationFormats() {
  return (
    <div className="mb-14 md:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {PRESENTATION_FORMATS_DATA.map((format) => (
          <Card key={format.id} onWhite={false} className="!p-10 flex flex-col justify-between h-full">
            <div>
              <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-3">
                {format.tagline}
              </span>
              <h3 className="font-serif text-[clamp(1.75rem,2.8vw,2.5rem)] text-ink leading-tight mb-4">
                {format.title}
              </h3>
              <p className="text-graphite text-small leading-relaxed mb-8">
                {format.desc}
              </p>

              <ul className="space-y-4">
                {format.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3.5 text-body text-ink/85">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet mt-2.5 shrink-0"
                    />
                    <span>{bullet.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
