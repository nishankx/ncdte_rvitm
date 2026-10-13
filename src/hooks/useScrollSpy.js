import { useState, useEffect } from "react";

const DEFAULT_SECTIONS = [
  "home",
  "about",
  "institution",
  "department",
  "tracks",
  "guidelines",
  "why",
  "process",
  "dates",
  "registration",
  "committee",
  "faq",
];

export function useScrollSpy(sectionIds = DEFAULT_SECTIONS, offset = 140) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (typeof window === "undefined" || !sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      // If above first section
      setActiveId("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
