import React, { useState } from "react";
import Container from "./Container";
import { ALL_LOGOS } from "../data/affiliations";

function PlainLogo({ logo }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className="font-sans text-sm font-bold tracking-wider text-[#0F2F31]">
        {logo.name}
      </span>
    );
  }

  return (
    <div
      title={logo.fullName || logo.name}
      className="flex items-center justify-center select-none transition-transform duration-300 hover:scale-105"
    >
      <img
        src={logo.img}
        alt={logo.alt || logo.fullName || logo.name}
        loading="eager"
        decoding="async"
        onError={() => setError(true)}
        className="h-12 sm:h-10 md:h-14 lg:h-22 w-auto max-w-auto object-contain mix-blend-multiply"
      />
    </div>
  );
}

export default function InstitutionsMarquee() {
  return (
    <section
      role="region"
      aria-label="Conference partner and institution logos"
      className="bg-white w-full py-5 sm:py-5 md:py-2 lg:py-5 backdrop-blur-md"
    >
      <Container className="max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-10 lg:gap-14">
          {ALL_LOGOS.map((logo) => (
            <PlainLogo key={logo.name} logo={logo} />
          ))}
        </div>
      </Container>
    </section>
  );
}
