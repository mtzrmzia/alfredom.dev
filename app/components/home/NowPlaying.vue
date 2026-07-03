<script setup lang="ts">
import { useDocumentVisibility, useIntervalFn } from '@vueuse/core';

defineOptions({
  name: 'NowPlaying',
});

const { t } = useI18n();

const { data: track, refresh } = await useFetch('/api/lastfm/now-playing');

const visibility = useDocumentVisibility();

useIntervalFn(
  () => {
    if (visibility.value === 'visible') {
      refresh();
    }
  },
  60_000,
);
</script>

<template>
  <UBadge
    v-if="track"
    color="neutral"
    variant="soft"
    size="lg"
    class="w-fit gap-2.5 rounded-lg px-3 py-2"
  >
    <NuxtImg
      src="/assets/apple-music.svg"
      alt="Apple Music"
      width="20"
      height="20"
      class="size-5 shrink-0 rounded-[6px]"
    />
    <p class="leading-snug">
      <span class="mr-1.5 inline-flex items-center gap-1.5 opacity-70">
        <span v-if="track.nowPlaying" class="relative inline-flex size-1.5">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"
          />
          <span
            class="relative inline-flex size-1.5 rounded-full bg-green-500"
          />
        </span>
        {{
          track.nowPlaying
            ? t('home.nowPlaying.listening')
            : t('home.nowPlaying.lastPlayed')
        }}
      </span>
      <span class="mr-1.5 opacity-40">—</span>
      <NuxtLink
        :to="track.url"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-1.5 underline underline-offset-2 hover:opacity-70"
      >
        {{ track.title }}
      </NuxtLink>
      <span class="opacity-70">· {{ track.artist }}</span>
    </p>
  </UBadge>
</template>
