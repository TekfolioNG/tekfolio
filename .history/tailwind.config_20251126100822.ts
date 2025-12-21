import preset from "@nuxt/ui";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
