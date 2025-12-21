export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    // Private keys (only available on server-side)
    web3formsKey: process.env.WEB3FORMS_KEY,

    public: {
      // Update API URL for Syntanium Energy if needed
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 
        (process.dev ? 'http://127.0.0.1:8787' : 'https://syntanium-api.your-domain.workers.dev')
    }
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/ui", 
    "@nuxt/image",
    "@nuxtjs/color-mode" // Add for dark/light theme toggle
  ],

  // Color mode configuration for theme switching
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

  ui: {
    fonts: true
  },

  image: {
    format: ['webp', 'avif', 'jpg', 'png', 'svg'], // Added avif for better compression
    quality: 85, // Slightly higher quality for professional site
    densities: [1, 2], // Support for retina displays
    domains: [], // Add your image domains here if needed
  },

  // SEO and Meta configuration
  app: {
    baseURL: "/",
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Syntanium Energy - Industrial Solutions & Engineering Services',
      meta: [
        {
          name: 'description',
          content: 'Leading provider of petrochemical processing, corrosion management, oil & gas solutions, and industrial engineering services.'
        },
        {
          name: 'keywords', 
          content: 'petrochemical, corrosion management, oil and gas, engineering, industrial solutions, maintenance, construction'
        },
        {
          property: 'og:title',
          content: 'Syntanium Energy - Industrial Solutions & Engineering Services'
        },
        {
          property: 'og:description',
          content: 'Leading provider of petrochemical processing, corrosion management, oil & gas solutions, and industrial engineering services.'
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  // Vite configuration for development
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

  // Production deployment configuration
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