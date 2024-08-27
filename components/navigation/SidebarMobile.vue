<template>
  <USlideover v-model="modelValue" :ui="slideoverUI">
    <div class="absolute right-0 mx-6 my-2">
      <UButton
        class="rounded-full"
        variant="ghost"
        color="gray"
        size="xl"
        trailing-icon="heroicons:x-mark-16-solid"
        aria-label="close sidebar"
        role="button"
        @click="modelValue = false"
      />
    </div>
    <ul
      class="margin-0 flex h-full flex-1 flex-col items-center justify-center space-y-5 text-2xl"
    >
      <li>
        <NuxtLink
          to="/"
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          @click.self="closeSidebar"
        >
          {{ t('navigation.home.labelLink') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/about"
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          @click.self="closeSidebar"
        >
          {{ t('navigation.about.labelLink') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
        >
          {{ t('navigation.blog.labelLink') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/photos"
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          @click.self="closeSidebar"
        >
          {{ t('navigation.photos.labelLink') }}
        </NuxtLink>
      </li>
    </ul>
  </USlideover>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

defineOptions({
  name: 'SidebarMobile',
});

const { t } = useI18n();
const modelValue = defineModel({
  type: Boolean,
  default: true,
});

const slideoverUI = {
  width: 'max-w-screen',
  overlay: {
    transition: {
      enter: 'ease-in-out duration-150',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in-out duration-150',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  transition: {
    enter: 'transform transition ease-in-out duration-150',
    leave: 'transform transition ease-in-out duration-150',
  },
};

const breakpoints = useBreakpoints(breakpointsTailwind);

const smaller = breakpoints.greaterOrEqual('sm');

watch(
  smaller,
  (value) => {
    if (value) {
      modelValue.value = false;
    }
  },
  { immediate: true },
);

function closeSidebar() {
  modelValue.value = false;
  // setTimeout(() => {
  // }, 160);
}
</script>
