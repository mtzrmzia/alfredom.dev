// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased h-full',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    // https://nuxt.com/modules/eslint
    '@nuxt/eslint',
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/image
    '@nuxt/image',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/og-image
    'nuxt-og-image',
    // https://nuxt.com/modules/sitemap
    '@nuxtjs/sitemap',
    // https://nuxt.com/modules/robots
    '@nuxtjs/robots',
    // https://nuxt.com/modules/vueuse
    '@vueuse/nuxt',
    // https://nuxt.com/modules/fonts
    '@nuxt/fonts',
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    disableTransition: false,
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: process.env.IMAGEKIT_URL,
    },
  },
  fonts: {
    families: [
      {
        name: 'Geist',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        global: true,
      },
      {
        name: 'Fraunces',
        weights: [500, 600, 700],
        styles: ['normal', 'italic'],
        global: true,
      },
    ],
  },
  i18n: {
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        code: 'es',
        language: 'es-MX',
        name: 'Español',
        file: 'es.json',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'es',
    vueI18n: './i18n.config.ts',
    baseUrl: process.env.SITE_URL,
  },
  site: {
    url: process.env.SITE_URL,
    name: 'Alfredo Martínez',
  },
  compatibilityDate: '2024-04-03',
});
