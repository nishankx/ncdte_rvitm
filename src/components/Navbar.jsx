import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import { useScrollSpy } from "../hooks/useScrollSpy";

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
      className={`sticky top-0 z-50 h-[72px] bg-white transition-shadow duration-300 ${
        isScrolled || isOpen ? "shadow-soft" : ""
      }`}
    >
      <Container className="h-full">
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: Wordmark linking to #home */}
          <div className="flex items-center justify-start">
            <a
              href="#home"
              className="group inline-flex select-none items-center gap-1.5 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora-azure"
            >
              <span className="font-sans text-[22px] font-bold tracking-tight">NCDTE</span>
              <span className="text-aurora font-serif text-[22px] font-normal italic">2026</span>
            </a>
          </div>

          {/* Center (visible from xl): Desktop Links mathematically centered */}
          <nav className="hidden items-center gap-8 xl:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              const isHovered = hoveredId === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative cursor-pointer select-none py-1 font-sans text-[15px] transition-colors ${
                    isActive ? "font-semibold text-ink" : "font-medium text-ink hover:text-ink"
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="pointer-events-none absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet"
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
                      className="pointer-events-none absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-azure to-aurora-violet opacity-40"
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
              className="flex h-11 w-11 cursor-pointer select-none flex-col items-center justify-center gap-1.5 rounded-pill bg-white/70 text-ink shadow-pill backdrop-blur-xl transition-colors hover:bg-white xl:hidden"
            >
              <span
                className={`h-[2px] w-5 origin-center rounded-full bg-ink transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 origin-center rounded-full bg-ink transition-all duration-300 ${
                  isOpen ? "-translate-y-0 -rotate-45" : ""
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
            className="absolute left-0 right-0 top-[72px] z-40 overflow-hidden rounded-b-lg bg-white shadow-lift xl:hidden"
          >
            <div className="mx-auto flex max-w-sm flex-col items-center px-6 py-8 text-center">
              <nav className="mb-6 flex w-full flex-col items-center space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={handleLinkClick}
                      className={`w-full py-3 font-sans text-[24px] font-medium transition-colors ${
                        isActive ? "text-aurora font-semibold" : "text-ink hover:text-ink/70"
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
                className="h-12 w-full text-[15px]"
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
