<script setup lang="ts">
defineOptions({
  name: 'PhotosSlider',
});
</script>

<template>
  <div class="flex gap-0 lg:flex-wrap lg:gap-6 py-4 font-gloria">
    <div
      class="select-none p-4 rounded-lg bg-gradient-to-b from-white to-neutral-100 shadow-2xl dark:from-neutral-200 dark:to-neutral-200 text-center hover:scale-105 hover:rotate-0 transition-transform ease-out -rotate-3"
    >
      <div class="relative size-60 overflow-hidden rounded">
        <NuxtImg
          src="/about/me_sbernabeu_23.jpeg"
          width="240"
          height="240"
          format="webp"
          :placeholder="240"
          ismap
          decoding="auto"
          alt="Santiago Bernabeu 🇪🇦"
          class="block size-full object-cover"
        />
        <div class="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]" />
      </div>
      <p
        class="mt-3 text-center text-neutral-600 dark:text-neutral-800 text-md"
      >
        Santiago Bernabeu 🇪🇦
      </p>
    </div>
    <div
      class="select-none p-4 rounded-lg bg-gradient-to-b from-white to-neutral-100 shadow-2xl dark:from-neutral-200 dark:to-neutral-200 text-center hover:scale-105 hover:rotate-0 transition-transform ease-out rotate-1"
    >
      <div class="relative size-60 overflow-hidden rounded">
        <NuxtImg
          src="/about/puppy_walk.jpeg"
          width="240"
          height="240"
          format="webp"
          :placeholder="240"
          ismap
          decoding="auto"
          alt="Puppy 🐶️"
          class="block size-full object-cover"
        />
        <div class="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]" />
      </div>
      <p
        class="mt-3 text-center text-neutral-600 dark:text-neutral-800 text-md"
      >
        Puppy 🐶
      </p>
    </div>
    <div class="hidden sm:block">
      <div
        class="select-none p-4 rounded-lg bg-gradient-to-b from-white to-neutral-100 shadow-2xl dark:from-neutral-200 dark:to-neutral-200 text-center hover:scale-105 hover:rotate-0 transition-transform ease-out -rotate-2"
      >
        <div class="relative size-60 overflow-hidden rounded">
          <NuxtImg
            src="/about/me_cartagena_22.jpeg"
            width="240"
            height="240"
            format="webp"
            :placeholder="240"
            ismap
            decoding="auto"
            alt=" Cartagena 🏖️"
            class="block size-full object-cover"
          />
          <div class="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)]" />
        </div>
        <p
          class="mt-3 text-center text-neutral-600 dark:text-neutral-800 text-md"
        >
          Cartagena 🏖️
        </p>
      </div>
    </div>
  </div>
</template>
