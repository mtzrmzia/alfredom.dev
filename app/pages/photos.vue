<script setup lang="ts">
defineOptions({
  name: 'Photos',
});

const { t } = useI18n();
usePageSeoTranslation('photos');
defineOgImageComponent('CustomOgImage', {
  title: t('meta.photos.title'),
  description: t('meta.photos.ogDescription'),
  url: 'photos',
});
</script>

<template>
  <section>
    <div
      class="grid gap-3 mx-3 my-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4"
    >
      <NuxtImg
        v-for="(_, index) in Array(44)"
        :key="index"
        :src="`/travel/${index + 1}.jpeg`"
        format="webp"
        width="756"
        height="1008"
        :placeholder="[756, 1008]"
        loading="lazy"
        ismap
        decoding="auto"
        :alt="`Photo ${index + 1} of 44 by Alfredo Martínez`"
      />
    </div>
  </section>
</template>
