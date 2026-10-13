/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        graphite: "#5F5F66",
        paper: "#FFFFFF",
        mist: {
          DEFAULT: "#EFEFEF",
          50: "#F6F6F7",
        },
        aurora: {
          cyan: "#00545f",
          azure: "#007a87",
          violet: "#d6fb00",
          lavender: "#ecffb6",
          ice: "#ecffb6",
          teal: "#00545f",
          lime: "#d6fb00",
          pale: "#ecffb6",
        },
        brand: {
          teal: "#00545f",
          lime: "#d6fb00",
          pale: "#ecffb6",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Cormorant Garamond", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,10,10,.04), 0 16px 40px -16px rgba(10,10,10,.10)",
        lift: "0 2px 4px rgba(10,10,10,.04), 0 30px 60px -22px rgba(70,70,180,.25)",
        pill: "0 4px 24px -8px rgba(90,80,220,.30)",
      },
      backgroundImage: {
        aurora: "linear-gradient(120deg, #00545f 0%, #007a87 45%, #d6fb00 100%)",
      },
      fontSize: {
        mega: [
          "clamp(6.5rem,22vw,20rem)",
          { lineHeight: ".82", letterSpacing: "-0.055em", fontWeight: "700" },
        ],
        serifxl: [
          "clamp(2.5rem,5.6vw,5.5rem)",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        h2: [
          "clamp(2.25rem,5vw,4.5rem)",
          { lineHeight: "1.04", letterSpacing: "-0.035em", fontWeight: "500" },
        ],
        h3: [
          "clamp(1.5rem,2.4vw,2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        body: ["1.1875rem", { lineHeight: "1.75" }], // 19px, was 17px
        lead: ["1.3125rem", { lineHeight: "1.7" }], // 21px, for About/Institution lead paragraphs (was 19-20px)
        small: ["1rem", { lineHeight: "1.65" }], // 16px, card descriptions, captions (was 14px)
        caption: ["0.9375rem", { lineHeight: "1.6" }], // 15px, minimum for any readable text
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.16em", fontWeight: "700" }], // 12px, was 11px
      },
    },
  },
  plugins: [],
};
