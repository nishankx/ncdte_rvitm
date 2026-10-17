import React, { useState } from "react";
import Container from "./Container";
import LightPatternBackground from "./LightPatternBackground";
import { ALL_LOGOS } from "../data/affiliations";

function PlainLogo({ logo, imgClassName = "h-5 sm:h-12 md:h-14 lg:h-22" }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className="font-sans text-xs sm:text-sm font-bold tracking-wider text-[#0F2F31]">
        {logo.name}
      </span>
    );
  }

  return (
    <div
      title={logo.fullName || logo.name}
      className="flex shrink-0 items-center justify-center select-none transition-transform duration-300 hover:scale-105"
    >
      <img
        src={logo.img}
        alt={logo.alt || logo.fullName || logo.name}
        loading="eager"
        decoding="async"
        onError={() => setError(true)}
        className={`${imgClassName} w-auto max-w-auto object-contain mix-blend-multiply`}
      />
    </div>
  );
}

export default function InstitutionsMarquee() {
  return (
    <section
      role="region"
      aria-label="Conference partner and institution logos"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#00545f]/6 via-white/85 to-[#d6fb00]/10 py-4 backdrop-blur-md  sm:py-5 md:py-2 lg:py-5"
    >
      {/* Mobile only: Continuous Marquee strip */}
      <div className="relative w-full overflow-hidden md:hidden">
        {/* Soft edge fades for seamless horizontal entry and exit */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent"
        />

        <div className="flex w-max animate-marquee active:[animation-play-state:paused] py-1">
          <div className="flex shrink-0 items-center gap-7 pr-7">
            {ALL_LOGOS.map((logo, idx) => (
              <PlainLogo
                key={`m1-${logo.name}-${idx}`}
                logo={logo}
                imgClassName="h-7 sm:h-8"
              />
            ))}
          </div>
          <div
            className="flex shrink-0 items-center gap-7 pr-7"
            aria-hidden="true"
          >
            {ALL_LOGOS.map((logo, idx) => (
              <PlainLogo
                key={`m2-${logo.name}-${idx}`}
                logo={logo}
                imgClassName="h-7 sm:h-8"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tablet & Laptop / Desktop: Stagnant Banners */}
      <div className="pt-2 hidden md:block">
        <Container className="max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-10 lg:gap-14">
            {ALL_LOGOS.map((logo) => (
              <PlainLogo
                key={logo.name}
                logo={logo}
                imgClassName="md:h-14 lg:h-22"
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

