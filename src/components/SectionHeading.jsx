import React from "react";

export default function SectionHeading({ children, className = "", align = "center" }) {
  const alignClasses = align === "left" ? "text-left mx-0" : "text-center mx-auto";
  const defaultTextColor = className.includes("text-") ? "" : "text-ink";

  return (
    <h2
      className={`mb-6 max-w-[22ch] font-sans font-bold text-h2 leading-tight tracking-tight ${defaultTextColor} sm:mb-8 md:mb-10 ${alignClasses} ${className}`}
    >
      {children}
    </h2>
  );
}
