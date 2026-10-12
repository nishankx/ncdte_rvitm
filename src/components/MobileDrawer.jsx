import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function MobileDrawer({
  isOpen,
  onClose,
  navLinks,
  activeId,
  onRegisterClick,
}) {
  const shouldReduceMotion = useReducedMotion();
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-10 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-royal text-white flex items-center justify-center font-bold text-sm">
                    RV
                  </div>
                  <div>
                    <span className="font-heading font-black text-sm text-ink block leading-none">
                      NCDTE-2026
                    </span>
                    <span className="text-[10px] text-muted font-medium">RVITM Bengaluru</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-slate-300 text-ink flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-royal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-sky/20 text-banner font-bold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-royal"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? "text-banner" : "text-slate-400"}`} />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Action Bottom */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <Button
                variant="filled"
                onClick={() => {
                  onClose();
                  onRegisterClick("registration");
                }}
                className="w-full uppercase font-bold text-sm py-3"
              >
                Register Now
              </Button>
              <div className="text-center text-xs text-muted">
                4 December 2026 · RVITM Bengaluru
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
