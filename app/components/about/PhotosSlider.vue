<script setup lang="ts">
defineOptions({
  name: 'PhotosSlider',
});

const photos = [
  {
    src: '/about/me_sbernabeu_23.jpeg',
    alt: 'Santiago Bernabeu 🇪🇦',
    class: 'md:rotate-[-2deg] md:translate-y-3',
  },
  {
    src: '/about/puppy_walk.jpeg',
    alt: 'Puppy 🐶️',
    class: 'md:-ml-8 md:-translate-y-2 md:rotate-1',
  },
  {
    src: '/about/me_cartagena_22.jpeg',
    alt: 'Cartagena 🏖️',
    class: 'md:-ml-8 md:translate-y-5 md:rotate-[-1deg]',
  },
  {
    src: '/about/me_amsterdam_23.jpeg',
    alt: 'Viaje por México',
    class: 'md:-ml-8 md:translate-y-1 md:rotate-2',
  },
];
</script>

<template>
  <div class="overflow-x-clip px-3 py-6">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0 md:px-12">
      <div
        v-for="photo in photos"
        :key="photo.src"
        :class="[
          'relative aspect-3/4 select-none overflow-hidden rounded-xl border border-neutral-300 bg-white p-1 shadow-md shadow-black/10 transition-transform duration-200 ease-out hover:scale-105 hover:rotate-0 dark:bg-neutral-200',
          photo.class,
        ]"
      >
        <div class="relative size-full overflow-hidden rounded-lg">
          <NuxtImg
            :src="photo.src"
            width="240"
            height="320"
            format="webp"
            placeholder
            :alt="photo.alt"
            class="block size-full object-cover"
          />
          <div class="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]" />
        </div>
      </div>
    </div>
  </div>
</template>
