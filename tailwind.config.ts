import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "apple-blue": "#0071e3",
        "apple-gray": {
          100: "#f5f5f7",
          200: "#e8e8ed",
          300: "#d2d2d7",
          400: "#86868b",
          500: "#6e6e73",
        },
      },
      backgroundImage: {
        "apple-blue-gradient":
          "linear-gradient(145deg, #0071e3 0%, #2997ff 45%, #6eb4ff 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
