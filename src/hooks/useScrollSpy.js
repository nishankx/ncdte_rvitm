import { useState, useEffect } from "react";

const DEFAULT_SECTIONS = [
  "home",
  "dates",
  "about",
  "institution",
  "department",
  "tracks",
  "guidelines",
  "why",
  "process",
  "registration",
  "committee",
  "faq",
];

export function useScrollSpy(sectionIds = DEFAULT_SECTIONS, offset = 120) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (typeof window === "undefined" || !sectionIds.length) return;

    const handleScroll = () => {
      // Check if user is scrolled to the very bottom of the document
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Check if user is at the top of the page
      if (window.scrollY < 180) {
        setActiveId("home");
        return;
      }

      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      setActiveId("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
