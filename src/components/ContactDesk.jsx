import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

export default function ContactDesk() {
  const [copiedPhone, setCopiedPhone] = useState(null);

  const handleCopy = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(phoneNumber);
    setTimeout(() => {
      setCopiedPhone(null);
    }, 2000);
  };

  return (
    <div className="mt-20 md:mt-24 mx-auto max-w-3xl">
      <div className="bg-ink text-white rounded-lg p-8 sm:p-12 relative overflow-hidden shadow-soft">
        {/* Aurora corner glow */}
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-aurora-cyan via-aurora-azure to-aurora-violet blur-3xl opacity-40 pointer-events-none"
        />

        <div className="relative z-10 space-y-8 text-center sm:text-left">
          <div>
            <span className="text-eyebrow uppercase text-white/60 tracking-widest block mb-2">
              Direct Inquiries
            </span>
            <h4 className="font-serif italic text-3xl sm:text-4xl text-white">
              Conference Helpdesk
            </h4>
            <p className="text-small text-white/70 mt-2 leading-relaxed max-w-[50ch]">
              Contact our helpline for direct assistance with paper submissions, author registrations, or local guidance.
            </p>
          </div>

          {/* Helpline Numbers as bg-white/10 rounded-pill buttons */}
          <div className="space-y-3 pt-2">
            <span className="text-caption uppercase tracking-wider text-white/50 block font-semibold">
              Helpline Numbers (Tap to call / click to copy)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONFIG.CONTACT_PHONES.map((phone, idx) => {
                const isCopied = copiedPhone === phone;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-white/10 hover:bg-white/15 px-4 py-3 rounded-pill transition-colors group"
                  >
                    <a
                      href={`tel:+91${phone}`}
                      className="font-sans font-medium text-small text-white group-hover:text-aurora-cyan transition-colors tabular-nums"
                    >
                      +91 {phone}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(phone)}
                      aria-label={`Copy phone number ${phone}`}
                      className="text-caption text-white/70 hover:text-white transition-colors cursor-pointer ml-2"
                    >
                      {isCopied ? "Copied ✓" : "Copy"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Copy Notification Toast */}
          <AnimatePresence>
            {copiedPhone && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="p-2.5 rounded-md bg-white/15 text-aurora-ice text-caption text-center font-medium"
              >
                Copied +91 {copiedPhone} to clipboard!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email in white: no border */}
          <div className="pt-4 flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-2">
            <span className="text-caption uppercase tracking-wider text-white/50 font-semibold">
              Official Correspondence:
            </span>
            <a
              href={`mailto:${CONFIG.EMAIL}`}
              className="text-small font-sans text-white hover:text-aurora-cyan transition-colors break-all"
            >
              {CONFIG.EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
