<script setup lang="ts">
defineOptions({
  name: 'About',
});
const { t } = useI18n();
usePageSeoTranslation('about');
defineOgImage('CustomOgImage', {
  title: t('meta.about.title'),
  description: t('meta.about.ogDescription'),
  url: 'about',
});
</script>

<template>
  <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
    <AboutMeSection />
    <OnlineSection />
    <WorkSection />
    <TravellingSection />
  </div>
</template>
