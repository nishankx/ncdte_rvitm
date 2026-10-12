import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function getInitials(name) {
  if (!name) return "RC";
  // Remove common prefixes/titles
  const cleanName = name
    .replace(/^(Dr\.|Dr|Sri\.|Sri|Ms\.|Ms|Mr\.|Mr|Prof\.|Prof)\s+/i, '')
    .trim();

  // Split into parts (removing punctuation like dots)
  const parts = cleanName.split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "RC";
  if (parts.length === 1) {
    const single = parts[0].replace(/[^a-zA-Z]/g, '');
    return single.slice(0, 2).toUpperCase() || "RC";
  }

  // Get first valid letter from first word and last word (or second word)
  const firstLetter = parts[0].replace(/[^a-zA-Z]/g, '')[0] || '';
  const secondPart = parts.length > 2 && parts[1].replace(/[^a-zA-Z]/g, '').length > 0
    ? parts[1]
    : parts[parts.length - 1];
  const secondLetter = secondPart.replace(/[^a-zA-Z]/g, '')[0] || '';

  const initials = `${firstLetter}${secondLetter}`.toUpperCase();
  return initials.length === 2 ? initials : cleanName.slice(0, 2).toUpperCase();
}

export default function PersonCard({ member }) {
  const shouldReduceMotion = useReducedMotion();
  const initials = getInitials(member.name);

  // Varied subtle gradients based on role or name length for visual richness
  const gradients = [
    "from-royal to-banner",
    "from-banner to-indigoDeep",
    "from-royal to-sky-600",
    "from-indigoDeep to-plum",
  ];
  const gradientIndex = (member.name.length) % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group h-full justify-between"
    >
      <div className="flex flex-col items-center w-full">
        {/* Initials Avatar */}
        <div
          className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br ${gradient} text-white font-heading font-bold text-lg sm:text-xl flex items-center justify-center shadow-md mb-4 ring-4 ring-sky/30 group-hover:ring-sky/60 transition-all`}
          aria-hidden="true"
        >
          <span>{initials}</span>
        </div>

        {/* Role tag */}
        <span className="text-[11px] font-semibold tracking-wider text-royal uppercase mb-1.5 px-2.5 py-0.5 rounded-full bg-sky/20">
          {member.role}
        </span>

        {/* Full Name */}
        <h3 className="text-base sm:text-lg font-bold text-ink group-hover:text-royal transition-colors mt-1">
          {member.name}
        </h3>
      </div>

      {/* Designation */}
      <p className="text-xs sm:text-sm text-muted mt-2 font-normal leading-relaxed">
        {member.designation}
      </p>
    </motion.div>
  );
}
