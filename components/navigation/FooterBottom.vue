<template>
  <footer
    class="border-t border-solid border-gray-100 dark:border-gray-900 mt-8"
  >
    <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
      <div
        class="flex items-center justify-between px-1 py-4 text-sm text-gray-500"
      >
        <span>Alfredo Martínez © 2024</span>
        <div class="flex items-center">
          <NuxtLink
            v-for="item in navigationSocial"
            :key="item.name"
            :to="item.to"
            :target="item.target"
            class="px-3 text-gray-500 transition-colors hover:text-gray-800 dark:hover:text-gray-300"
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

const navigationSocial = [
  {
    name: 'Twitter',
    to: 'https://x.com/mtzrmz_ia',
    target: '_blank',
    icon: 'ri:twitter-x-fill',
  },
  {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/mtzrmzia/',
    target: '_blank',
    icon: 'ri:linkedin-box-fill',
  },
  {
    name: 'Github',
    to: 'https://github.com/mtzrmzia',
    target: '_blank',
    icon: 'ri:github-fill',
  },
];
</script>
