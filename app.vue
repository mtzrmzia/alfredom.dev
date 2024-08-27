<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <div
      class="min-h-screen dark:bg-[rgb(5,5,5)] dark:text-gray-200 text-gray-800"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <UNotifications />
    </div>
  </Html>
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
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-light.png',
    },
  ],
});

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

useSeoMeta({
  titleTemplate: 'Alfredo Martínez - %s',
  title: 'FrontEnd Engineer',
  ogTitle: 'Alfredo Martínez - FrontEnd Engineer',
  description:
    "I'm a Software FrontEnd Engineer based in México, that loves to code and build stunning digital products on the web.",
  ogDescription:
    "I'm a Software FrontEnd Engineer based in México, that loves to code and build stunning digital products on the web.",
  ogType: 'website',
  ogUrl: 'https://alfredom.dev',
  ogSiteName: 'Alfredo Martínez',
  ogImageAlt: 'Alfredo Martínez',
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
