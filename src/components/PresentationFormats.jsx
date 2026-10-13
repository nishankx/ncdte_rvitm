import React from "react";
import Card from "./Card";
import { PRESENTATION_FORMATS_DATA } from "../data/formats";

export default function PresentationFormats() {
  return (
    <div className="mb-14 w-full md:mb-16">
      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        {PRESENTATION_FORMATS_DATA.map((format) => (
          <Card
            key={format.id}
            onWhite={false}
            className="flex h-full flex-col items-center justify-between !p-10 text-center"
          >
            <div className="flex w-full flex-col items-center text-center">
              <span className="mb-3 block text-eyebrow uppercase tracking-widest text-graphite">
                {format.tagline}
              </span>
              <h3 className="mb-4 font-serif text-[clamp(1.75rem,2.8vw,2.5rem)] leading-tight text-ink">
                {format.title}
              </h3>
              <p className="mx-auto mb-8 max-w-[48ch] text-small leading-relaxed text-graphite">
                {format.desc}
              </p>

              <ul className="mx-auto w-fit max-w-full list-none space-y-3">
                {format.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-left text-body text-ink/85">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet"
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
