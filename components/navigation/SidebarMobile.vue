<template>
  <USlideover v-model="modelValue" :ui="{ width: 'max-w-screen' }">
    <div class="absolute right-0 mx-6 my-2">
      <UButton
        class="rounded-full"
        variant="ghost"
        color="gray"
        size="xl"
        trailing-icon="i-heroicons-x-mark-16-solid"
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
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/"
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          >About</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/"
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          >Blog</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/"
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          >Photos</NuxtLink
        >
      </li>
    </ul>
  </USlideover>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
defineOptions({
  name: 'SidebarMobile',
});

const modelValue = defineModel({
  type: Boolean,
  default: true,
});

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
</script>
