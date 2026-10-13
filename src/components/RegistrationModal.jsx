import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONFIG } from '../config';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import Button from './Button';

function ModalQRCode({ src, alt, label }) {
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-mist-50 rounded-md my-4 max-w-[200px] mx-auto select-none">
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="w-32 h-32 object-contain rounded-md"
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-32 h-32 rounded-md bg-white flex flex-col items-center justify-center text-center p-2 text-graphite shadow-soft">
          <span className="text-caption font-semibold text-ink">{label}</span>
          <span className="text-[11px] text-graphite mt-1">Portal Code</span>
        </div>
      )}
      <span className="text-caption text-graphite font-medium mt-2 text-center">
        {label}
      </span>
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
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop: bg-ink/40 backdrop-blur-md */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/40 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card: bg-white rounded-lg shadow-lift, no border */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lift z-10 focus:outline-none"
          >
            {/* Header: no borders */}
            <div className="p-8 sm:p-10 pb-6 relative">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-6 right-6 w-9 h-9 rounded-pill bg-mist-50 hover:bg-mist text-ink flex items-center justify-center transition-colors text-sm cursor-pointer"
              >
                ✕
              </button>

              <span className="text-eyebrow uppercase text-graphite tracking-widest block mb-2">
                NCDTE-2026 · RVITM Bengaluru
              </span>
              <h2 id="modal-title" className="font-serif italic text-3xl sm:text-4xl text-ink leading-tight">
                Complete Your Registration
              </h2>
              <p className="text-small text-graphite mt-2">
                Follow the 2-step procedure for paper submission and author registration.
              </p>
            </div>

            {/* Modal Body */}
            <div className="px-8 sm:px-10 pb-8 space-y-10">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif italic text-[36px] text-aurora leading-none">
                    1
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-ink">
                      Step 1: Submit your paper
                    </h3>
                    <p className="text-small text-graphite">
                      Scan the QR code below to access the submission form.
                    </p>
                  </div>
                </div>

                <ModalQRCode
                  src="/images/qr-submission.png"
                  alt="Submission QR Code"
                  label="Submission QR Portal"
                />

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Button
                    variant="primary"
                    href={submissionHref}
                    target={CONFIG.SUBMISSION_URL ? "_blank" : undefined}
                  >
                    Submit Your Paper
                  </Button>
                  {!CONFIG.SUBMISSION_URL && (
                    <span className="text-caption text-graphite">
                      Fallback: Email submission
                    </span>
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 pt-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif italic text-[36px] text-aurora leading-none">
                    2
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-ink">
                      Step 2: Pay the registration fee
                    </h3>
                    <p className="text-small text-graphite">
                      Scan the QR code below to complete your fee payment.
                    </p>
                  </div>
                </div>

                <ModalQRCode
                  src="/images/qr-payment.png"
                  alt="Payment QR Code"
                  label="Fee Payment QR"
                />

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Button
                    variant="primary"
                    href={registrationHref}
                    target={CONFIG.REGISTRATION_URL ? "_blank" : undefined}
                  >
                    Pay Registration Fee
                  </Button>
                  {!CONFIG.REGISTRATION_URL && (
                    <span className="text-caption text-graphite">
                      Fallback: Email registration
                    </span>
                  )}
                </div>
              </div>

              {/* Note */}
              <div className="p-4 bg-mist-50 rounded-md text-caption text-graphite leading-relaxed">
                <strong className="text-ink">Note:</strong> Authors of accepted papers must complete the registration process using the designated registration link.
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="sticky bottom-0 bg-mist-50 px-8 py-4 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="text-caption font-semibold text-graphite hover:text-ink uppercase tracking-wider cursor-pointer"
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
