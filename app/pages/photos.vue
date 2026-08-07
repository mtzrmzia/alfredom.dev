<script setup lang="ts">
defineOptions({
  name: 'Photos',
});

const { t } = useI18n();
const photos = useState<number[]>('photos-order', () => {
  const order = Array.from({ length: 44 }, (_, index) => index + 1);

  for (let index = order.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const currentPhoto = order[index];
    const randomPhoto = order[randomIndex];

    if (currentPhoto === undefined || randomPhoto === undefined) continue;

    order[index] = randomPhoto;
    order[randomIndex] = currentPhoto;
  }

  return order;
});

usePageSeoTranslation('photos');
defineOgImage('CustomOgImage', {
  title: t('meta.photos.title'),
  description: t('meta.photos.ogDescription'),
  url: 'photos',
});
</script>

<template>
  <section>
    <div
      class="columns-1 gap-3 mx-3 my-3 sm:columns-2 md:columns-3 2xl:columns-4"
    >
      <NuxtImg
        v-for="photo in photos"
        :key="photo"
        :src="`/travel/${photo}.jpeg`"
        format="webp"
        width="756"
        height="1008"
        :placeholder="[756, 1008]"
        loading="lazy"
        quality="80"
        :alt="`Photo ${photo} of 44 by Alfredo Martínez`"
        class="mb-3 w-full break-inside-avoid rounded-lg"
      />
    </div>
  </section>
</template>
