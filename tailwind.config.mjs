/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Purple & White theme (no black backgrounds)
        ink: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFAFA",
          softer: "#F5F3FF",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#FFFFFF",
          softer: "#F5F3FF",
        },
        cloud: "#2E1065",
        slate: "#6D5A8D",
        graphite: "#2E1065",
        ash: "#6D5A8D",
        line: {
          dark: "#DDD6FE",
          light: "#DDD6FE",
        },
        copper: { DEFAULT: "#7C3AED", dim: "#6D28D9" },
        cyan: { DEFAULT: "#A855F7", dim: "#9333EA" },
        violet: { DEFAULT: "#8B5CF6", dim: "#7C3AED" },
        moss: { DEFAULT: "#C084FC", dim: "#A855F7" },
        amber: { DEFAULT: "#DDD6FE", dim: "#C4B5FD" },
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
