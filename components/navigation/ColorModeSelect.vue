<template>
  <ClientOnly>
    <UDropdown
      :items="items"
      :popper="{ placement: 'bottom-start' }"
      :ui="{ width: 'w-auto', padding: 'p-2', rounded: 'rounded-xl' }"
    >
      <UButton
        class="rounded-full"
        variant="ghost"
        color="gray"
        size="md"
        :trailing-icon="iconMode"
      />
      <template #item="{ item }">
        <div class="py-0.5 pl-10 relative pr-2">
          <div class="absolute flex inset-y-0 items-center left-0 pl-2">
            <UIcon
              v-if="isSelected(item.class)"
              name="heroicons:check-16-solid"
              class="w-5 h-5"
            />
          </div>
          <span
            :class="[isSelected(item.class) ? 'font-semibold' : 'font-normal']"
            class="truncate"
          >
            {{ item.label }}
          </span>
        </div>
      </template>
    </UDropdown>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core';

defineOptions({
  name: 'ColorModeSelect',
});
const colorMode = useColorMode();

const iconMode = computed(() => {
  return colorMode.value === 'light'
    ? 'solar:sun-2-bold-duotone'
    : 'solar:moon-bold-duotone';
});

const favicon = computed((): string =>
  colorMode.value === 'dark' ? '/favicon-dark.png' : '/favicon-light.png',
);

const items = [
  [
    {
      label: 'Sistema',
      class: 'system',
      click: () => {
        colorMode.preference = 'system';
      },
    },
    {
      label: 'Claro',
      class: 'light',
      click: () => {
        colorMode.preference = 'light';
      },
    },
    {
      label: 'Oscuro',
      class: 'dark',
      click: () => {
        colorMode.preference = 'dark';
      },
    },
  ],
];

function isSelected(value: string) {
  return colorMode.preference === value;
}

useFavicon(favicon);
</script>
