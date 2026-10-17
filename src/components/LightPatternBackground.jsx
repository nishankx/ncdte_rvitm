import React, { useId } from "react";

export default function LightPatternBackground({
  accent = "waves", // "waves" | "hex" | "diamond" | "cross-only"
  accentPosition = "right", // "right" | "left" | "both"
  className = "",
}) {
  const reactId = useId();
  const patternId = `light-cross-${reactId.replace(/:/g, "")}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-0 select-none overflow-hidden ${className}`}
    >
      {/* 1. Technical Plus-Grid / Drafting Crosshairs (Completely different from dots) */}
      <svg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,#000_55%,transparent_95%)]">
        <defs>
          <pattern
            id={patternId}
            width="38"
            height="38"
            patternUnits="userSpaceOnUse"
          >
            {/* Precision crosshair markers in bright cyan-teal */}
            <path
              d="M19 16v6M16 19h6"
              stroke="#007a87"
              strokeWidth="1.1"
              strokeLinecap="round"
              opacity="0.18"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* 2. Topographic Elevation Waves Accent (Different from concentric circles) */}
      {accent === "waves" && (
        <>
          {(accentPosition === "right" || accentPosition === "both") && (
            <svg
              className="absolute -right-20 -top-16 h-[500px] w-[500px] text-[#007a87]/20 sm:h-[650px] sm:w-[650px]"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 180 Q 200 90 340 210 T 580 160"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M40 240 Q 210 150 360 270 T 590 220"
                stroke="#65a30d"
                strokeWidth="1.1"
                opacity="0.3"
                strokeDasharray="6 5"
              />
              <path
                d="M60 310 Q 230 220 380 340 T 600 290"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M80 380 Q 250 280 400 410 T 610 360"
                stroke="#007a87"
                strokeWidth="1.1"
                opacity="0.35"
                strokeDasharray="4 6"
              />
              <path
                d="M100 450 Q 270 350 420 480 T 630 430"
                stroke="#65a30d"
                strokeWidth="1.2"
                opacity="0.25"
              />
              <path
                d="M120 520 Q 290 420 440 550 T 650 500"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="8 6"
              />
            </svg>
          )}

          {(accentPosition === "left" || accentPosition === "both") && (
            <svg
              className="absolute -bottom-20 -left-20 h-[500px] w-[500px] text-[#007a87]/20 sm:h-[650px] sm:w-[650px]"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 180 Q 200 90 340 210 T 580 160"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M40 240 Q 210 150 360 270 T 590 220"
                stroke="#65a30d"
                strokeWidth="1.1"
                opacity="0.3"
                strokeDasharray="6 5"
              />
              <path
                d="M60 310 Q 230 220 380 340 T 600 290"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M80 380 Q 250 280 400 410 T 610 360"
                stroke="#007a87"
                strokeWidth="1.1"
                opacity="0.35"
                strokeDasharray="4 6"
              />
              <path
                d="M100 450 Q 270 350 420 480 T 630 430"
                stroke="#65a30d"
                strokeWidth="1.2"
                opacity="0.25"
              />
            </svg>
          )}
        </>
      )}

      {/* 3. Hexagonal Honeycomb Tech Mesh (Different from circles and dots) */}
      {accent === "hex" && (
        <svg
          className={`absolute ${
            accentPosition === "left"
              ? "-left-16 top-1/4"
              : "-right-16 top-1/4"
          } h-[450px] w-[450px] text-[#007a87]/25 sm:h-[580px] sm:w-[580px]`}
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon nodes */}
          <polygon
            points="100,50 140,73 140,119 100,142 60,119 60,73"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <polygon
            points="180,50 220,73 220,119 180,142 140,119 140,73"
            stroke="#65a30d"
            strokeWidth="1.1"
            opacity="0.4"
            strokeDasharray="4 4"
          />
          <polygon
            points="140,119 180,142 180,188 140,211 100,188 100,142"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <polygon
            points="220,119 260,142 260,188 220,211 180,188 180,142"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon
            points="180,188 220,211 220,257 180,280 140,257 140,211"
            stroke="#65a30d"
            strokeWidth="1.2"
            opacity="0.35"
          />
          <polygon
            points="260,188 300,211 300,257 260,280 220,257 220,211"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeDasharray="6 4"
          />
          <polygon
            points="220,257 260,280 260,326 220,349 180,326 180,280"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <polygon
            points="300,257 340,280 340,326 300,349 260,326 260,280"
            stroke="#007a87"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      )}

      {/* 4. Isometric Diamond Hatch (Different from circles and dots) */}
      {accent === "diamond" && (
        <svg
          className={`absolute ${
            accentPosition === "left"
              ? "-left-16 bottom-10"
              : "-right-16 top-10"
          } h-[480px] w-[480px] text-[#007a87]/22 sm:h-[620px] sm:w-[620px]`}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Diamond drafting guidelines */}
          <line x1="50" y1="250" x2="250" y2="50" stroke="currentColor" strokeWidth="1.2" />
          <line x1="100" y1="300" x2="300" y2="100" stroke="#65a30d" strokeWidth="1" opacity="0.4" strokeDasharray="5 5" />
          <line x1="150" y1="350" x2="350" y2="150" stroke="currentColor" strokeWidth="1.2" />
          <line x1="200" y1="400" x2="400" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="250" y1="450" x2="450" y2="250" stroke="#65a30d" strokeWidth="1.2" opacity="0.35" />

          <line x1="250" y1="50" x2="450" y2="250" stroke="currentColor" strokeWidth="1.2" />
          <line x1="200" y1="100" x2="400" y2="300" stroke="#65a30d" strokeWidth="1" opacity="0.4" strokeDasharray="5 5" />
          <line x1="150" y1="150" x2="350" y2="350" stroke="currentColor" strokeWidth="1.2" />
          <line x1="100" y1="200" x2="300" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="50" y1="250" x2="250" y2="450" stroke="#007a87" strokeWidth="1.2" opacity="0.35" />
        </svg>
      )}
    </div>
  );
}
