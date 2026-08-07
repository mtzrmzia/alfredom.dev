<script setup lang="ts">
defineOptions({
  name: 'TechStackSection',
});

const { t } = useI18n();

interface StackItem {
  name: string;
  imageLight: string;
  imageDark?: string;
}

const stack: StackItem[] = [
  { name: 'TypeScript', imageLight: '/stack/typeScript.svg' },
  { name: 'JavaScript', imageLight: '/stack/javaScript.svg' },
  { name: 'Vue', imageLight: '/stack/vue.svg' },
  { name: 'Nuxt', imageLight: '/stack/nuxt.svg' },
  { name: 'Nitro', imageLight: '/stack/nitro.svg' },
  { name: 'Tailwind CSS', imageLight: '/stack/tailwindCSS.svg' },
  { name: 'Vitest', imageLight: '/stack/vitest.svg' },
  { name: 'Git', imageLight: '/stack/git.svg' },
  {
    name: 'GitHub',
    imageLight: '/stack/github_light.svg',
    imageDark: '/stack/github_dark.svg',
  },
  { name: 'Postgres', imageLight: '/stack/postgreSQL.svg' },
  {
    name: 'PHP',
    imageLight: '/stack/php_light.svg',
    imageDark: '/stack/php_dark.svg',
  },
  { name: 'Laravel', imageLight: '/stack/laravel.svg' },
  { name: 'Cloudflare', imageLight: '/stack/cloudflare.svg' },
  {
    name: 'Vercel',
    imageLight: '/stack/vercel_light.svg',
    imageDark: '/stack/vercel_dark.svg',
  },
  {
    name: 'AWS',
    imageLight: '/stack/aws_light.svg',
    imageDark: '/stack/aws_dark.svg',
  },
  { name: 'Claude', imageLight: '/stack/claude.svg' },
  {
    name: 'Codex',
    imageLight: '/stack/codex_light.svg',
    imageDark: '/stack/codex_dark.svg',
  },
];
</script>

<template>
  <section class="my-12">
    <h2 class="mb-6 text-2xl font-semibold">{{ t('home.stack.title') }}</h2>
    <ul class="group grid grid-cols-3 justify-center sm:grid-cols-6">
      <li
        v-for="item in stack"
        :key="item.name"
        class="group/item flex aspect-square flex-col items-center justify-center gap-3 hover:[&_img]:scale-108"
      >
        <ColorModeImage
          v-if="item.imageDark"
          :light="item.imageLight"
          :dark="item.imageDark"
          :alt="item.name"
          width="40"
          height="40"
          class="size-10"
          img-class="object-contain transition-all group-hover:grayscale group-hover/item:grayscale-0!"
        />
        <NuxtImg
          v-else
          :src="item.imageLight"
          :alt="item.name"
          width="40"
          height="40"
          class="size-10 object-contain transition-all group-hover:grayscale group-hover/item:grayscale-0!"
          placeholder
        />
        <span class="text-xs text-muted">{{ item.name }}</span>
      </li>
    </ul>
  </section>
</template>
