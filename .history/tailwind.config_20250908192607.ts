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
    },
    // Override @nuxt/ui colors completely
    colors: {
      // Keep the default colors that might be needed
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      
      // Override primary and secondary
      primary: {
        50: "#fef2f2",
        100: "#fee2e2", 
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#D2410C", // Your brand color as primary-500
        600: "#EA580C", // Your brand light as primary-600
        700: "#9A2A00", // Your brand dark as primary-700
        800: "#7f1d1d",
        900: "#7f1d1d",
        950: "#450a0a",
        DEFAULT: "#D2410C" // Your main brand color
      },
      
      secondary: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb", 
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#374151", // Your secondary color
        600: "#4B5563", // Your secondary light
        700: "#374151", // Your secondary default
        800: "#1F2937", // Your secondary dark
        900: "#111827",
        950: "#030712",
        DEFAULT: "#374151"
      },
      
      // Keep gray scale
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db", 
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712"
      },
      
      // Add your accent colors
      accent: "#F97316",
      success: "#059669",
      warning: "#D97706", 
      error: "#DC2626",
      
      // Add common colors that UI components might need
      green: {
        50: "#f0fdf4",
        500: "#059669",
        600: "#047857"
      },
      red: {
        50: "#fef2f2", 
        500: "#DC2626",
        600: "#dc2626"
      },
      yellow: {
        50: "#fffbeb",
        500: "#D97706", 
        600: "#d97706"
      },
      blue: {
        50: "#eff6ff",
        500: "#3b82f6",
        600: "#2563eb"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};