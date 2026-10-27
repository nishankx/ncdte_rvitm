import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CONFIG } from "../config";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import Button from "./Button";

export default function RegistrationModal({ isOpen, onClose }) {
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  useLockBodyScroll(isOpen);

  // Focus management & Esc key listener
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement;
      if (modalRef.current) {
        modalRef.current.focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        if (previouslyFocusedElementRef.current && previouslyFocusedElementRef.current.focus) {
          previouslyFocusedElementRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  const formHref =
    CONFIG.REGISTRATION_FORM_URL ||
    CONFIG.SUBMISSION_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLSdNOU6DmwyIOC94b-UIRu2Kw4BGqFOmzzVkcpz6GPXwHmL03w/viewform?usp=send_form";

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/40 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg bg-white shadow-lift focus:outline-none"
          >
            {/* Header */}
            <div className="relative p-5 pb-4 text-center sm:p-10">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-8 w-8 sm:h-9 sm:w-9 cursor-pointer items-center justify-center rounded-pill bg-mist-50 text-sm text-ink transition-colors hover:bg-mist"
              >
                ✕
              </button>

              <span className="mb-2 block text-eyebrow uppercase tracking-widest text-graphite">
                NCDTE-2026 · RVITM Bengaluru
              </span>
              <h2
                id="modal-title"
                className="font-sans text-2xl font-bold leading-tight text-ink sm:text-3xl"
              >
                Author Registration &amp; Submission
              </h2>
              <p className="mx-auto mt-2 max-w-md text-small text-graphite">
                Complete your paper submission and registration through our official form.
              </p>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 px-4 pb-6 sm:space-y-6 sm:px-10 sm:pb-8">
              {/* Step 1: Google Form */}
              <div className="rounded-lg border border-slate-200/80 bg-mist-50/50 p-4 sm:p-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00545f] font-sans text-xs font-bold text-white">
                    1
                  </span>
                </div>
                <p className="mt-2 text-small leading-relaxed text-graphite pl-10 text-justify">
                  Fill in your author details, institution, research track, and upload your manuscript through the official conference Google Form.
                </p>
                <div className="mt-4 pl-10">
                  <Button
                    variant="primary"
                    href={formHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium"
                  >
                    Open Google Registration Form ↗
                  </Button>
                </div>
              </div>

              {/* Step 2: Payment Email Notification */}
              <div className="rounded-lg border border-slate-200/80 bg-mist-50/50 p-4 sm:p-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00545f] font-sans text-xs font-bold text-white">
                    2
                  </span>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    Payment Procedures via Email
                  </h3>
                </div>
                <p className="mt-2 text-small leading-relaxed text-graphite pl-10 text-justify">
                  Once your submission is reviewed, our conference team will send the applicable fee payment procedures (₹1,300 for UG/PG Students &amp; Academicians, ₹200 for extra members) directly to your registered email address.
                </p>
              </div>

              {/* Notice with Aggressive Flicker Highlight Animation */}
              <div className="relative overflow-hidden rounded-xl border-2 border-[#00545f] bg-gradient-to-r from-[#00545f]/15 via-[#ecffb6]/35 to-[#00545f]/15 p-4 text-center text-caption leading-relaxed text-ink animate-flicker">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00545f] opacity-85" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00545f] shadow-[0_0_8px_#00545f]" />
                  </span>
                  <strong className="text-eyebrow font-black uppercase tracking-widest text-[#00545f]">
                    Important Notice
                  </strong>
                </div>
                <p className="font-extrabold text-ink text-[15px]">
                  Registrations will commence after paper acceptance.
                </p>
                <p className="mt-1 text-caption text-graphite font-medium text-justify">
                  Authors of accepted papers or posters must complete fee payment on or before <strong>25 November 2026</strong>. One registration kit will be provided per registration.
                </p>
              </div>
            </div>

            {/* Centered Footer */}
            <div className="sticky bottom-0 flex justify-center bg-mist-50 px-8 py-4">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer text-caption font-semibold uppercase tracking-wider text-graphite hover:text-ink"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
