import React from "react";

export default function Glow({
  className = "",
  color = "lavender", // "lavender" | "ice" | "aurora"
}) {
  const colorMap = {
    lavender: "bg-[rgba(167,139,250,0.35)]",
    ice: "bg-[rgba(56,189,248,0.28)]",
    aurora:
      "bg-gradient-to-r from-[rgba(0,212,255,0.3)] via-[rgba(31,107,255,0.25)] to-[rgba(139,61,255,0.3)]",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-[90px] ${
        colorMap[color] || colorMap.lavender
      } ${className}`}
    />
  );
}
