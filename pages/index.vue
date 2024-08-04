<template>
  <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
    <section class="my-12">
      <TimeZoneTimer />
      <div class="flex justify-between gap-8">
        <div>
          <h1 class="flex gap-2 pb-4 text-2xl">
            <span class="font-bold">
              {{ t('index.greeting') }}
            </span>
            <span class="inline-block origin-[70%_70%] animate-wave">👋🏾</span>
          </h1>
          <div class="grid gap-4">
            <Translation
              keypath="index.paragraph1.text"
              class="sm:max-w-md"
              tag="p"
            >
              {{ t('index.paragraph1.based') }}
              <NuxtLink
                to="https://github.com/mtzrmzia"
                target="_blank"
                class="underline underline-offset-2"
              >
                {{ t('index.paragraph1.code') }}
              </NuxtLink>
              <NuxtLink
                to="https://github.com/mtzrmzia"
                target="_blank"
                class="underline underline-offset-2"
              >
                {{ t('index.paragraph1.write') }}
              </NuxtLink>
              {{ t('index.paragraph1.and') }}
            </Translation>
            <Translation
              keypath="index.paragraph2.text"
              class="sm:max-w-md"
              tag="p"
            >
              <NuxtLink
                to="https://github.com/mtzrmzia"
                target="_blank"
                class="underline underline-offset-2"
              >
                {{ t('index.paragraph2.pemex') }}
              </NuxtLink>
            </Translation>
          </div>
        </div>
        <MainAvatar classes="sm:block hidden h-44 w-44" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Translation } from 'vue-i18n';

defineOptions({
  name: 'Index',
});

const { t } = useI18n();

useSeoMeta({
  title: () => t('navigation.home.title'),
  ogTitle: () => t('navigation.home.ogTitle'),
  ogUrl: 'https://alfredom.dev/',
  ogSiteName: 'Alfredo Martínez',
});
</script>
