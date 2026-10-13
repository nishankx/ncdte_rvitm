import React from "react";

export default function SectionHeading({ children, className = "", align = "center" }) {
  const alignClasses = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <h2
      className={`mb-16 max-w-[22ch] font-sans text-h2 leading-tight tracking-tight text-ink md:mb-24 ${alignClasses} ${className}`}
    >
      {children}
    </h2>
  );
}
