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
        heading: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        "wider-custom": "0.05em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};