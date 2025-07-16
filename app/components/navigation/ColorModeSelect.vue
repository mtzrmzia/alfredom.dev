<script setup lang="ts">
import { useFavicon } from '@vueuse/core';
import type { DropdownMenuItem } from '#ui/types';

defineOptions({
  name: 'ColorModeSelect',
});
const colorMode = useColorMode();
const { t } = useI18n();

const iconMode = computed((): string => {
  return colorMode.value === 'light' ? 'hugeicons:sun-03' : 'hugeicons:moon-02';
});

const favicon = computed((): string =>
  colorMode.value === 'dark' ? '/favicon-dark.png' : '/favicon-light.png',
);

const keyLabel = computed((): string => {
  return colorMode.preference;
});

const items = computed<DropdownMenuItem[]>(() => {
  return [
    {
      label: t('navigation.colorMode.system'),
      class: 'system',
      onSelect: () => {
        colorMode.preference = 'system';
      },
    },
    {
      label: t('navigation.colorMode.light'),
      class: 'light',
      onSelect: () => {
        colorMode.preference = 'light';
      },
    },
    {
      label: t('navigation.colorMode.dark'),
      class: 'dark',
      onSelect: () => {
        colorMode.preference = 'dark';
      },
    },
  ];
});
useFavicon(favicon);
</script>

<template>
  <CustomDropdown
    :icon="iconMode"
    :items="items"
    :key-label="keyLabel"
    aria-label="select color mode"
  />
</template>
