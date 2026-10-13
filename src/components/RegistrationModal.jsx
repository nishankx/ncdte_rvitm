import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CONFIG } from "../config";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import Button from "./Button";

function ModalQRCode({ src, alt, label }) {
  const [error, setError] = useState(false);

  return (
    <div className="mx-auto my-4 flex max-w-[200px] select-none flex-col items-center justify-center rounded-md bg-mist-50 p-4">
      {!error ? (
        <img
          src={src}
          alt={alt}
          width={128}
          height={128}
          className="h-32 w-32 rounded-md object-contain"
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-md bg-white p-2 text-center text-graphite shadow-soft">
          <span className="text-caption font-semibold text-ink">{label}</span>
          <span className="mt-1 text-[11px] text-graphite">Portal Code</span>
        </div>
      )}
      <span className="mt-2 text-center text-caption font-medium text-graphite">{label}</span>
    </div>
  );
}

export default function RegistrationModal({ isOpen, onClose, initialStep = "submission" }) {
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

  const submissionHref =
    CONFIG.SUBMISSION_URL && CONFIG.SUBMISSION_URL.trim() !== ""
      ? CONFIG.SUBMISSION_URL
      : `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent("NCDTE-2026 Paper Submission")}`;

  const registrationHref =
    CONFIG.REGISTRATION_URL && CONFIG.REGISTRATION_URL.trim() !== ""
      ? CONFIG.REGISTRATION_URL
      : `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent("NCDTE-2026 Registration")}`;

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
            {/* Header: centered */}
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
                Complete Your Registration
              </h2>
              <p className="mx-auto mt-2 max-w-md text-small text-graphite">
                Follow the 2-step procedure for paper submission and author registration.
              </p>
            </div>

            {/* Modal Body */}
            <div className="space-y-10 px-8 pb-8 sm:px-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* Step badge above step, centered */}
                <span className="text-aurora block font-serif text-[40px] italic leading-none">
                  1
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-ink">
                    Step 1: Submit your paper
                  </h3>
                  <p className="text-small text-graphite">
                    Scan the QR code below to access the submission form.
                  </p>
                </div>

                <ModalQRCode
                  src="/images/qr-submission.png"
                  alt="Submission QR Code"
                  label="Submission QR Portal"
                />

                <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                  <Button
                    variant="primary"
                    href={submissionHref}
                    target={CONFIG.SUBMISSION_URL ? "_blank" : undefined}
                  >
                    Submit Your Paper
                  </Button>
                  {!CONFIG.SUBMISSION_URL && (
                    <span className="text-caption text-graphite">Fallback: Email submission</span>
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center space-y-4 pt-4 text-center">
                {/* Step badge above step, centered */}
                <span className="text-aurora block font-serif text-[40px] italic leading-none">
                  2
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-ink">
                    Step 2: Pay the registration fee
                  </h3>
                  <p className="text-small text-graphite">
                    Scan the QR code below to complete your fee payment.
                  </p>
                </div>

                <ModalQRCode
                  src="/images/qr-payment.png"
                  alt="Payment QR Code"
                  label="Fee Payment QR"
                />

                <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                  <Button
                    variant="primary"
                    href={registrationHref}
                    target={CONFIG.REGISTRATION_URL ? "_blank" : undefined}
                  >
                    Pay Registration Fee
                  </Button>
                  {!CONFIG.REGISTRATION_URL && (
                    <span className="text-caption text-graphite">Fallback: Email registration</span>
                  )}
                </div>
              </div>

              {/* Note */}
              <div className="rounded-md bg-mist-50 p-4 text-center text-caption leading-relaxed text-graphite">
                <strong className="text-ink">Note:</strong> Authors of accepted papers must complete
                the registration process using the designated registration link.
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
