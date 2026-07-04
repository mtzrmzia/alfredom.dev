<script setup lang="ts">
import { useDocumentVisibility, useIntervalFn } from '@vueuse/core';

defineOptions({
  name: 'GitHubActivity',
});

const { t, locale } = useI18n();

const { data, refresh } = await useFetch('/api/github/contributions');

const visibility = useDocumentVisibility();

useIntervalFn(
  () => {
    if (visibility.value === 'visible') {
      refresh();
    }
  },
  60_000,
);

const paddedDays = computed(() => {
  const days = data.value?.contributions ?? [];
  const [firstDay] = days;
  if (!firstDay) return [];

  const startPad = new Date(`${firstDay.date}T00:00:00Z`).getUTCDay();

  return [...Array.from({ length: startPad }, () => null), ...days];
});

const weekCount = computed(() => Math.ceil(paddedDays.value.length / 7));

const monthLabels = computed(() => {
  const labels: { label: string; column: number }[] = [];
  let lastMonth = -1;

  paddedDays.value.forEach((day, index) => {
    if (!day) return;

    const date = new Date(`${day.date}T00:00:00Z`);
    const month = date.getUTCMonth();

    if (month !== lastMonth) {
      lastMonth = month;
      labels.push({
        label: date.toLocaleDateString(locale.value, {
          month: 'short',
          timeZone: 'UTC',
        }),
        column: Math.floor(index / 7) + 1,
      });
    }
  });

  // Drop the first label if it's a partial leading week too close to
  // the next one (e.g., a lone "Jun" right before "Jul").
  const [first, second] = labels;
  if (first && second && second.column - first.column < 2) {
    labels.shift();
  }

  return labels;
});

const totalContributions = computed(
  () => Object.values(data.value?.total ?? {})[0] ?? 0,
);

const yearRange = computed(() => {
  const days = data.value?.contributions ?? [];
  const firstDay = days[0];
  const lastDay = days[days.length - 1];
  if (!firstDay || !lastDay) return '';

  const startYear = new Date(`${firstDay.date}T00:00:00Z`).getUTCFullYear();
  const endYear = new Date(`${lastDay.date}T00:00:00Z`).getUTCFullYear();

  return startYear === endYear
    ? `${startYear}`
    : `${startYear}-${String(endYear).slice(2)}`;
});

const levelClasses = [
  'bg-neutral-100 dark:bg-neutral-800',
  'bg-neutral-300 dark:bg-neutral-700',
  'bg-neutral-400 dark:bg-neutral-600',
  'bg-neutral-600 dark:bg-neutral-400',
  'bg-neutral-800 dark:bg-neutral-200',
];

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString(locale.value, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
</script>

<template>
  <section v-if="data">
    <h2 class="my-6 text-2xl font-semibold">
      {{ t('about.github.title') }}
    </h2>
    <div class="scrollbar-hide overflow-x-auto">
      <div class="w-fit">
        <div
          class="grid gap-1"
          :style="{
            gridTemplateColumns: `repeat(${weekCount}, 0.75rem)`,
          }"
        >
          <span
            v-for="month in monthLabels"
            :key="month.column"
            class="text-xs tracking-wide uppercase opacity-50"
            :style="{ gridColumnStart: month.column }"
          >
            {{ month.label }}
          </span>
        </div>
        <div
          class="mt-1 grid grid-flow-col grid-rows-7 gap-1"
          :style="{
            gridTemplateColumns: `repeat(${weekCount}, 0.75rem)`,
          }"
        >
          <template v-for="(day, index) in paddedDays" :key="index">
            <div v-if="!day" class="size-3" />
            <UTooltip
              v-else
              :text="
                t('about.github.contributionsOn', {
                  count: day.count,
                  date: formatDate(day.date),
                })
              "
              :delay-duration="100"
            >
              <div
                class="size-3 cursor-pointer rounded-sm"
                :class="levelClasses[day.level]"
              />
            </UTooltip>
          </template>
        </div>
        <div
          class="mt-3 flex items-center justify-between gap-4 text-xs whitespace-nowrap opacity-70"
        >
          <span>
            <strong class="text-neutral-900 dark:text-white">{{
              totalContributions
            }}</strong>
            {{ t('about.github.contributions').toUpperCase() }} ·
            {{ yearRange }}
          </span>
          <div class="flex items-center gap-1">
            {{ t('about.github.less') }}
            <div
              v-for="level in 5"
              :key="level"
              class="size-3 rounded-sm"
              :class="levelClasses[level - 1]"
            />
            {{ t('about.github.more') }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-2 flex items-center justify-center gap-1 text-xs opacity-40 sm:hidden"
    >
      {{ t('about.github.scrollHint') }}
      <UIcon name="i-heroicons-arrow-right" class="scroll-hint size-3.5" />
    </div>
  </section>
</template>
