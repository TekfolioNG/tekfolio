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
        sans: ["Brlow", ...defaultTheme.fontFamily.sans],
        heading: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        hero: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'ppil': {
          blue: '#1A4173',
          red: '#D92121', 
          yellow: '#FFB81C',
        },
      },
      letterSpacing: {
        'wider-custom': '0.05em',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}