<template>
  <section>
    <h2 class="my-6 text-lg font-bold">
      {{ t('about.online.title') }}
    </h2>
    <ul
      class="gap-3 grid grid-cols-2 sm:grid-cols-[repeat(6,min-content)] sm:grid-flow-col"
    >
      <li v-for="item in onlineItems" :key="item.label">
        <UButton
          color="white"
          variant="solid"
          :to="item.to"
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
    to: 'https://x.com/mtzrmz_ia',
  },
  {
    label: 'Github',
    to: 'https://github.com/mtzrmzia',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/mtzrmzia/',
  },
  {
    label: 'CV',
    to: 'https://cv.alfredom.dev/',
  },
  {
    label: 'Medium',
    to: 'https://medium.com/@mtzrmzia',
  },
];
</script>
