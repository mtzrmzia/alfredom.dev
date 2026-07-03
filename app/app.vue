<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

const { locale } = useI18n();

const head = useLocaleHead();

const lang = computed(() => unref(head).htmlAttrs?.lang);
const dir = computed(
  () => unref(head).htmlAttrs?.dir as 'ltr' | 'rtl' | 'auto',
);

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-dark.png',
    },
  ],
});
</script>

<template>
  <UApp :locale="locales[locale]">
    <div
      class="min-h-screen selection:bg-primary-300 selection:text-primary-900"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
