<template>
  <section>
    <h2 class="my-6 text-2xl font-semibold">
      {{ t('about.online.title') }}
    </h2>
    <p class="mb-6 opacity-70">
      {{ t('about.online.description') }}
    </p>
    <ul
      class="gap-3 grid grid-cols-2 sm:grid-cols-[repeat(6,min-content)] sm:grid-flow-col"
    >
      <li v-for="item in onlineItems" :key="item.label">
        <UButton
          color="neutral"
          variant="outline"
          :to="item.to"
          :icon="item.icon"
          target="_blank"
          class="w-full flex items-center justify-center"
        >
          {{ item.label }}
        </UButton>
      </li>
      <li>
        <CopyEmailButton />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OnlineSection',
});

const { t } = useI18n();

const onlineItems = [
  {
    label: 'Twitter',
    to: 'https://x.com/mtzrmzia',
    icon: 'i-ri-twitter-x-fill',
  },
  {
    label: 'Github',
    to: 'https://github.com/mtzrmzia',
    icon: 'i-ri-github-fill',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/mtzrmzia/',
    icon: 'i-ri-linkedin-box-fill',
  },
  {
    label: 'CV',
    to: 'https://cv.alfredom.dev/',
    icon: 'i-ri-file-text-line',
  },
  {
    label: 'Medium',
    to: 'https://medium.com/@mtzrmzia',
    icon: 'i-ri-medium-fill',
  },
];
</script>
