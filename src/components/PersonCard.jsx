import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function getInitials(name) {
  const cleaned = name.replace(/^(Dr\.|Sri\.|Ms\.|Mr\.|Prof\.)\s*/i, '').trim();
  const parts = cleaned.split(/[\s.]+/).filter(Boolean);
  if (parts.length === 0) return 'NC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function PersonCard({ member, isChief = false }) {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const initials = getInitials(member.name);

  return (
    <motion.article
      className="group text-center select-none"
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-mist-50">
        {!imgError && member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-aurora-ice via-aurora-lavender to-white flex items-center justify-center">
            <span className="font-serif text-[72px] text-ink/70 leading-none select-none">
              {initials}
            </span>
          </div>
        )}
      </div>

      <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-graphite block mt-5">
        {member.role}
      </span>

      <h4 className="font-sans font-semibold text-[22px] text-ink leading-snug mt-2">
        {member.name}
      </h4>

      <p className="text-[16px] text-graphite leading-relaxed mt-1">
        {member.designation}
      </p>
    </motion.article>
  );
}
