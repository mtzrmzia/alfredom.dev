<template>
  <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
    <AboutMeSection />
    <OnlineSection />
    <WorkSection />
    <TravellingSection />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'About',
});

const { t } = useI18n();

useSeoMeta({
  title: () => t('navigation.about.title'),
  ogTitle: () => t('navigation.about.ogTitle'),
  ogUrl: 'https://alfredom.dev/about',
});
</script>
