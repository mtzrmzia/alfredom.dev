<script setup lang="ts">
defineOptions({
  name: 'TravellingSection',
});

const { t } = useI18n();
</script>

<template>
  <section>
    <h1 class="my-6 text-2xl font-semibold">
      {{ t('about.travelling.title') }}
    </h1>
    <div
      class="mb-7 flex flex-col items-start justify-between sm:flex-row sm:space-x-8"
    >
      <div class="mb-3 sm:mb-0 opacity-70">
        <p>
          {{ t('about.travelling.p1') }}
        </p>
        <p>
          {{ t('about.travelling.p2') }}
        </p>
      </div>
      <div class="flex gap-2">
        <UBadge color="neutral" variant="outline" size="lg" class="rounded-lg">
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-500 opacity-75"
            />
            <span
              class="relative inline-flex size-2 rounded-full bg-neutral-500"
            />
          </span>
          {{ t('about.travelling.indicators.visited') }}
        </UBadge>
        <UBadge color="neutral" variant="outline" size="lg" class="rounded-lg">
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75"
            />
            <span
              class="relative inline-flex size-2 rounded-full bg-primary-500"
            />
          </span>
          {{ t('about.travelling.indicators.home') }}
        </UBadge>
      </div>
    </div>
    <WorldMap />
  </section>
</template>
