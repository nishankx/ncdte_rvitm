import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeadlinePopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-4 w-full max-w-xl px-2 sm:px-0"
      >
        {/* Vibrant Multi-Color Ambient Glow Aura */}
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500 via-white to-red-500 blur-md transition duration-500 animate-pulse"
        />

        {/* Outer Gradient Border Box */}
        <div className="relative overflow-hidden rounded-md">
          {/* Inner Card with Glassmorphic Gradient */}
          <div className="flex gap-2 items-center justify-center relative rounded-[15px] bg-gradient-to-b from-white via-white/95 to-amber-50/60 p-4 sm:p-4 backdrop-blur-xl">
            {/*Alert Icon from /icons/alert.gif*/}
              <img src="/icons/alert.gif" alt="alert.gif" className="h-12 w-12 object-contain" />
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
              aria-label="Close notification"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              
              {/* Message Content */}
              <div className="flex-1 text-center sm:text-left">

                {/* Catchy Main Prompt */}
                <p className="mt-1 text-sm text-center font-semibold text-slate-800 sm:text-[15px] leading-snug">
                  Please submit your papers on or before{" "}
                  <span className="inline-block my-1 rounded-md bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 px-2 py-0.5 font-black text-white shadow-sm ring-1 ring-rose-400/30">
                    10 Nov, 2026
                  </span>
                </p>

                {/* Subtext info */}
                <p className="mt-1 text-sm text-center text-slate-600">
                 Peer review slots filling quickly. Early submissions receive priority evaluation!
                </p>
                {/* Arrow pointing to the Submit button */}
                <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] font-bold tracking-wide text-rose-700">
                  <span>Ready to submit? Click below</span>
                  <svg className="h-3.5 w-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
              
            </div>

            {/* Bottom Pointer / Directional Notch */}
            
          </div>
        </div>

        {/* Speech Bubble Arrow pointing to the Submit button */}
        <div
          aria-hidden="true"
          className="mx-auto -mt-1 h-2.5 w-5 bg-gradient-to-b from-amber-50/90 to-transparent [clip-path:polygon(50%_100%,0_0,100%_0)]"
        />
      </motion.div>
    </AnimatePresence>
  );
}
