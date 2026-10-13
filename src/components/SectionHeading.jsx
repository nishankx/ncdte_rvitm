import React from 'react';

export default function SectionHeading({ children, className = "", align = "center" }) {
  const alignClasses = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <h2
      className={`font-sans text-h2 text-ink max-w-[22ch] mb-16 md:mb-24 leading-tight tracking-tight ${alignClasses} ${className}`}
    >
      {children}
    </h2>
  );
}
