import preset from "@nuxt/ui";
import type { Config } from 'tailwindcss';

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
    fontSize: {
      sm: "0.85rem",
      base: "0.95rem",
      lg: "1.05rem",
      xl: "1.25rem",

      "2xl": "1.7rem",
      "3xl": "2.0rem",
      "4xl": "2.4rem",
      "5xl": "2.8rem",
    },
  },
},
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};