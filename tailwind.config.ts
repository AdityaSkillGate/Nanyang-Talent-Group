import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#172A73",
          "navy-deep": "#202185",
          "navy-dark": "#0F1C4D",
          red: "#D71920",
          "red-deep": "#DF0912",
          "red-hover": "#B8141A",
          blue: "#1FA7D6",
          "blue-light": "#9BD2EB",
          "blue-soft": "#EAF7F9",
          gold: "#C7A04B",
          "gold-light": "#F3E97C",
          "gold-soft": "#FAF6EA",
        },
        surface: {
          canvas: "#F8F9FB",
          card: "#FFFFFF",
          muted: "#F0F2F5",
          border: "#E4E7EC",
          "border-dark": "#D0D5DD",
        },
        ink: {
          primary: "#172033",
          secondary: "#475467",
          muted: "#667085",
          light: "#98A2B3",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans, Inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        chinese: [
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04)",
        card: "0 4px 12px rgba(16, 24, 40, 0.06)",
        hover: "0 10px 24px rgba(23, 42, 115, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
