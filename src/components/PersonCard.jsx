import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function getInitials(name) {
  const cleaned = name.replace(/^(Dr\.|Sri\.|Ms\.|Mr\.|Prof\.)\s*/i, "").trim();
  const parts = cleaned.split(/[\s.]+/).filter(Boolean);
  if (parts.length === 0) return "NC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function PersonCard({ member, isChief = false }) {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const initials = getInitials(member.name);

  return (
    <motion.article
      className="group mx-auto flex select-none flex-col items-center text-center w-full max-w-[120px] sm:max-w-[130px]"
      whileHover={shouldReduceMotion ? {} : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Compact Minimal Photo */}
      <div className={`relative aspect-[4/5] w-20 sm:w-24 overflow-hidden rounded-xl border bg-mist-50 shadow-sm transition-all duration-300 group-hover:shadow-md ${
        isChief ? "border-[#00545f]/30 ring-2 ring-[#00545f]/15" : "border-[#00545f]/15"
      }`}>
        {!imgError && member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#ecffb6] via-[#d6fb00]/25 to-white">
            <span className="select-none font-serif text-2xl font-bold leading-none text-ink/70">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Role */}
      <span className="mt-2 block text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-graphite/70">
        {member.role}
      </span>

      {/* Name */}
      <h4 className="mt-0.5 font-sans text-xs sm:text-[13.5px] font-bold leading-snug text-ink">
        {member.name}
      </h4>

      {/* Designation */}
      <p className="mt-0.5 text-[10.5px] sm:text-[11.5px] leading-snug text-center text-graphite line-clamp-3">
        {member.designation}
      </p>
    </motion.article>
  );
}
