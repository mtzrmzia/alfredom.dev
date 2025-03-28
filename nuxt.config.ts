// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...(process.env.NITRO_HOST
    ? {
        devServer: {
          https: {
            key: './certificates/alfredom.dev.test-key.pem',
            cert: './certificates/alfredom.dev.test.pem',
          },
          host: process.env.NITRO_HOST,
        },
      }
    : {}),
  experimental: {
    typedPages: true,
  },
  ssr: true,
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
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/image
    '@nuxt/image',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/og-image
    'nuxt-og-image',
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
      baseURL: 'https://ik.imagekit.io/alfredom',
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
    baseUrl: 'https://alfredom.dev',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  site: {
    url: 'https://alfredom.dev',
    name: 'Alfredo Martínez',
  },
  compatibilityDate: '2024-04-03',
});
