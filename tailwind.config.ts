import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "var(--font-display)",
          "DM Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-dm-mono)", "DM Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      colors: {
        apple: {
          blue: "#0071e3",
          gray: {
            50: "#f5f5f7",
            100: "#f5f5f7",
            200: "#e8e8ed",
            300: "#d2d2d7",
            400: "#86868b",
            500: "#6e6e73",
            900: "#1d1d1f",
          },
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
