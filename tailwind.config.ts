import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#f8fafc",
        surface: "#ffffff",
        "accent-blue": "#3d63d1",
        "accent-blue-bright": "#4d7dff",
        "accent-cyan": "#0891b2",
        "accent-violet": "#7c3aed",
        "text-primary": "#0f172a",
        "text-secondary": "#475569",
        "text-muted": "#94a3b8",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
