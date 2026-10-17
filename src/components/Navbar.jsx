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
import { CONFIG } from "../config";

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
    { id: "tracks", label: "Call for Papers" },
    { id: "guidelines", label: "Guidelines" },
    { id: "dates", label: "Important Dates" },
    { id: "registration", label: "Registration" },
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
      if (window.innerWidth >= 1024) {
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

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }, 100);
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 h-[72px] bg-ink text-white transition-all duration-300 ${
        isScrolled || isOpen
          ? "shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-ink/95 backdrop-blur-md"
          : "bg-ink"
      }`}
    >
      {/* Bottom Ambient Accent Line matching Footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
      />
      {/* Ambient Dark Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[72px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#00545f]/25 to-transparent blur-[60px]"
      />

      <Container className="relative z-10 h-full !px-4 sm:!px-6 md:!px-12">
        <div className="flex h-full items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: Wordmark linking to #home */}
          <div className="flex items-center justify-start">
            <a
              href="#home"
              className="group inline-flex select-none items-center gap-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-aurora-azure"
            >
              <span className="font-sans text-[20px] font-bold tracking-tight text-white sm:text-[22px]">
                NCDTE
              </span>
              <span className="text-aurora font-serif text-[20px] font-normal italic sm:text-[22px]">
                2026
              </span>
            </a>
          </div>

          {/* Center (visible from lg): Desktop Links */}
          <nav className="hidden items-center gap-3.5 lg:flex xl:gap-7 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              const isHovered = hoveredId === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative cursor-pointer select-none whitespace-nowrap py-1 font-sans text-[13.5px] transition-colors xl:text-[15px] ${
                    isActive
                      ? "font-semibold text-white"
                      : "font-medium text-white/70 hover:text-white"
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

          {/* Right: Register Button + Mobile Hamburger (below lg) */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <Button
              variant="onDark"
              href={CONFIG.REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 px-4 text-xs font-semibold sm:h-10 sm:px-5 sm:text-sm"
            >
              Register
            </Button>

            {/* Hamburger button (below lg) */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-pill border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-colors hover:bg-white/20 sm:h-11 sm:w-11 lg:hidden"
            >
              <div className="relative flex h-3.5 w-5 flex-col justify-between">
                <span
                  className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                    isOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                    isOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile/Tablet Dropdown Panel (< lg) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[72px] z-40 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-white/10 bg-ink/95 backdrop-blur-xl shadow-2xl lg:hidden"
          >
            {/* Ambient accent divider */}
            <div
              aria-hidden="true"
              className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-[#007a87]/40 via-[#d6fb00]/30 to-transparent"
            />
            <div className="mx-auto flex max-w-sm flex-col items-center px-6 py-6 text-center">
              <nav className="mb-6 flex w-full flex-col items-center space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`w-full py-2.5 font-sans text-[18px] font-medium transition-colors sm:text-[20px] ${
                        isActive
                          ? "text-aurora font-semibold"
                          : "text-white/75 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <Button
                variant="onDark"
                href={CONFIG.REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="h-11 w-full text-[15px] font-semibold"
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
