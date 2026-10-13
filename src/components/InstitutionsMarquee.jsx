import React, { useState } from "react";
import Container from "./Container";
import { AFFILIATIONS_DATA } from "../data/affiliations";

function StaticLogoItem({ aff }) {
  const [error, setError] = useState(false);

  return (
    <div
      title={aff.fullName}
      className="flex h-[56px] w-[150px] shrink-0 cursor-default select-none items-center justify-center"
    >
      {!error ? (
        <img
          src={aff.img}
          alt={aff.alt || aff.fullName}
          width={200}
          height={68}
          decoding="async"
          loading="eager"
          onError={() => setError(true)}
          className="h-auto max-h-[52px] w-auto max-w-[145px] object-contain mix-blend-multiply transition-transform hover:scale-105 sm:max-h-[60px] sm:max-w-[175px] md:max-h-[68px] md:max-w-[210px]"
        />
      ) : (
        <span className="font-sans text-sm font-bold tracking-wider text-graphite">{aff.name}</span>
      )}
    </div>
  );
}

export default function InstitutionsMarquee() {
  return (
    <section
      role="region"
      aria-label="Participating institutions"
      className="relative w-full bg-mist py-2.5 sm:py-3.5"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1 md:gap-1 lg:gap-1">
          {AFFILIATIONS_DATA.map((aff) => (
            <StaticLogoItem key={aff.name} aff={aff} />
          ))}
        </div>
      </Container>
    </section>
  );
}
