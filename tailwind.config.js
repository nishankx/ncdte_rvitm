/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#3f5bd1",        // header / ribbons
        banner: {
          DEFAULT: "#06428f",
          light: "#0a56b8",
        },
        indigoDeep: "#2b2870",   // info panels
        sky: "#b9d0ff",          // accent light blue
        plum: "#b03a7a",         // footer bottom bar
        ink: "#0f172a",
        muted: "#5b6b84",
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15,23,42,.25)",
      },
    },
  },
  plugins: [],
};
