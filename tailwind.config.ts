import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monsterrat: ["var(--font-monsterrat)"],
        "space-mono": ["var(--font-space-mono)"],
        inconsolata: ["var(--font-inconsolata)"],
        poppins: ["var(--font-poppins)"],
        "pt-serif": ["var(--font-pt-serif)"],
        "crimson-pro": ["var(--font-crimson-pro)"],
        lora: ["var(--font-lora)"],
        "playfair-display": ["var(--font-playfair-display)"],
        "source-code-pro": ["var(--font-source-code-pro)"],
        "noto-sans": ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
