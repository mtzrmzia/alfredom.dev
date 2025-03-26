<script setup lang="ts">
defineOptions({
  name: 'Index',
});

const { t } = useI18n();
usePageSeoTranslation('home');
</script>

<template>
  <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
    <section class="my-12">
      <TimeZoneTimer />
      <div class="flex justify-between gap-8">
        <div>
          <h1 class="flex gap-2 pb-4 text-2xl">
            <span class="font-bold">
              {{ t('home.greeting') }}
            </span>
            <span class="inline-block origin-[70%_70%] animate-wave">👋🏾</span>
          </h1>
          <div class="grid gap-4">
            <i18n-t
              keypath="home.paragraph1.text"
              class="sm:max-w-md"
              tag="p"
              scope="global"
            >
              <template #based>
                {{ t('home.paragraph1.based') }}
              </template>
              <template #code>
                <NuxtLink
                  to="https://github.com/mtzrmzia"
                  target="_blank"
                  class="underline underline-offset-2"
                >
                  {{ t('home.paragraph1.code') }}
                </NuxtLink>
              </template>
              <template #and>
                {{ t('home.paragraph1.and') }}
              </template>
            </i18n-t>

            <i18n-t
              keypath="home.paragraph2.text"
              class="sm:max-w-md"
              tag="p"
              scope="global"
            >
              <template #company>
                <NuxtLink
                  to="https://github.com/mtzrmzia"
                  target="_blank"
                  class="underline underline-offset-2"
                >
                  {{ t('home.paragraph2.company') }}
                </NuxtLink>
              </template>
            </i18n-t>
          </div>
        </div>
        <MainAvatar classes="sm:block hidden h-44 w-44" />
      </div>
    </section>
  </div>
</template>
