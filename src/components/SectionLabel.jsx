import React from "react";

export default function SectionLabel({ children, onWhite = false, onDark = false, className = "" }) {
  let badgeStyle = "bg-white text-ink shadow-pill";
  if (onDark) {
    badgeStyle = "bg-white/10 text-white border border-white/15 backdrop-blur-md shadow-none";
  } else if (onWhite) {
    badgeStyle = "bg-mist-50 text-ink shadow-none";
  }

  return (
    <div className={`mb-5 flex justify-center ${className}`}>
      <span
        className={`inline-flex items-center rounded-pill px-3 py-2 text-eyebrow uppercase tracking-widest ${badgeStyle}`}
      >
        {children}
      </span>
    </div>
  );
}
