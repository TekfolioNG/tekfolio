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
      sm: "0.75rem",
      base: "0.85rem",
      lg: "1.03rem",
      xl: "1.15rem",

      "2xl": "1.5rem",
      "3xl": "1.8rem",
      "4xl": "2.0rem",
      "5xl": "2.4rem",
    },
  },
},
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};