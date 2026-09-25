/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        zaminTeal: {
          DEFAULT: "#014E48",
          dark: "#013D38",
          light: "#086358",
        },
        zaminBuddy: "#0B5647",
        zaminLangBg: "#E8F0EC",
        zaminNavy: "#1E293B",
        zaminDark: "#475569",
        zaminMuted: "#64748B",
        zaminBorder: "#E2E8F0",
        zaminPlaceholder: "#94A3B8",
        zaminDivider: "#F1F5F9",
        zaminWhite: "#FFFFFF",
        zaminCardBg: "rgba(24, 38, 32, 0.60)",
        zaminCardBorder: "rgba(255, 255, 255, 0.32)",
        zaminOverlay: "rgba(10, 26, 22, 0.45)",
      },
      borderRadius: {
        header: "36px",
        tab: "28px",
        card: "26px",
      },
    },
  },
  plugins: [],
};
