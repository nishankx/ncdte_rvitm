import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CONFIG } from '../config';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { X, Send, CreditCard, AlertCircle, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function RegistrationModal({ isOpen, onClose, initialStep = "submission" }) {
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  useLockBodyScroll(isOpen);

  // Focus management & Esc key listener
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement;
      // Focus modal container
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 focus:outline-none"
          >
            {/* Header banner */}
            <div className="bg-gradient-to-r from-banner to-royal text-white p-6 sm:p-8 relative">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-sky"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-semibold uppercase tracking-widest text-sky block mb-1">
                NCDTE-2026 · RVITM Bengaluru
              </span>
              <h2 id="modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">
                Complete Your Registration
              </h2>
              <p className="text-sky/90 text-xs sm:text-sm mt-1">
                Follow the 2-step procedure for paper submission and author registration.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-royal/40 transition-colors">
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-royal text-white font-heading font-bold text-sm flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-ink">
                      Step 1: Submit your paper
                    </h3>
                    <p className="text-muted text-xs sm:text-sm mt-1">
                      Upload your manuscript adhering to conference format and similarity guidelines (&lt; 15%).
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-2">
                  <Button
                    variant="filled"
                    href={submissionHref}
                    target={CONFIG.SUBMISSION_URL ? "_blank" : undefined}
                    className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-5 uppercase font-semibold flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Your Paper</span>
                  </Button>
                  {!CONFIG.SUBMISSION_URL && (
                    <span className="text-[11px] text-muted flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-royal" />
                      Fallback: Email submission
                    </span>
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-royal/40 transition-colors">
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-banner text-white font-heading font-bold text-sm flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-ink">
                      Step 2: Pay the registration fee
                    </h3>
                    <p className="text-muted text-xs sm:text-sm mt-1">
                      Rs. 1300 for Author / Rs. 200 for extra team members before 20 November 2026.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-2">
                  <Button
                    variant="filled"
                    href={registrationHref}
                    target={CONFIG.REGISTRATION_URL ? "_blank" : undefined}
                    className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-5 uppercase font-semibold flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay Registration Fee</span>
                  </Button>
                  {!CONFIG.REGISTRATION_URL && (
                    <span className="text-[11px] text-muted flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-royal" />
                      Fallback: Email registration
                    </span>
                  )}
                </div>
              </div>

              {/* Mandatory Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 text-amber-900 text-xs sm:text-sm leading-relaxed">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Note:</strong> Authors of accepted papers must complete the registration process using the designated registration link.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="text-xs sm:text-sm font-semibold text-muted hover:text-ink px-4 py-2 transition-colors cursor-pointer"
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
