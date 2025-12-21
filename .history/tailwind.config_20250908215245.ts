import preset from "@nuxt/ui";
import type { Config } from 'tailwindcss';
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>> {
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
      colors: {
        // Custom color palettes for @nuxt/ui
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
      },
      letterSpacing: {
        "wider-custom": "0.05em",
      },
      boxShadow: {
        brand: "0 4px 12px rgba(210, 65, 12, 0.1)",
        "brand-lg": "0 8px 24px rgba(210, 65, 12, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};