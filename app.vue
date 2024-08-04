<template>
  <div
    class="min-h-screen dark:bg-[rgb(5,5,5)] dark:text-gray-200 text-gray-800"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
});

useSeoMeta({
  titleTemplate: 'Alfredo Martínez - %s',
  title: 'FrontEnd Engineer',
  ogTitle: 'Alfredo Martínez - FrontEnd Engineer',
  description:
    "I'm a Software FrontEnd Engineer based in México, that loves to code and build stunning digital products on the web.",
  lang: 'es-MX',
  ogDescription:
    "I'm a Software FrontEnd Engineer based in México, that loves to code and build stunning digital products on the web.",
  ogType: 'website',
  ogUrl: 'https://alfredom.dev',
  ogSiteName: 'Alfredo Martínez',
  ogImageAlt: 'Alfredo Martínez',
  ogLocale: 'es_MX',
});
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}
</style>
