<script setup lang="ts">
defineOptions({
  name: 'PhotosSlider',
});

const photos = [
  {
    src: '/about/me_sbernabeu_23.jpeg',
    alt: 'Santiago Bernabeu 🇪🇦',
    label: 'Santiago Bernabeu 🇪🇦',
    class: '-rotate-3',
  },
  {
    src: '/about/puppy_walk.jpeg',
    alt: 'Puppy 🐶️',
    label: 'Puppy 🐶',
    class: 'rotate-1',
  },
  {
    src: '/about/me_cartagena_22.jpeg',
    alt: 'Cartagena 🏖️',
    label: 'Cartagena 🏖️',
    class: 'hidden -rotate-2 sm:block',
  },
];
</script>

<template>
  <div class="flex gap-0 lg:flex-wrap lg:gap-6 py-4 font-gloria">
    <div
      v-for="photo in photos"
      :key="photo.src"
      :class="[
        'select-none rounded-lg bg-gradient-to-b from-white to-neutral-100 p-4 text-center shadow-2xl transition-transform ease-out hover:scale-105 hover:rotate-0 dark:from-neutral-200 dark:to-neutral-200',
        photo.class,
      ]"
    >
      <div class="relative size-60 overflow-hidden rounded">
        <NuxtImg
          :src="photo.src"
          width="240"
          height="240"
          format="webp"
          placeholder
          :alt="photo.alt"
          class="block size-full object-cover"
        />
        <div class="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]" />
      </div>
      <p
        class="mt-3 text-center text-neutral-600 dark:text-neutral-800 text-md"
      >
        {{ photo.label }}
      </p>
    </div>
  </div>
</template>
