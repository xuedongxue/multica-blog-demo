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
      colors: {
        apple: {
          blue: "#0071e3",
          gray: {
            50: "#f5f5f7",
            100: "#f5f5f7",
            200: "#6e6e73",
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
      fontFamily: {
        display: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
