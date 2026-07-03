<template>
  <USlideover
    v-model:open="open"
    :ui="slideoverUI"
    title="Navigation menu"
    description="Main site navigation"
  >
    <template #content>
      <div class="absolute right-0 mx-6 my-2 border-0">
        <UButton
          class="rounded-full"
          icon="heroicons:x-mark-16-solid"
          size="md"
          color="neutral"
          variant="ghost"
          aria-label="close sidebar"
          role="button"
          @click="open = false"
        />
      </div>
      <ul
        class="margin-0 flex h-full flex-1 flex-col items-center justify-center space-y-5 text-2xl"
      >
        <li>
          <NuxtLink
            to="/"
            class="text-neutral-900 dark:text-white hover:opacity-60 transition-opacity"
            exact-active-class="!text-primary"
            @click.self="closeSidebar"
          >
            {{ t('navigation.home.labelLink') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="text-neutral-900 dark:text-white hover:opacity-60 transition-opacity"
            exact-active-class="!text-primary"
            @click.self="closeSidebar"
          >
            {{ t('navigation.about.labelLink') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/photos"
            class="text-neutral-900 dark:text-white hover:opacity-60 transition-opacity"
            exact-active-class="!text-primary"
            @click.self="closeSidebar"
          >
            {{ t('navigation.photos.labelLink') }}
          </NuxtLink>
        </li>
      </ul>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

defineOptions({
  name: 'SidebarMobile',
});

const { t } = useI18n();
const open = defineModel({
  type: Boolean,
  default: true,
});

const slideoverUI = {
  content: 'max-w-screen transform transition ease-in-out duration-150',
  overlay:
    'ease-in-out duration-150 data-[state=open]:opacity-100 data-[state=closed]:opacity-0',
};

const breakpoints = useBreakpoints(breakpointsTailwind);

const smaller = breakpoints.greaterOrEqual('sm');

watch(
  smaller,
  (value) => {
    if (value) {
      open.value = false;
    }
  },
  { immediate: true },
);

function closeSidebar() {
  open.value = false;
}
</script>
