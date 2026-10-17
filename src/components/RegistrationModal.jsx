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
    "https://docs.google.com/forms/d/e/1FAIpQLSfVttXz-rb-C6C21Xz5obDIeep6rOzu0NIhewn3Eus3gDnUCQ/viewform?usp=publish-editor";

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
            <div className="relative p-8 pb-6 text-center sm:p-10">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-6 top-6 flex h-9 w-9 cursor-pointer items-center justify-center rounded-pill bg-mist-50 text-sm text-ink transition-colors hover:bg-mist"
              >
                ✕
              </button>

              <span className="mb-2 block text-eyebrow uppercase tracking-widest text-graphite">
                NCDTE-2026 · RVITM Bengaluru
              </span>
              <h2
                id="modal-title"
                className="font-serif text-3xl italic leading-tight text-ink sm:text-4xl"
              >
                Author Registration &amp; Submission
              </h2>
              <p className="mx-auto mt-2 max-w-md text-small text-graphite">
                Complete your paper submission and registration through our official form.
              </p>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 px-8 pb-8 sm:px-10">
              {/* Step 1: Google Form */}
              <div className="rounded-lg border border-slate-200/80 bg-mist-50/50 p-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00545f] font-sans text-xs font-bold text-white">
                    1
                  </span>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    Submit &amp; Register via Google Form
                  </h3>
                </div>
                <p className="mt-2 text-small leading-relaxed text-graphite pl-10">
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
              <div className="rounded-lg border border-slate-200/80 bg-mist-50/50 p-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00545f] font-sans text-xs font-bold text-white">
                    2
                  </span>
                  <h3 className="font-sans text-base font-semibold text-ink">
                    Payment Procedures via Email
                  </h3>
                </div>
                <p className="mt-2 text-small leading-relaxed text-graphite pl-10">
                  Once your submission is reviewed, our conference team will send the applicable fee payment procedures (₹1,300 for UG/PG Students &amp; Academicians, ₹200 for extra members) directly to your registered email address.
                </p>
              </div>

              {/* Notice */}
              <div className="rounded-md border border-[#00545f]/20 bg-[#00545f]/5 p-4 text-center text-caption leading-relaxed text-ink/80">
                <strong className="text-[#00545f]">Important:</strong> Authors of accepted papers or posters must complete fee payment on or before <strong>25 November 2026</strong>. One registration kit will be provided per registration.
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
