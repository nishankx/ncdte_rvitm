import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import Container from './Container';
import Button from './Button';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const navRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const activeId = useScrollSpy();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const navLinks = [
    { id: "about", label: "About" },
    { id: "department", label: "Department" },
    { id: "tracks", label: "Tracks" },
    { id: "guidelines", label: "Guidelines" },
    { id: "dates", label: "Dates" },
    { id: "committee", label: "Committee" },
    { id: "faq", label: "FAQ" },
  ];

  // Close mobile dropdown on outside click or Esc
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 h-[72px] -mb-[72px] transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white/75 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <Container className="h-full">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full">
          {/* Left: Wordmark linking to #home */}
          <div className="flex items-center justify-start">
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 text-ink select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora-azure"
            >
              <span className="font-sans font-bold text-[22px] tracking-tight">
                NCDTE
              </span>
              <span className="font-serif italic font-normal text-aurora text-[22px]">
                2026
              </span>
            </a>
          </div>

          {/* Center (visible from xl): Desktop Links mathematically centered */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              const isHovered = hoveredId === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative py-1 text-[15px] font-sans transition-colors cursor-pointer select-none ${
                    isActive
                      ? "font-semibold text-ink"
                      : "font-medium text-ink hover:text-ink"
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Active Indicator Bar: layoutId="nav-indicator" */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet pointer-events-none"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                    />
                  )}

                  {/* Hover Preview Bar at 40% opacity */}
                  {!isActive && isHovered && (
                    <motion.span
                      layoutId="nav-hover-bar"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet opacity-40 pointer-events-none"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Register Button + Mobile Hamburger (below xl) */}
          <div className="flex items-center justify-end gap-3">
            <Button
              variant="primary"
              onClick={() => onOpenModal("registration")}
              className="text-sm font-medium"
            >
              Register
            </Button>

            {/* Hamburger button (below xl) */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="xl:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-pill bg-white/70 backdrop-blur-xl shadow-pill text-ink hover:bg-white transition-colors cursor-pointer select-none"
            >
              <span
                className={`w-5 h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-ink rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-0" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile/Tablet Dropdown Panel (< xl) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden absolute top-[72px] left-0 right-0 bg-white shadow-lift rounded-b-lg overflow-hidden z-40"
          >
            <div className="max-w-sm mx-auto px-6 py-8 text-center flex flex-col items-center">
              <nav className="w-full flex flex-col items-center space-y-1 mb-6">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={handleLinkClick}
                      className={`w-full py-3 text-[24px] font-sans font-medium transition-colors ${
                        isActive
                          ? "text-aurora font-semibold"
                          : "text-ink hover:text-ink/70"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <Button
                variant="primary"
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal("registration");
                }}
                className="w-full h-12 text-[15px]"
              >
                Register
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
