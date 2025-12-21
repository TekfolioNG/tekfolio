export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    // Private keys (only available on server-side)
    web3formsKey: process.env.WEB3FORMS_KEY,

    public: {
      // Workers API URL
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        (process.dev
          ? "http://127.0.0.1:8787"
          : "https://farm2door-api.tekfoliong.workers.dev"),
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@nuxt/ui", "@nuxt/image"],

  ui: {
    fonts: false, // handled manually via Google Fonts + Tailwind config
  },

  image: {
    format: ["webp", "jpg", "svg", "png"],
    quality: 80,
    // domains: ["images.unsplash.com", "cdn.syntaniumenergy.com"], // add if needed
  },

  vite: {
    server: {
      hmr: { timeout: 30000 },
      watch: { usePolling: true, interval: 1000 },
    },
    build: { chunkSizeWarningLimit: 1000 },
  },

  nitro: {
    preset: "cloudflare-pages",
    output: {
      publicDir: ".output/public",
      serverDir: ".output/server",
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/"],
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  app: {
    baseURL: "/",
  },

  compatibilityDate: "2025-01-25",
});
