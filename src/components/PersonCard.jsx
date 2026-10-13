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
      className="group mx-auto flex select-none flex-col items-center text-center"
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-[#00545f]/10 bg-mist-50 shadow-soft">
        {!imgError && member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-aurora-ice via-aurora-lavender to-white">
            <span className="select-none font-serif text-[72px] leading-none text-ink/70">
              {initials}
            </span>
          </div>
        )}
      </div>

      <span className="mt-5 block text-[13px] font-bold uppercase tracking-[0.14em] text-graphite">
        {member.role}
      </span>

      <h4 className="mt-2 font-sans text-[22px] font-semibold leading-snug text-ink">
        {member.name}
      </h4>

      <p className="mt-1 text-[16px] leading-relaxed text-graphite">{member.designation}</p>
    </motion.article>
  );
}
