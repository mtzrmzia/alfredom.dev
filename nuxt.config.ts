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
  devtools: { enabled: false },
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
  i18n: {
    lazy: false,
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
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  site: {
    url: process.env.SITE_URL,
    name: 'Alfredo Martínez',
  },
  compatibilityDate: '2024-04-03',
});
