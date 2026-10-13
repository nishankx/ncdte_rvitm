import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG } from "../config";

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
    <div className="mx-auto mt-20 w-full max-w-3xl md:mt-24">
      <div className="relative flex flex-col items-center overflow-hidden rounded-lg bg-ink p-8 text-center text-white shadow-soft sm:p-12">
        {/* Aurora corner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-aurora-cyan via-aurora-azure to-aurora-violet opacity-40 blur-3xl"
        />

        <div className="relative z-10 flex w-full flex-col items-center space-y-8 text-center">
          <div>
            <span className="mb-2 block text-eyebrow uppercase tracking-widest text-white/60">
              Direct Inquiries
            </span>
            <h4 className="font-serif text-3xl italic text-white sm:text-4xl">
              Conference Helpdesk
            </h4>
            <p className="mx-auto mt-2 max-w-[50ch] text-justify text-small leading-relaxed text-white/70">
              Contact our helpline for direct assistance with paper submissions, author
              registrations, or local guidance.
            </p>
          </div>

          {/* Helpline Numbers as centered flex-wrap gap-3 pills */}
          <div className="w-full space-y-3 pt-2">
            <span className="block text-caption font-semibold uppercase tracking-wider text-white/50">
              Helpline Numbers (Tap to call / click to copy)
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {CONFIG.CONTACT_PHONES.map((phone, idx) => {
                const isCopied = copiedPhone === phone;
                return (
                  <div
                    key={idx}
                    className="group flex items-center justify-between gap-3 rounded-pill bg-white/10 px-4 py-3 transition-colors hover:bg-white/15"
                  >
                    <a
                      href={`tel:+91${phone}`}
                      className="font-sans text-small font-medium tabular-nums text-white transition-colors group-hover:text-aurora-cyan"
                    >
                      +91 {phone}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(phone)}
                      aria-label={`Copy phone number ${phone}`}
                      className="cursor-pointer text-caption text-white/70 transition-colors hover:text-white"
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
                className="rounded-md bg-white/15 p-2.5 text-center text-caption font-medium text-aurora-ice"
              >
                Copied +91 {copiedPhone} to clipboard!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email in white: centered */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <span className="text-caption font-semibold uppercase tracking-wider text-white/50">
              Official Correspondence:
            </span>
            <a
              href={`mailto:${CONFIG.EMAIL}`}
              className="break-all font-sans text-small text-white transition-colors hover:text-aurora-cyan"
            >
              {CONFIG.EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
