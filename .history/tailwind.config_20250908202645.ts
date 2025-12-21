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
      colors: {
        // Define custom palettes that @nuxt/ui can reference
        brandprimary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#D2410C',  // Your exact brand primary
          600: '#EA580C',  // Your brand light
          700: '#9A2A00',  // Your brand dark
          800: '#c2410c',
          900: '#9a3412',
          950: '#431407',
        },
        brandsecondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#374151',  // Your exact brand secondary
          600: '#4B5563',  // Your brand secondary light
          700: '#374151',  // Your brand secondary default
          800: '#1F2937',  // Your brand secondary dark
          900: '#111827',
          950: '#030712',
        },
        // Optional: Keep brand colors for direct access if needed
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