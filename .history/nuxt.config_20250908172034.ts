export default defineNuxtConfig({
  ssr: true,

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@nuxt/ui", "@nuxt/image"],

  ui: {
    fonts: false, // handled via Google Fonts + Tailwind config
  },

  image: {
    format: ["webp", "jpg", "svg", "png"],
    quality: 80,
  },

  app: {
    head: {
      titleTemplate: "%s - Syntanium Energy",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Syntanium Energy delivers engineering, maintenance, and project management solutions with a strong commitment to safety, quality, and sustainability." },
        { property: "og:site_name", content: "Syntanium Energy" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },

  compatibilityDate: "2025-01-25",
});
