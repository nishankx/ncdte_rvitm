import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';
import MobileDrawer from './MobileDrawer';
import { Menu } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const navLinks = [
    { id: "about", href: "#about", label: "About" },
    { id: "tracks", href: "#tracks", label: "Tracks" },
    { id: "guidelines", href: "#guidelines", label: "Guidelines" },
    { id: "dates", href: "#dates", label: "Dates" },
    { id: "committee", href: "#committee", label: "Committee" },
    { id: "faq", href: "#faq", label: "FAQ" },
  ];

  const sectionIds = navLinks.map((l) => l.id);
  const activeId = useScrollSpy(sectionIds, 120);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100"
        }`}
      >
        {/* Top reading progress bar */}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal via-banner to-plum"
        />

        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Left: RVITM logo / wordmark + small NCDTE-2026 brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-royal rounded-lg p-1"
          >
            {!imgError ? (
              <img
                src="/images/rvitm-logo.png"
                alt="RVITM Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-md"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-banner flex items-center justify-center font-heading font-black text-white text-xs sm:text-sm shadow">
                RV
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg text-ink tracking-tight group-hover:text-royal transition-colors leading-tight">
                NCDTE-2026
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-muted tracking-wide truncate max-w-[170px] sm:max-w-none">
                RVITM, Bengaluru
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with animated underline */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-royal rounded-md ${
                    isActive ? "text-royal font-semibold" : "text-slate-600 hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-royal rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Pill button "Register" + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenModal("registration")}
              className="bg-gradient-to-r from-royal to-banner hover:from-royal/90 hover:to-banner/90 text-white font-heading font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md shadow-royal/20 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal cursor-pointer"
            >
              Register
            </button>

            {/* Hamburger Button for Mobile/Tablet */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isDrawerOpen}
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-ink flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-royal cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navLinks={navLinks}
        activeId={activeId}
        onRegisterClick={onOpenModal}
      />
    </>
  );
}
