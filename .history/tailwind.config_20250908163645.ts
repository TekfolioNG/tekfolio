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
        hero: ["Inter", ...defaultTheme.fontFamily.sans], // Changed from Montserrat to Inter
      },
      colors: {
        // Syntanium Energy Brand Colors
        primary: {
          50: '#FFF7ED',   // Very light orange
          100: '#FFEDD5',  // Light orange
          200: '#FED7AA',  // Lighter orange
          300: '#FDBA74',  // Light orange
          400: '#FB923C',  // Medium orange
          500: '#D2410C',  // Deep Orange (Brand Primary)
          600: '#EA580C',  // Orange-500 (slightly lighter)
          700: '#C2410C',  // Orange-600 (darker)
          800: '#9A3412',  // Orange-700 (much darker)
          900: '#7C2D12',  // Orange-800 (darkest)
          950: '#431407',  // Orange-900 (very dark)
        },
        secondary: {
          50: '#F9FAFB',   // Very light grey
          100: '#F3F4F6',  // Light grey
          200: '#E5E7EB',  // Lighter grey
          300: '#D1D5DB',  // Light grey
          400: '#9CA3AF',  // Medium grey
          500: '#6B7280',  // Grey-500
          600: '#4B5563',  // Grey-600
          700: '#374151',  // Dark Grey (Brand Secondary)
          800: '#1F2937',  // Grey-800 (darker)
          900: '#111827',  // Grey-900 (darkest)
          950: '#030712',  // Grey-950 (very dark)
        },
        // Additional brand-aligned colors
        accent: {
          500: '#F97316',  // Orange-500 for highlights
          600: '#EA580C',  // Orange-600
        },
        success: {
          500: '#059669',  // Emerald-600
          600: '#047857',  // Emerald-700
        },
        warning: {
          500: '#D97706',  // Amber-600
          600: '#B45309',  // Amber-700
        },
        error: {
          500: '#DC2626',  // Red-600
          600: '#B91C1C',  // Red-700
        }
      },
      letterSpacing: {
        'wider-custom': '0.05em',
      },
      // Additional spacing for professional layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Professional shadows
      boxShadow: {
        'brand': '0 4px 12px rgba(210, 65, 12, 0.1)',
        'brand-lg': '0 8px 24px rgba(210, 65, 12, 0.15)',
      },
      // Animation for theme transitions
      transitionDuration: {
        '350': '350ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: 'class', // Enable class-based dark mode
}