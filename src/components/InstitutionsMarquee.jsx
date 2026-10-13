import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { AFFILIATIONS_DATA } from "../data/affiliations";

function MarqueeLogoItem({ aff }) {
  const [error, setError] = useState(false);

  return (
    <div
      title={aff.fullName}
      className="flex h-[48px] w-[140px] shrink-0 cursor-default select-none items-center justify-center"
    >
      {!error ? (
        <img
          src={aff.img}
          alt={aff.alt || aff.fullName}
          width={140}
          height={48}
          decoding="async"
          loading="eager"
          onError={() => setError(true)}
          className="h-auto max-h-[48px] w-auto max-w-[140px] object-contain mix-blend-multiply"
        />
      ) : (
        <span className="font-sans text-sm font-bold tracking-wider text-graphite">{aff.name}</span>
      )}
    </div>
  );
}

export default function InstitutionsMarquee() {
  const shouldReduceMotion = useReducedMotion();

  // Create a sequence repeated 3 times to ensure sufficient width across large displays
  const repeatedList = [...AFFILIATIONS_DATA, ...AFFILIATIONS_DATA, ...AFFILIATIONS_DATA];

  if (shouldReduceMotion) {
    return (
      <section
        role="region"
        aria-label="Participating institutions"
        className="relative flex w-full items-center justify-center overflow-hidden bg-mist py-4"
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
      className="relative flex h-[76px] w-full items-center overflow-hidden bg-mist md:h-[88px]"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="animate-marquee flex w-max items-center gap-20">
        {/* Primary sequence */}
        <div className="flex shrink-0 items-center gap-20">
          {repeatedList.map((aff, idx) => (
            <MarqueeLogoItem key={`primary-${idx}`} aff={aff} />
          ))}
        </div>

        {/* Duplicate sequence for seamless loop */}
        <div className="flex shrink-0 items-center gap-20" aria-hidden="true">
          {repeatedList.map((aff, idx) => (
            <MarqueeLogoItem key={`dupe-${idx}`} aff={aff} />
          ))}
        </div>
      </div>
    </section>
  );
}
