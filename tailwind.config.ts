import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: "#0071e3",
          gray: {
            50: "#f5f5f7",
            900: "#1d1d1f",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
