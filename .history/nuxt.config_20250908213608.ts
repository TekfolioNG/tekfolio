export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    // Private keys (only available on server-side)
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
    // Remove @nuxtjs/color-mode since @nuxt/ui handles this
  ],

  // Remove the colorMode config since @nuxt/ui handles this
  // colorMode: { ... },

  ui: {
    fonts: false,
    // Configure @nuxt/ui's color mode
    colorMode: {
      preference: 'system',
      fallback: 'light',
      storageKey: 'nuxt-color-mode'
    }
  },

  image: {
    format: ['webp', 'avif', 'jpg', 'png', 'svg'],
    quality: 85,
    densities: [1, 2],
    domains: [],
  },

  app: {
    baseURL: "/",
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  vite: {
    server: {
      hmr: {
        timeout: 30000,
      },
      watch: {
        usePolling: true,
        interval: 1000
      }
    },
    build: {
      chunkSizeWarningLimit: 1000
    }
  },

  nitro: {
    preset: "cloudflare-pages",
    output: {
      publicDir: ".output/public",
      serverDir: '.output/server'
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        '/who-we-are',
        '/solutions-expertise',
        '/our-commitment', 
        '/careers',
        '/contact'
      ]
    }
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: "2025-01-25",
});