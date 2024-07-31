// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    https: {
      key: './certificates/alfredom.dev.test-key.pem',
      cert: './certificates/alfredom.dev.test.pem',
    },
    host: 'alfredom.dev.test',
  },

  compatibilityDate: '2024-04-03',
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
    // https://fonts.nuxt.com/
    '@nuxt/fonts',
  ],
  colorMode: {
    classSuffix: '',
    storageKey: 'color-mode',
    preference: 'system',
    fallback: 'light',
  },
  fonts: {
    families: [
      {
        name: 'Nunito Sans',
      },
    ],
    provider: 'google',
  },
});
