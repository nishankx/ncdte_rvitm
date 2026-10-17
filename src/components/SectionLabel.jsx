import React from "react";

export default function SectionLabel({ children, onWhite = false, className = "" }) {
  return (
    <div className={`mb-5 flex justify-center ${className}`}>
      <span
        className={`inline-flex items-center rounded-pill px-3 py-2 text-eyebrow uppercase tracking-widest ${onWhite ? "bg-mist-50 text-ink shadow-none" : "bg-white text-ink shadow-pill"
          }`}
      >
        {children}
      </span>
    </div>
  );
}
