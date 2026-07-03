<template>
  <footer class="border-t border-default my-8">
    <div
      class="m-[0_auto] max-w-4xl px-6 sm:px-4 dark:text-neutral-400 text-neutral-500"
    >
      <div class="flex items-center justify-center text-sm py-4 px-1">
        <span class="text-center">
          {{ t('navigation.footer.disclaimer') }}
        </span>
      </div>
      <div
        class="flex sm:flex-row flex-col items-center justify-between px-1 text-sm gap-4"
      >
        <span>Alfredo Martínez © {{ currentYear }}</span>
        <div class="flex items-center">
          <NuxtLink
            v-for="item in navigationSocial"
            :key="item.name"
            :to="item.to"
            :target="item.target"
            :aria-label="item.ariaLabel"
            class="px-3 text-neutral-500 transition-colors hover:text-neutral-800 dark:hover:text-neutral-400"
          >
            <UIcon :name="item.icon" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'FooterBottom',
});

const { t } = useI18n();
const currentYear = ref(new Date().getFullYear());
const navigationSocial = [
  {
    name: 'Twitter',
    to: 'https://x.com/mtzrmzia',
    target: '_blank',
    icon: 'ri:twitter-x-fill',
    ariaLabel: 'Twitter',
  },
  {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/mtzrmzia/',
    target: '_blank',
    icon: 'ri:linkedin-box-fill',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Github',
    to: 'https://github.com/mtzrmzia',
    target: '_blank',
    icon: 'ri:github-fill',
    ariaLabel: 'Github',
  },
];
</script>
