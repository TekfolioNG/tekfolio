import preset from "@nuxt/ui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue", 
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
    "./node_modules/@nuxt/ui/dist/**/*.{mjs,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        heading: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        "wider-custom": "0.05em",
      },
      boxShadow: {
        brand: "0 4px 12px rgba(210, 65, 12, 0.1)",
        "brand-lg": "0 8px 24px rgba(210, 65, 12, 0.15)",
      },
      // Optional: Keep brand colors for direct access if needed
      colors: {
        brand: {
          primary: {
            DEFAULT: "#D2410C", // Deep Orange
            light: "#EA580C",
            dark: "#9A2A00",
          },
          secondary: {
            DEFAULT: "#374151", // Dark Grey
            light: "#4B5563",
            dark: "#1F2937",
          },
          accent: "#F97316",   // Highlight orange
          success: "#059669",  // Emerald-600
          warning: "#D97706",  // Amber-600
          error: "#DC2626",    // Red-600
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};