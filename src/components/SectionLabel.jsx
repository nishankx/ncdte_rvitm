import React from 'react';

export default function SectionLabel({ children, onWhite = false, className = "" }) {
  return (
    <div className={`flex justify-center mb-5 ${className}`}>
      <span
        className={`inline-flex items-center text-eyebrow uppercase px-3 py-2 rounded-pill tracking-widest ${
          onWhite ? "bg-mist-50 text-ink shadow-none" : "bg-white text-ink shadow-pill"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
