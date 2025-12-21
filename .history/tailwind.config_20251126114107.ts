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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // With html font-size: 16px (default), these are:
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px (body text)
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px (h5/h6)
        'xl': ['1.375rem', { lineHeight: '1.4' }],     // 22px (h4)
        '2xl': ['1.625rem', { lineHeight: '1.4' }],    // 26px (h3)
        '3xl': ['2rem', { lineHeight: '1.3' }],        // 32px
        '4xl': ['2.5rem', { lineHeight: '1.3' }],      // 40px (h2)
        '5xl': ['2.75rem', { lineHeight: '1.2' }],     // 44px (h1)
        '6xl': ['3.5rem', { lineHeight: '1.1' }],      // 56px
        '7xl': ['4.5rem', { lineHeight: '1.1' }],      // 72px
        '8xl': ['6rem', { lineHeight: '1' }],          // 96px
        '9xl': ['8rem', { lineHeight: '1' }],          // 128px
      },
      letterSpacing: {
        "wider-custom": "0.05em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};