import React from 'react';

export default function SectionLabel({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
      <span className="bg-gradient-to-r from-royal to-transparent text-white px-4 py-1 text-sm font-semibold tracking-wide uppercase rounded-l-md shadow-sm">
        {children}
      </span>
      <span className="w-2 h-2 rounded-full bg-royal/80 animate-pulse hidden sm:inline-block"></span>
    </div>
  );
}
