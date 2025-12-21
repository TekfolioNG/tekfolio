export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    web3formsKey: process.env.WEB3FORMS_KEY,
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxt/image",
  ],

  image: {
    format: ['webp', 'avif', 'jpg', 'png', 'svg'],
    quality: 85,
    densities: [1, 2],
    domains: [],
  },

  app: {
    baseURL: "/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      link: [
        // Google Fonts
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
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
    cloudflare: {
      pages: {
        routes: {
          include: ["/*"],
          exclude: [
            "/favicon.ico",
            "/assets/*",
            "/_nuxt/*",
            "/api/*",
          ],
        },
      },
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: "2025-01-25",
});
