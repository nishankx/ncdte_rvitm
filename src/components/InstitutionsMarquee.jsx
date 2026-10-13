import React, { useState } from "react";
import { AFFILIATIONS_DATA } from "../data/affiliations";

function StaticLogoItem({ aff }) {
  const [error, setError] = useState(false);

  return (
    <div
      title={aff.fullName}
      className="flex h-[46px] w-full min-w-0 cursor-default select-none items-center justify-center sm:h-[56px] md:h-[64px]"
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
          className="h-auto max-h-[42px] w-auto max-w-full object-contain mix-blend-multiply transition-transform hover:scale-105 sm:max-h-[52px] md:max-h-[60px]"
        />
      ) : (
        <span className="truncate text-center font-sans text-xs font-bold tracking-wider text-graphite sm:text-sm">
          {aff.name}
        </span>
      )}
    </div>
  );
}

export default function InstitutionsMarquee() {
  return (
    <section
      role="region"
      aria-label="Participating institutions"
      className="relative w-full border-b border-[#00545f]/10 bg-white py-1 sm:py-1.5 md:py-2"
    >
      <div className="mx-auto w-full max-w-2xl px-2 sm:px-4">
        <div className="grid grid-cols-4 items-center justify-items-center gap-1.5 sm:gap-3 md:gap-5">
          {AFFILIATIONS_DATA.map((aff) => (
            <StaticLogoItem key={aff.name} aff={aff} />
          ))}
        </div>
      </div>
    </section>
  );
}
