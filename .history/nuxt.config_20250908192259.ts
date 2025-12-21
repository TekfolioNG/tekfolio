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
    "@nuxt/image",
    "@nuxtjs/color-mode"
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  ui: {
    fonts: false
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