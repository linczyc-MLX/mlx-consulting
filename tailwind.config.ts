import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#fffbf5",
          dark: "#f7f2e9",
          alt: "#faf9f5",
          olive: "#fdfcee",
        },
        dark: {
          DEFAULT: "#21201b",
          alt: "#211f1a",
          near: "#141413",
        },
        "accent-orange": "#ff833b",
        "teal-dark": "#1f3630",
        "text-primary": "#21201b",
        "text-on-dark": "#fffbf5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        mono: ["Fragment Mono", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "10px",
        pill: "20px",
      },
      boxShadow: {
        "orange-glow": "0px 1px 12px 10px rgb(255 131 59)",
      },
    },
  },
  plugins: [],
};

export default config;
