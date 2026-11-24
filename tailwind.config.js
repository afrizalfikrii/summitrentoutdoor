/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SUMMIT Brand Core Tokens
        forest: "#1B4332",
        "forest-deep": "#012D1D",
        "forest-dark": "#143225",
        moss: "#2D6A4F",
        cream: "#F5F1E8",
        "cream-bright": "#FCF9F8",
        adventure: "#D98B36",
        "adventure-hover": "#C27725",
        charcoal: "#252525",
        sage: "#DAD7CD",
        "sage-light": "#E8E5DF",

        // Editorial Expedition Design System Tokens
        primary: "#1B4332",
        "primary-deep": "#012D1D",
        "primary-container": "#1B4332",
        "on-primary": "#FFFFFF",
        "primary-fixed": "#C1ECD4",
        "primary-fixed-dim": "#A5D0B9",
        secondary: "#2D6A4F",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#AEEECB",
        "on-secondary-container": "#316E52",
        tertiary: "#3C1F00",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#5A3200",
        "on-tertiary-container": "#D98B36",
        surface: "#FCF9F8",
        "surface-cream": "#F5F1E8",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F5F1E8",
        "surface-container": "#EAE7E1",
        "surface-container-high": "#E8E5DF",
        "on-surface": "#252525",
        "on-surface-variant": "#414844",
        outline: "#717973",
        "outline-variant": "#DAD7CD",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "Oswald", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
        heading: ["var(--font-oswald)", "Oswald", "sans-serif"],
        body: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      boxShadow: {
        editorial: "0 4px 16px rgba(37, 37, 37, 0.06)",
      },
    },
  },
  plugins: [],
};
