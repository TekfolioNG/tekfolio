export default defineNuxtConfig({
  runtimeConfig: {
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    web3formsKey: process.env.WEB3FORMS_KEY,
    public: {
      paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/ui"
  ],
  ui: {
    fonts: true
  },
  nitro: {
    preset: "cloudflare-pages",
    output: {
      publicDir: ".output/public",
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  ssr: false,
  app: {
    baseURL: "/",
  },
  compatibilityDate: "2025-01-25",
});