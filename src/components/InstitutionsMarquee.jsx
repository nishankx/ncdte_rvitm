import React, { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { AFFILIATIONS_DATA } from '../data/affiliations';

function MarqueeLogoItem({ aff }) {
  const [error, setError] = useState(false);

  return (
    <div
      title={aff.fullName}
      className="flex flex-col items-center justify-center gap-1 group/item shrink-0 select-none cursor-default"
    >
      <div className="w-[140px] h-[48px] flex items-center justify-center">
        {!error ? (
          <img
            src={aff.img}
            alt={aff.name}
            loading="lazy"
            onError={() => setError(true)}
            className="max-w-[140px] max-h-[48px] w-auto h-auto object-contain filter grayscale opacity-70 transition-all duration-300 group-hover/item:grayscale-0 group-hover/item:opacity-100"
          />
        ) : (
          <span className="font-sans font-bold text-sm tracking-wider text-graphite group-hover/item:text-ink transition-colors">
            {aff.name}
          </span>
        )}
      </div>
      <span className="text-[12px] text-graphite group-hover/item:text-ink transition-colors font-medium text-center">
        {aff.name}
      </span>
    </div>
  );
}

export default function InstitutionsMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Create a sequence repeated 3 times to ensure sufficient width across large displays
  const repeatedList = [
    ...AFFILIATIONS_DATA,
    ...AFFILIATIONS_DATA,
    ...AFFILIATIONS_DATA,
  ];

  if (shouldReduceMotion) {
    return (
      <section
        role="region"
        aria-label="Participating institutions"
        className="w-full bg-mist py-4 flex items-center justify-center relative overflow-hidden"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
          {AFFILIATIONS_DATA.map((aff, idx) => (
            <MarqueeLogoItem key={`static-${idx}`} aff={aff} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      role="region"
      aria-label="Participating institutions"
      className="w-full bg-mist h-[76px] md:h-[88px] flex items-center overflow-hidden relative"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="flex items-center gap-20 w-max animate-marquee">
        {/* Primary sequence */}
        <div className="flex items-center gap-20 shrink-0">
          {repeatedList.map((aff, idx) => (
            <MarqueeLogoItem key={`primary-${idx}`} aff={aff} />
          ))}
        </div>

        {/* Duplicate sequence for seamless loop */}
        <div className="flex items-center gap-20 shrink-0" aria-hidden="true">
          {repeatedList.map((aff, idx) => (
            <MarqueeLogoItem key={`dupe-${idx}`} aff={aff} />
          ))}
        </div>
      </div>
    </section>
  );
}
