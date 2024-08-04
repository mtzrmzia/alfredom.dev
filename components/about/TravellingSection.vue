<template>
  <section>
    <h1 class="my-6 text-xl font-bold">
      {{ t('about.travelling.title') }}
    </h1>
    <div
      class="mb-7 flex flex-col items-start justify-between sm:flex-row sm:space-x-8"
    >
      <div class="mb-3 sm:mb-0">
        <p>
          {{ t('about.travelling.p1') }}
        </p>
        <p>
          {{ t('about.travelling.p2') }}
        </p>
      </div>
      <div class="flex space-x-2">
        <div
          class="flex items-center justify-center rounded-full border border-neutral-400 border-opacity-30 bg-transparent px-4 py-2 text-sm font-semibold text-neutral-700 opacity-100 dark:border-neutral-700 dark:text-neutral-200"
        >
          <div class="relative mr-2 flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-neutral-500"
            ></span
            ><span
              class="relative inline-flex h-2 w-2 rounded-full bg-neutral-500"
            ></span>
          </div>
          {{ t('about.travelling.indicators.visited') }}
        </div>
        <div
          class="flex items-center justify-center rounded-full border border-neutral-400 border-opacity-30 bg-transparent px-4 py-2 text-sm font-semibold text-neutral-700 opacity-100 dark:border-neutral-700 dark:text-neutral-200"
        >
          <div class="relative mr-2 flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-sky-500"
            ></span
            ><span
              class="relative inline-flex h-2 w-2 rounded-full bg-primary-500"
            ></span>
          </div>
          {{ t('about.travelling.indicators.home') }}
        </div>
      </div>
    </div>
    <WorldMap />
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TravellingSection',
});

const { t } = useI18n();
</script>
