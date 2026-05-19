import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        electric: "#38bdf8",
        neon: "#2563eb",
      },
      boxShadow: {
        glow: "0 0 80px rgba(56, 189, 248, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
