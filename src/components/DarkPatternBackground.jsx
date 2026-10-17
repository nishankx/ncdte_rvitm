import React from "react";

export default function DarkPatternBackground({
  circlePosition = "right", // "right" | "left" | "center" | "both" | "none"
  className = "",
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-0 select-none overflow-hidden ${className}`}
    >
      {/* Subtle Dotted Background Matrix - fills negative space smoothly */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.2px,transparent_1.2px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,#000_60%,transparent_95%)]" />

      {/* Concentric Circles - Right Position */}
      {(circlePosition === "right" || circlePosition === "both") && (
        <svg
          className="absolute -right-24 -top-24 h-[500px] w-[500px] text-white/[0.05] sm:h-[650px] sm:w-[650px]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="80" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="300" cy="300" r="360" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="430" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      )}

      {/* Concentric Circles - Left Position */}
      {(circlePosition === "left" || circlePosition === "both") && (
        <svg
          className="absolute -bottom-24 -left-28 h-[500px] w-[500px] text-white/[0.05] sm:h-[650px] sm:w-[650px]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="80" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="300" cy="300" r="360" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="430" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      )}

      {/* Concentric Circles - Center Position */}
      {circlePosition === "center" && (
        <svg
          className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 text-white/[0.05] sm:h-[750px] sm:w-[750px]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="90" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="230" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="300" cy="300" r="370" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="440" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      )}
    </div>
  );
}
