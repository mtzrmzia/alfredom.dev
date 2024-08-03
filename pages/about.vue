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

useSeoMeta({
  title: 'About me',
  ogTitle: 'Alfredo Martínez - About me',
  ogUrl: 'https://alfredom.dev/about',
});
</script>
