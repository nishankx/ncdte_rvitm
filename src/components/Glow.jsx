import React from "react";

export default function Glow({
  className = "",
  color = "lavender", // "lavender" | "ice" | "aurora"
}) {
  const colorMap = {
    lavender: "bg-[rgba(236,255,182,0.35)]",
    ice: "bg-[rgba(214,251,0,0.22)]",
    aurora:
      "bg-gradient-to-r from-[rgba(0,84,95,0.28)] via-[rgba(214,251,0,0.25)] to-[rgba(236,255,182,0.30)]",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-[90px] ${colorMap[color] || colorMap.lavender
        } ${className}`}
    />
  );
}
